param(
  [Parameter(Mandatory = $true)]
  [ValidateSet(
    "pressure-washing",
    "gutter-cleaning",
    "paver-sealing",
    "house-washing",
    "window-cleaning",
    "holiday-lighting",
    "soft-washing"
  )]
  [string]$ServiceSlug,

  [string]$WorkbookPath = "C:\Users\itexp\Downloads\Godly_Windows_Content_MASTER.xlsx"
)

$ErrorActionPreference = "Stop"

$serviceSheets = [ordered]@{
  "pressure-washing" = "Pressure Washing"
  "gutter-cleaning" = "Gutter Cleaning"
  "paver-sealing" = "Paver Sealing"
  "house-washing" = "House Washing"
  "window-cleaning" = "Window Cleaning"
  "holiday-lighting" = "Holiday Lighting"
  "soft-washing" = "Soft Washing"
}

$expectedCounts = @{
  "pressure-washing" = 19
  "gutter-cleaning" = 18
  "paver-sealing" = 16
  "house-washing" = 16
  "window-cleaning" = 4
  "holiday-lighting" = 1
  "soft-washing" = 1
}

function Read-ZipText {
  param(
    [System.IO.Compression.ZipArchive]$Archive,
    [string]$EntryName
  )

  $entry = $Archive.GetEntry($EntryName)
  if (-not $entry) {
    throw "Workbook entry not found: $EntryName"
  }

  $reader = [System.IO.StreamReader]::new($entry.Open())
  try {
    return $reader.ReadToEnd()
  }
  finally {
    $reader.Dispose()
  }
}

