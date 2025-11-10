import fs from "fs"
import path from "path"

/**
 * Get all image file paths in a directory
 * @param folderPath - Path relative to public/images/ (e.g., "workshops/intro-robotics")
 * @returns Array of image paths relative to public/ (e.g., "/images/workshops/intro-robotics/img1.jpg")
 */
export function getImagesInFolder(folderPath: string): string[] {
  const publicDir = path.join(process.cwd(), "public")
  const fullPath = path.join(publicDir, "images", folderPath)

  // Check if directory exists
  if (!fs.existsSync(fullPath)) {
    return []
  }

  // Read directory contents
  const files = fs.readdirSync(fullPath)

  // Filter for image files
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase()
    return imageExtensions.includes(ext)
  })

  // Return paths relative to public/ (for Next.js Image component)
  return imageFiles.map((file) => `/images/${folderPath}/${file}`)
}

/**
 * Get a random selection of images from a folder
 * @param folderPath - Path relative to public/images/
 * @param count - Number of images to return (default: 10)
 * @returns Array of randomly selected image paths
 */
export function getRandomImages(folderPath: string, count: number = 10): string[] {
  const allImages = getImagesInFolder(folderPath)

  if (allImages.length === 0) {
    return []
  }

  // Shuffle array using Fisher-Yates algorithm
  const shuffled = [...allImages]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Return requested count (or all if fewer available)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Get full public path for an image
 * @param category - Category folder (e.g., "blog", "workshops")
 * @param filename - Image filename (e.g., "thumbnail.jpg")
 * @returns Full path relative to public/
 */
export function getImagePath(category: string, filename: string): string {
  return `/images/${category}/${filename}`
}

/**
 * Get all subfolders in a category
 * @param categoryPath - Path relative to public/images/ (e.g., "workshops")
 * @returns Array of subfolder names
 */
export function getSubfolders(categoryPath: string): string[] {
  const publicDir = path.join(process.cwd(), "public")
  const fullPath = path.join(publicDir, "images", categoryPath)

  if (!fs.existsSync(fullPath)) {
    return []
  }

  const items = fs.readdirSync(fullPath, { withFileTypes: true })
  return items.filter((item) => item.isDirectory()).map((item) => item.name)
}

/**
 * Parse date from folder name (e.g., "Jan-2024-PDH" -> Date object)
 * Returns null for "archive-photos" or invalid formats
 */
function parseFolderDate(folderName: string): Date | null {
  if (folderName === "archive-photos") {
    return null // Will be sorted to bottom
  }

  // Try to parse formats like "Jan-2024-PDH", "Jul-2024-PDH"
  const monthNames: { [key: string]: number } = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  }

  const parts = folderName.split("-")
  if (parts.length >= 2) {
    const monthStr = parts[0].toLowerCase()
    const yearStr = parts[1]

    const month = monthNames[monthStr]
    const year = parseInt(yearStr, 10)

    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1)
    }
  }

  return null
}

/**
 * Simple hash function for deterministic shuffling
 */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

/**
 * Deterministic shuffle - same input always produces same output
 */
function deterministicShuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  // Sort by hash of each item to create deterministic random order
  shuffled.sort((a, b) => {
    const hashA = hashString(JSON.stringify(a))
    const hashB = hashString(JSON.stringify(b))
    return hashA - hashB
  })
  return shuffled
}

/**
 * Get all images from all subdirectories in a category, in randomized order
 * The order is deterministic (same images = same order) but appears random
 * Order only changes when images are added or removed
 * @param categoryPath - Path relative to public/images/ (e.g., "workshops")
 * @returns Array of image paths in randomized order
 */
export function getAllImagesFromSubfolders(categoryPath: string): string[] {
  const publicDir = path.join(process.cwd(), "public")
  const basePath = path.join(publicDir, "images", categoryPath)

  if (!fs.existsSync(basePath)) {
    return []
  }

  const subfolders = getSubfolders(categoryPath)
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]

  // Get all images from all subfolders
  const allImages: string[] = []

  for (const folder of subfolders) {
    const folderPath = path.join(basePath, folder)
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
      const ext = path.extname(file).toLowerCase()
      if (imageExtensions.includes(ext)) {
        allImages.push(`/images/${categoryPath}/${folder}/${file}`)
      }
    }
  }

  // Deterministic shuffle - same images will always produce same order
  // Order only changes when images are added/removed
  return deterministicShuffle(allImages)
}

