/**
 * Build-time script to fetch latest social media posts
 * Runs before Next.js build to generate social-posts.json
 * 
 * API keys should be in environment variables (never commit them!)
 * For GitHub Actions: Use repository secrets
 */

const fs = require('fs')
const path = require('path')

const OUTPUT_FILE = path.join(process.cwd(), 'public', 'social-posts.json')

async function fetchLatestYouTubeVideo() {
  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) {
    console.log('⚠️  YOUTUBE_API_KEY not set, skipping YouTube fetch')
    return null
  }

  try {
    // Get channel ID from handle
    const channelHandle = 'ProxiTechAus'
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(channelHandle)}&type=channel&maxResults=1&key=${apiKey}`
    )

    if (!searchResponse.ok) {
      throw new Error(`YouTube search failed: ${searchResponse.statusText}`)
    }

    const searchData = await searchResponse.json()
    if (!searchData.items || searchData.items.length === 0) {
      console.log('⚠️  YouTube channel not found')
      return null
    }

    const channelId = searchData.items[0].id.channelId

    // Get channel's uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    )

    if (!channelResponse.ok) {
      throw new Error(`YouTube channel fetch failed: ${channelResponse.statusText}`)
    }

    const channelData = await channelResponse.json()
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

    // Get latest video
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`
    )

    if (!videosResponse.ok) {
      throw new Error(`YouTube videos fetch failed: ${videosResponse.statusText}`)
    }

    const videosData = await videosResponse.json()
    if (!videosData.items || videosData.items.length === 0) {
      return null
    }

    const video = videosData.items[0]
    return {
      url: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails?.high?.url,
      publishedAt: video.snippet.publishedAt,
    }
  } catch (error) {
    console.error('❌ Error fetching YouTube video:', error.message)
    return null
  }
}

async function main() {
  console.log('📱 Fetching latest social media posts...')

  const results = {
    youtube: await fetchLatestYouTubeVideo(),
    instagram: null, // Requires OAuth setup
    linkedin: null, // Requires OAuth setup
    fetchedAt: new Date().toISOString(),
  }

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  // Write results to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2))
  console.log(`✅ Social posts data written to ${OUTPUT_FILE}`)

  if (results.youtube) {
    console.log(`   YouTube: ${results.youtube.title}`)
  }
}

main().catch((error) => {
  console.error('❌ Script failed:', error)
  process.exit(1)
})


