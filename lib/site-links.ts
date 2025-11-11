/**
 * Central configuration for all external links and social media URLs
 * Update links here to propagate changes across the entire site
 */

export const siteLinks = {
  // Social Media
  social: {
    instagram: "https://www.instagram.com/proxitechaus/",
    linkedin: "https://www.linkedin.com/company/proxitechaus",
    linkedinFounder: "https://www.linkedin.com/in/oscar-lloyd-a84b83272/", // For about page only
    youtube: "https://www.youtube.com/@ProxiTechAus",
  },

  // Events & Booking
  events: {
    humanitix: "https://events.humanitix.com/host/proxitech",
  },

  // Contact
  contact: {
    email: "oscar@proxitech.com.au",
  },

  // Internal Pages
  internal: {
    blog: "https://www.proxitech.com.au/blog",
    home: "https://www.proxitech.com.au",
  },
} as const

/**
 * Get email link with mailto: prefix
 */
export function getEmailLink(): string {
  return `mailto:${siteLinks.contact.email}`
}

/**
 * Get blog link (for external references)
 */
export function getBlogLink(): string {
  return siteLinks.internal.blog
}

