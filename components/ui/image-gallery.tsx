"use client"

import Image from "next/image"

interface ImageGalleryProps {
  images: string[]
  columns?: 1 | 2 | 3 | 4
  aspectRatio?: "square" | "video" | "auto"
  className?: string
}

export function ImageGallery({ images, columns = 3, aspectRatio = "video", className = "" }: ImageGalleryProps) {

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "aspect-auto",
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No images available</p>
      </div>
    )
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {images.map((imagePath, index) => (
        <div key={index} className={`overflow-hidden rounded-lg ${aspectClasses[aspectRatio]}`}>
          <Image
            src={imagePath}
            alt={`Gallery image ${index + 1}`}
            width={800}
            height={600}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}

