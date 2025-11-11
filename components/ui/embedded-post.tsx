"use client"

import { useEffect, useRef, useState } from "react"

interface EmbeddedPostProps {
  platform: "instagram" | "linkedin" | "youtube"
  url: string
  className?: string
}

/**
 * Embedded Post Component
 * Supports Instagram, LinkedIn, and YouTube embeds
 * 
 * Note: For Instagram and LinkedIn, you need to provide specific post URLs.
 * For YouTube, you can use channel or video URLs.
 */
export function EmbeddedPost({ platform, url, className = "" }: EmbeddedPostProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing content
    containerRef.current.innerHTML = ""
    setError(null)

    switch (platform) {
      case "instagram":
        // Instagram embed using blockquote (requires specific post URL)
        const instagramScript = document.createElement("script")
        instagramScript.src = "https://www.instagram.com/embed.js"
        instagramScript.async = true
        document.body.appendChild(instagramScript)

        const instagramBlockquote = document.createElement("blockquote")
        instagramBlockquote.className = "instagram-media"
        instagramBlockquote.setAttribute("data-instgrm-permalink", url)
        instagramBlockquote.setAttribute("data-instgrm-version", "14")
        instagramBlockquote.style.background = "#FFF"
        instagramBlockquote.style.border = "0"
        instagramBlockquote.style.borderRadius = "3px"
        instagramBlockquote.style.margin = "1px"
        instagramBlockquote.style.maxWidth = "540px"
        instagramBlockquote.style.minWidth = "326px"
        instagramBlockquote.style.padding = "0"
        instagramBlockquote.style.width = "calc(100% - 2px)"

        containerRef.current.appendChild(instagramBlockquote)

        // Process Instagram embed after script loads
        const checkInstagram = setInterval(() => {
          if (window.instgrm?.Embeds) {
            window.instgrm.Embeds.process()
            clearInterval(checkInstagram)
          }
        }, 100)

        setTimeout(() => clearInterval(checkInstagram), 5000)
        break

      case "linkedin":
        // LinkedIn embed (requires specific post URL)
        const linkedinScript = document.createElement("script")
        linkedinScript.src = "https://platform.linkedin.com/in.js"
        linkedinScript.type = "text/javascript"
        linkedinScript.textContent = "lang: en_US"
        document.body.appendChild(linkedinScript)

        const linkedinDiv = document.createElement("div")
        linkedinDiv.className = "linkedin-post"
        linkedinDiv.setAttribute("data-url", url)
        containerRef.current.appendChild(linkedinDiv)

        // Initialize LinkedIn embed
        const checkLinkedIn = setInterval(() => {
          if (window.lintrk) {
            window.lintrk.q = window.lintrk.q || []
            window.lintrk.q.push(() => {
              window.lintrk.render(linkedinDiv)
            })
            clearInterval(checkLinkedIn)
          }
        }, 100)

        setTimeout(() => clearInterval(checkLinkedIn), 5000)
        break

      case "youtube":
        // Extract video ID from YouTube URL (supports various formats)
        const videoIdMatch = url.match(
          /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
        )
        const videoId = videoIdMatch ? videoIdMatch[1] : null

        if (videoId) {
          const iframe = document.createElement("iframe")
          iframe.width = "100%"
          iframe.height = "400"
          iframe.src = `https://www.youtube.com/embed/${videoId}`
          iframe.frameBorder = "0"
          iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          iframe.allowFullscreen = true
          iframe.style.borderRadius = "8px"
          iframe.style.minHeight = "400px"
          containerRef.current.appendChild(iframe)
        } else {
          // If no video ID, try to embed the channel or show a link
          setError("Please provide a specific YouTube video URL for embedding")
        }
        break
    }

    return () => {
      // Cleanup
    }
  }, [platform, url])

  if (error) {
    return (
      <div className={`${className} p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center`}>
        <p className="text-sm text-gray-600 dark:text-gray-400">{error}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline mt-2 inline-block"
        >
          View on {platform}
        </a>
      </div>
    )
  }

  return <div ref={containerRef} className={className} />
}

// TypeScript declarations for window objects
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
    lintrk?: {
      q: Array<() => void>
      render: (element: HTMLElement) => void
    }
  }
}

