"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface RotatingImagesProps {
  images: string[]
  count?: number
  columns?: 1 | 2 | 3 | 4
  aspectRatio?: "square" | "video" | "auto"
  className?: string
}

export function RotatingImages({
  images,
  count = 10,
  columns = 3,
  aspectRatio = "video",
  className = "",
}: RotatingImagesProps) {
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  useEffect(() => {
    if (images.length === 0) {
      setSelectedImages([])
      return
    }

    // Shuffle array using Fisher-Yates algorithm
    const shuffled = [...images]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // Select requested count (or all if fewer available)
    setSelectedImages(shuffled.slice(0, Math.min(count, shuffled.length)))
  }, [images, count])

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

  if (selectedImages.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No images available</p>
      </div>
    )
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {selectedImages.map((imagePath, index) => (
        <div
          key={`${imagePath}-${index}`}
          className={`overflow-hidden rounded-lg ${aspectClasses[aspectRatio]} group cursor-pointer`}
        >
          <Image
            src={imagePath}
            alt={`Gallery image ${index + 1}`}
            width={800}
            height={600}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}

