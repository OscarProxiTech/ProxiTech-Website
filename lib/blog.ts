import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"
import type { BlogPost } from "./blog-types"

export type { BlogPost }

const postsDirectory = path.join(process.cwd(), "content", "blog")

/**
 * Get all blog posts, sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  // Get all markdown files
  const fileNames = fs.readdirSync(postsDirectory)
  const markdownFiles = fileNames.filter((name) => name.endsWith(".md"))

  const allPostsData = markdownFiles.map((fileName) => {
    // Remove .md extension to get slug
    const slug = fileName.replace(/\.md$/, "")

    // Read markdown file
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Parse frontmatter
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const htmlContent = remark().use(remarkHtml).processSync(content).toString()

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      category: data.category || "",
      thumbnail: data.thumbnail || "",
      author: data.author || "",
      tags: data.tags || [],
      content,
      htmlContent,
    }
  })

  // Sort by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const htmlContent = remark().use(remarkHtml).processSync(content).toString()

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      category: data.category || "",
      thumbnail: data.thumbnail || "",
      author: data.author || "",
      tags: data.tags || [],
      content,
      htmlContent,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

/**
 * Get all post slugs for static generation
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""))
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category)
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.includes(tag))
}

