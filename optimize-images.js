#!/usr/bin/env node

/**
 * Image Optimization Script for Godly Windows
 *
 * This script optimizes images for better web performance:
 * - Compresses WebP images to reduce file size
 * - Converts PNG images to WebP format
 * - Generates responsive image variants
 * - Maintains quality while reducing file sizes
 *
 * Usage: node optimize-images.js [directory]
 * Example: node optimize-images.js src/assets
 */

const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Configuration
const QUALITY_SETTINGS = {
  webp: 85, // WebP quality (0-100)
  jpeg: 90, // JPEG quality (0-100)
  png: 9, // PNG compression level (0-9)
  avif: 80, // AVIF quality (0-100)
};

const MAX_FILE_SIZE = 120 * 1024; // 120KB target size
const RESPONSIVE_SIZES = [640, 828, 1200, 1920]; // Common breakpoints

class ImageOptimizer {
  constructor(baseDir = "src/assets") {
    this.baseDir = baseDir;
    this.processedCount = 0;
    this.savedBytes = 0;
  }

  async findImages(dir) {
    const images = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively find images in subdirectories
        const subImages = await this.findImages(fullPath);
        images.push(...subImages);
      } else if (this.isImageFile(entry.name)) {
        images.push(fullPath);
      }
    }

    return images;
  }

  isImageFile(filename) {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    return imageExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
  }

  async getFileSize(filePath) {
    const stats = await fs.stat(filePath);
    return stats.size;
  }

  async optimizeWebP(inputPath, outputPath) {
    const originalSize = await this.getFileSize(inputPath);

    // If file is already small enough, skip optimization
    if (originalSize <= MAX_FILE_SIZE) {
      console.log(
        `✓ Skipping ${inputPath} (already optimized: ${this.formatBytes(originalSize)})`,
      );
      return;
    }

    try {
      await sharp(inputPath)
        .webp({
          quality: QUALITY_SETTINGS.webp,
          effort: 6, // Higher effort = better compression
          smartSubsample: true,
        })
        .toFile(outputPath);

      const newSize = await this.getFileSize(outputPath);
      const savedBytes = originalSize - newSize;

      this.processedCount++;
      this.savedBytes += savedBytes;

      console.log(`✓ Optimized ${inputPath}`);
      console.log(
        `  Size: ${this.formatBytes(originalSize)} → ${this.formatBytes(newSize)} (saved ${this.formatBytes(savedBytes)})`,
      );
    } catch (error) {
      console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    }
  }

  async convertToWebP(inputPath) {
    const parsed = path.parse(inputPath);
    const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

    // Skip if WebP version already exists
    try {
      await fs.access(outputPath);
      console.log(`✓ WebP version already exists: ${outputPath}`);
      return;
    } catch (error) {
      // File doesn't exist, proceed with conversion
    }

    try {
      const originalSize = await this.getFileSize(inputPath);

      await sharp(inputPath)
        .webp({
          quality: QUALITY_SETTINGS.webp,
          effort: 6,
          smartSubsample: true,
        })
        .toFile(outputPath);

      const newSize = await this.getFileSize(outputPath);
      const savedBytes = originalSize - newSize;

      this.processedCount++;
      this.savedBytes += savedBytes;

      console.log(`✓ Converted ${inputPath} to WebP`);
      console.log(
        `  Size: ${this.formatBytes(originalSize)} → ${this.formatBytes(newSize)} (saved ${this.formatBytes(savedBytes)})`,
      );
    } catch (error) {
      console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    }
  }

  async generateResponsiveVariants(inputPath) {
    const parsed = path.parse(inputPath);
    const originalSize = await this.getFileSize(inputPath);

    // Only generate variants for large images
    if (originalSize < 200 * 1024) return; // Skip if smaller than 200KB

    for (const width of RESPONSIVE_SIZES) {
      const outputPath = path.join(
        parsed.dir,
        `${parsed.name}-${width}w${parsed.ext}`,
      );

      try {
        // Skip if variant already exists
        await fs.access(outputPath);
        continue;
      } catch (error) {
        // File doesn't exist, create variant
      }

      try {
        await sharp(inputPath)
          .resize(width, null, {
            withoutEnlargement: true,
            fit: "inside",
          })
          .webp({
            quality: QUALITY_SETTINGS.webp,
            effort: 6,
          })
          .toFile(outputPath);

        const variantSize = await this.getFileSize(outputPath);
        console.log(
          `✓ Generated ${width}w variant: ${this.formatBytes(variantSize)}`,
        );
      } catch (error) {
        console.error(
          `✗ Failed to generate ${width}w variant for ${inputPath}:`,
          error.message,
        );
      }
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  async run() {
    console.log("🖼️  Starting image optimization...\n");
    console.log(`📁 Scanning directory: ${this.baseDir}\n`);

    try {
      const images = await this.findImages(this.baseDir);
      console.log(`Found ${images.length} images to process\n`);

      for (const imagePath of images) {
        const extension = path.extname(imagePath).toLowerCase();

        if (extension === ".webp") {
          // Optimize existing WebP files
          const tempPath = imagePath + ".temp";
          await this.optimizeWebP(imagePath, tempPath);

          // Replace original with optimized version if smaller
          try {
            const originalSize = await this.getFileSize(imagePath);
            const optimizedSize = await this.getFileSize(tempPath);

            if (optimizedSize < originalSize) {
              await fs.rename(tempPath, imagePath);
            } else {
              await fs.unlink(tempPath);
            }
          } catch (error) {
            // Clean up temp file if it exists
            try {
              await fs.unlink(tempPath);
            } catch (e) {}
          }
        } else if (
          extension === ".png" ||
          extension === ".jpg" ||
          extension === ".jpeg"
        ) {
          // Convert to WebP
          await this.convertToWebP(imagePath);
        }

        // Generate responsive variants for large images
        if (
          extension === ".webp" ||
          extension === ".jpg" ||
          extension === ".jpeg"
        ) {
          await this.generateResponsiveVariants(imagePath);
        }
      }

      console.log("\n🎉 Optimization complete!");
      console.log(`📊 Processed: ${this.processedCount} images`);
      console.log(`💾 Total saved: ${this.formatBytes(this.savedBytes)}`);
    } catch (error) {
      console.error("Error during optimization:", error);
      process.exit(1);
    }
  }
}

// Run the optimizer
const targetDir = process.argv[2] || "src/assets";
const optimizer = new ImageOptimizer(targetDir);
optimizer.run().catch(console.error);
