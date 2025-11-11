/**
 * Social Media API Integration
 * Fetches latest posts from various platforms
 * 
 * Note: For production use, you'll need to:
 * 1. Set up API keys in environment variables
 * 2. For Instagram/LinkedIn, you may need OAuth tokens
 * 3. Consider caching to avoid rate limits
 */

interface SocialPost {
  platform: "instagram" | "linkedin" | "youtube"
  url: string
  title?: string
  thumbnail?: string
  publishedAt?: string
}

/**
 * Fetch latest YouTube video from a channel
 * Requires: YouTube Data API v3 key
 * 
 * To get an API key:
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a project or select existing
 * 3. Enable YouTube Data API v3
 * 4. Create credentials (API key)
 * 5. Add to .env.local: YOUTUBE_API_KEY=your_key_here
 */
export async function getLatestYouTubeVideo(channelId: string): Promise<SocialPost | null> {
  const apiKey = process.env.YOUTUBE_API_KEY

  if (!apiKey) {
    console.warn("YOUTUBE_API_KEY not set. YouTube embeds will use fallback URL.")
    return null
  }

  try {
    // First, get the channel's uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    )

    if (!channelResponse.ok) {
      throw new Error(`YouTube API error: ${channelResponse.statusText}`)
    }

    const channelData = await channelResponse.json()

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found")
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

    // Get latest video from uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`
    )

    if (!videosResponse.ok) {
      throw new Error(`YouTube API error: ${videosResponse.statusText}`)
    }

    const videosData = await videosResponse.json()

    if (!videosData.items || videosData.items.length === 0) {
      return null
    }

    const video = videosData.items[0]
    const videoId = video.snippet.resourceId.videoId

    return {
      platform: "youtube",
      url: `https://www.youtube.com/watch?v=${videoId}`,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails?.high?.url,
      publishedAt: video.snippet.publishedAt,
    }
  } catch (error) {
    console.error("Error fetching latest YouTube video:", error)
    return null
  }
}

/**
 * Get YouTube channel ID from username or handle
 * Example: @ProxiTechAus -> channel ID
 * 
 * Note: forUsername is deprecated. We'll use search instead.
 */
export async function getYouTubeChannelId(username: string): Promise<string | null> {
  const apiKey = process.env.YOUTUBE_API_KEY

  if (!apiKey) {
    return null
  }

  try {
    // Remove @ if present
    const cleanUsername = username.replace("@", "")

    // Search for channel by handle/username
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(cleanUsername)}&type=channel&maxResults=1&key=${apiKey}`
    )

    if (!searchResponse.ok) {
      return null
    }

    const searchData = await searchResponse.json()
    if (searchData.items && searchData.items.length > 0) {
      return searchData.items[0].id.channelId
    }

    return null
  } catch (error) {
    console.error("Error fetching YouTube channel ID:", error)
    return null
  }
}

/**
 * Fetch latest Instagram post
 * 
 * Note: Instagram requires OAuth and app approval for API access.
 * Alternative: Use a service like RapidAPI or manually update URLs.
 * 
 * For now, this is a placeholder that returns null.
 */
export async function getLatestInstagramPost(username: string): Promise<SocialPost | null> {
  // Instagram Basic Display API or Graph API would go here
  // Requires: App ID, App Secret, Access Token
  // This is complex and requires Facebook Developer account
  
  console.warn("Instagram API integration not implemented. Requires OAuth setup.")
  return null
}

/**
 * Fetch latest LinkedIn post
 * 
 * Note: LinkedIn API requires OAuth and company page access.
 * Alternative: Use LinkedIn RSS (if available) or manually update URLs.
 * 
 * For now, this is a placeholder that returns null.
 */
export async function getLatestLinkedInPost(companyId: string): Promise<SocialPost | null> {
  // LinkedIn API would go here
  // Requires: Client ID, Client Secret, Access Token
  // This is complex and requires LinkedIn Developer account
  
  console.warn("LinkedIn API integration not implemented. Requires OAuth setup.")
  return null
}

/**
 * Get all latest posts from configured platforms
 * Falls back to default URLs if API calls fail
 */
export async function getAllLatestPosts(): Promise<{
  instagram: SocialPost | null
  linkedin: SocialPost | null
  youtube: SocialPost | null
}> {
  // For YouTube, we can actually fetch the latest
  // For Instagram/LinkedIn, we'll need to implement OAuth or use alternatives
  
  const youtubeChannelId = await getYouTubeChannelId("@ProxiTechAus")
  const youtubePost = youtubeChannelId
    ? await getLatestYouTubeVideo(youtubeChannelId)
    : null

  return {
    instagram: await getLatestInstagramPost("proxitechaus"),
    linkedin: await getLatestLinkedInPost("proxitechaus"),
    youtube: youtubePost,
  }
}

