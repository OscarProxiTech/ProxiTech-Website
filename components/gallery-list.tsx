"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const IMAGES_PER_PAGE = 20

interface GalleryListProps {
  allImages: string[]
}

export function GalleryList({ allImages }: GalleryListProps) {
  const [displayedImages, setDisplayedImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial load
    setDisplayedImages(allImages.slice(0, IMAGES_PER_PAGE))
    setHasMore(allImages.length > IMAGES_PER_PAGE)
  }, [allImages])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true)
          // Simulate slight delay for smooth loading
          setTimeout(() => {
            const currentCount = displayedImages.length
            const nextImages = allImages.slice(currentCount, currentCount + IMAGES_PER_PAGE)
            setDisplayedImages((prev) => [...prev, ...nextImages])
            setHasMore(currentCount + IMAGES_PER_PAGE < allImages.length)
            setIsLoading(false)
          }, 300)
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasMore, isLoading, displayedImages.length, allImages])

  if (allImages.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p>No images found in the gallery</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedImages.map((imagePath, index) => (
          <div
            key={`${imagePath}-${index}`}
            className="aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={imagePath}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      {hasMore && (
        <div ref={observerTarget} className="py-8 text-center">
          {isLoading && <div className="text-gray-400">Loading more images...</div>}
        </div>
      )}

      {!hasMore && displayedImages.length > 0 && (
        <div className="py-8 text-center text-gray-400">
          <p>You've reached the end of the gallery!</p>
        </div>
      )}
    </>
  )
}


