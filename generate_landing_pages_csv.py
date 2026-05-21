import re
import csv
import sys

def parse_landing_pages_md(md_file, csv_file):
    with open(md_file, 'r') as f:
        lines = f.readlines()

    rows = []
    current_city = None

    for line in lines:
        line = line.strip()
        # Match city headers (## City Name)
        city_match = re.match(r'^## (.+)$', line)
        if city_match:
            current_city = city_match.group(1).strip()
            continue

        # Match URL lines (- https://...)
        url_match = re.match(r'^- (https://.+)$', line)
        if url_match and current_city:
            url = url_match.group(1)
            # Extract service from URL: /landing/[service]/[city]
            service_match = re.search(r'/landing/([^/]+)/', url)
            service = service_match.group(1).replace('-', ' ').title() if service_match else ''
            rows.append({
                'City': current_city,
                'Service': service,
                'URL': url
            })

    with open(csv_file, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['City', 'Service', 'URL'])
        writer.writeheader()
        writer.writerows(rows)

    print(f"Created {csv_file} with {len(rows)} landing pages")

if __name__ == '__main__':
    parse_landing_pages_md('landing-pages.md', 'landing-pages.csv')