function Get-WorksheetRows {
  param([xml]$Worksheet)

  $namespace = [System.Xml.XmlNamespaceManager]::new($Worksheet.NameTable)
  $namespace.AddNamespace(
    "m",
    "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  )

  $result = @()
  foreach ($row in $Worksheet.SelectNodes("//m:sheetData/m:row", $namespace)) {
    $values = [ordered]@{}
    foreach ($cell in $row.SelectNodes("./m:c", $namespace)) {
      $column = $cell.GetAttribute("r") -replace "\d", ""
      if ($cell.GetAttribute("t") -eq "inlineStr") {
        $inline = $cell.SelectSingleNode("./m:is", $namespace)
        $values[$column] = if ($inline) { $inline.InnerText } else { "" }
      }
      else {
        $value = $cell.SelectSingleNode("./m:v", $namespace)
        $values[$column] = if ($value) { $value.InnerText } else { "" }
      }
    }
    $result += ,$values
  }

  return $result
}

function Split-Lines {
  param([string]$Value)

  return @(
    $Value -split "`r?`n" |
      ForEach-Object { $_.Trim() } |
      Where-Object { $_.Length -gt 0 }
  )
}

function Split-CardLine {
  param(
    [string]$Line,
    [switch]$AllowBodyOnly
  )

  $parts = $Line -split " — ", 2
  if ($parts.Count -eq 2) {
    return [ordered]@{
      title = $parts[0].Trim()
      text = $parts[1].Trim()
    }
  }

  if ($AllowBodyOnly) {
    return [ordered]@{ text = $Line.Trim() }
  }

  throw "Expected a title/body separator in: $Line"
}

function Convert-NumberedCards {
  param(
    [string]$Value,
    [switch]$TrailingPeriod
  )

  $result = @()
  $index = 0
  foreach ($line in (Split-Lines $Value)) {
    $index += 1
    $card = Split-CardLine $line
    $number = $index.ToString("00")
    if ($TrailingPeriod) {
      $number += "."
    }

    $result += ,[ordered]@{
      number = $number
      title = $card.title
      text = $card.text
    }
  }
  return $result
}

function Convert-Cards {
  param(
    [string]$Value,
    [switch]$AllowBodyOnly,
    [string]$TitleKey = "title",
    [string]$TextKey = "text"
  )

  $result = @()
  foreach ($line in (Split-Lines $Value)) {
    $card = Split-CardLine $line -AllowBodyOnly:$AllowBodyOnly
    $item = [ordered]@{}
    if ($card.Contains("title")) {
      $item[$TitleKey] = $card.title
    }
    $item[$TextKey] = $card.text
    $result += ,$item
  }
  return $result
}

function Convert-InteriorSection {
  param([string]$Note)

  $prefix = "INTERIOR WINDOW CLEANING section (2 short paragraphs): "
  if (-not $Note.StartsWith($prefix)) {
    throw "Unexpected Window Cleaning note: $Note"
  }

  $copy = $Note.Substring($prefix.Length).Trim()
  $match = [regex]::Match(
    $copy,
    "^(?<first>.+?sills\.)\s+(?<second>Interior cleaning.+)$"
  )
  if (-not $match.Success) {
    throw "Could not split Window Cleaning interior copy into two paragraphs."
  }

  return [ordered]@{
    heading = "Interior Window Cleaning"
    body = @(
      $match.Groups["first"].Value.Trim(),
      $match.Groups["second"].Value.Trim()
    )
  }
}

if (-not (Test-Path -LiteralPath $WorkbookPath)) {
  throw "Workbook not found: $WorkbookPath"
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead($WorkbookPath)
try {
  [xml]$workbook = Read-ZipText $archive "xl/workbook.xml"
  $workbookNamespace = [System.Xml.XmlNamespaceManager]::new(
    $workbook.NameTable
  )
  $workbookNamespace.AddNamespace(
    "m",
    "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  )
  $sheetNames = @(
    $workbook.SelectNodes("//m:sheets/m:sheet", $workbookNamespace) |
      ForEach-Object { $_.GetAttribute("name") }
  )

  [xml]$overviewWorksheet = Read-ZipText $archive "xl/worksheets/sheet1.xml"
  $overviewRows = Get-WorksheetRows $overviewWorksheet
  $overviewUrls = @(
    $overviewRows |
      ForEach-Object { $_["A"] } |
      Where-Object { $_ -match "^\s*https://godlywindows\.com/" } |
      ForEach-Object { $_.Trim() }
  )

  $allDetailUrls = @()
  $selectedRows = @()
  for ($sheetIndex = 1; $sheetIndex -lt $sheetNames.Count; $sheetIndex += 1) {
    $sheetName = $sheetNames[$sheetIndex]
    [xml]$worksheet = Read-ZipText `
      $archive `
      "xl/worksheets/sheet$($sheetIndex + 1).xml"
    $rows = @(Get-WorksheetRows $worksheet | Select-Object -Skip 2)
    $allDetailUrls += @($rows | ForEach-Object { $_["B"] })

    if ($sheetName -eq $serviceSheets[$ServiceSlug]) {
      $selectedRows = $rows
    }
  }

  if ($allDetailUrls.Count -ne 75) {
    throw "Expected 75 detail URLs, found $($allDetailUrls.Count)."
  }
  if (@($allDetailUrls | Sort-Object -Unique).Count -ne 75) {
    throw "The workbook contains duplicate detail URLs."
  }
  if (@($overviewUrls | Sort-Object).Count -ne 75) {
    throw "Expected 75 Overview URLs, found $($overviewUrls.Count)."
  }
  if (@($overviewUrls | Where-Object { $_ -notin $allDetailUrls }).Count -gt 0) {
    throw "The Overview and service-tab URL lists do not match."
  }
  if ($selectedRows.Count -ne $expectedCounts[$ServiceSlug]) {
    throw (
      "Expected $($expectedCounts[$ServiceSlug]) $ServiceSlug rows, " +
      "found $($selectedRows.Count)."
    )
  }

  $content = [ordered]@{}
  foreach ($row in $selectedRows) {
    foreach ($column in "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L") {
      if ([string]::IsNullOrWhiteSpace($row[$column])) {
        throw "Missing required column $column for $($row['A'])/$ServiceSlug."
      }
    }

    $uri = [uri]$row["B"]
    $segments = @($uri.AbsolutePath.Trim("/").Split("/"))
    if ($segments.Count -ne 2 -or $segments[1] -ne $ServiceSlug) {
      throw "Unexpected route for $($row['A']): $($row['B'])"
    }
    $citySlug = $segments[0]

    $page = [ordered]@{
      sourceUrl = $row["B"].Trim()
      metaTitle = $row["C"].Trim()
      metaDescription = $row["D"].Trim()
      h1 = $row["E"].Trim()
      hero = $row["F"].Trim()
      included = Convert-NumberedCards $row["G"]
      essential = Convert-NumberedCards $row["H"] -TrailingPeriod
      nearYou = Convert-Cards $row["I"] -AllowBodyOnly
      chooseUs = Convert-Cards $row["J"] -TitleKey "name" -TextKey "description"
      faqs = Convert-Cards $row["K"] -TitleKey "question" -TextKey "answer"
      localCta = $row["L"].Trim()
    }

    if (-not [string]::IsNullOrWhiteSpace($row["M"])) {
      if ($ServiceSlug -ne "window-cleaning") {
        throw "Unexpected Notes content for $($row['B'])."
      }
      $page["interiorSection"] = Convert-InteriorSection $row["M"]
    }

    if (-not $content.Contains($citySlug)) {
      $content[$citySlug] = [ordered]@{}
    }
    $content[$citySlug][$ServiceSlug] = $page
  }

  $variableName = ($ServiceSlug -split "-" | ForEach-Object {
    $_.Substring(0, 1).ToUpperInvariant() + $_.Substring(1)
  }) -join ""
  $variableName = $variableName.Substring(0, 1).ToLowerInvariant() +
    $variableName.Substring(1) + "Content"

  $hash = (Get-FileHash -LiteralPath $WorkbookPath -Algorithm SHA256).Hash
  $json = $content | ConvertTo-Json -Depth 20
  $outputDirectory = Join-Path $PSScriptRoot (
    "..\src\data\cityServicesData\finalNotRankingPages"
  )
  $outputDirectory = [System.IO.Path]::GetFullPath($outputDirectory)
  [System.IO.Directory]::CreateDirectory($outputDirectory) | Out-Null
  $outputPath = Join-Path $outputDirectory "$ServiceSlug.js"
  $output = @"
// AUTO-GENERATED from Godly_Windows_Content_MASTER.xlsx
// Source SHA-256: $hash
export const $variableName = $json;
"@
  [System.IO.File]::WriteAllText(
    $outputPath,
    $output,
    [System.Text.UTF8Encoding]::new($false)
  )

  Write-Output (
    "Generated $($selectedRows.Count) $ServiceSlug pages at $outputPath"
  )
}
finally {
  $archive.Dispose()
}
