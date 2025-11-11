/**
 * Social media posts data types
 * The actual data is loaded from public/social-posts.json at runtime
 */

export interface SocialPostData {
  url: string
  title?: string
  thumbnail?: string
  publishedAt?: string
}

export interface SocialPostsData {
  youtube: SocialPostData | null
  instagram: SocialPostData | null
  linkedin: SocialPostData | null
  fetchedAt: string
}

