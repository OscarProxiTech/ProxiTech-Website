# ProxiTech Website

A modern, responsive website for ProxiTech - empowering the next generation with robotics and AI education while delivering innovative engineering solutions.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible UI components
- **Radix UI** - Unstyled, accessible component primitives
- **Markdown** - Content management for blog posts

## 📋 Prerequisites

- Node.js >= 20.9.0 (required for Next.js 16)
- npm or pnpm

### Installing Node.js

If you don't have Node.js 20+ installed, use [nvm](https://github.com/nvm-sh/nvm):

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 20
nvm install 20
nvm use 20

# Verify version
node --version
```

## 🛠️ Development

### Installation

```bash
npm install --legacy-peer-deps
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Static files will be generated in the `out` directory.

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   │   └── [slug]/       # Individual blog post pages
│   ├── contact/           # Contact page
│   ├── education/         # Education pages
│   ├── engineering/       # Engineering pages
│   ├── globals.css        # Global styles & theme
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Site-specific components
├── content/               # Content files
│   └── blog/             # Markdown blog posts
├── lib/                   # Utilities
│   ├── blog.ts           # Blog post utilities
│   ├── images.ts         # Image library utilities
│   └── utils.ts          # Helper functions
├── public/                # Static assets
│   ├── images/           # Image library
│   │   ├── blog/         # Blog images
│   │   ├── workshops/    # Workshop galleries
│   │   ├── projects/     # Engineering project images
│   │   └── gallery/      # General gallery images
└── out/                   # Build output (generated)
```

## 🎨 Design System

This project uses a comprehensive modular design system with:
- Consistent colour palette based on ProxiTech purple (#641E7C)
- Automatic light/dark theme adaptation
- Reusable utility classes and components

See `THEME_SYSTEM.md` for detailed design system documentation.

## 📝 Content Management

### Creating Blog Posts

Blog posts are written in Markdown and stored in `content/blog/`.

#### Template

Create a file with format: `YYYY-MM-DD-slug.md`

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description"
date: "2025-01-15"
category: "Education"
thumbnail: "/images/blog/thumbnails/your-thumbnail.jpg"
author: "Oscar Lloyd"
tags: ["robotics", "education", "tutorial"]
---

# Your Blog Post Title

Your content here with full Markdown support...
```

#### Frontmatter Fields

- `title` (required): Post title
- `excerpt` (required): Short description for listings
- `date` (required): Publication date (YYYY-MM-DD)
- `category` (required): Post category
- `thumbnail` (optional): Path to thumbnail image
- `author` (optional): Author name
- `tags` (optional): Array of tags

### Image Library System

Organised image management with utility functions:

```tsx
import { RotatingImages } from "@/components/ui/rotating-images"
import { getImagesInFolder } from "@/lib/images"

// Random selection
const images = getImagesInFolder("gallery")
<RotatingImages images={images} count={10} columns={3} />

// Gallery view
import { ImageGallery } from "@/components/ui/image-gallery"
const images = getImagesInFolder("workshops/intro-robotics")
<ImageGallery images={images} columns={3} aspectRatio="video" />
```

## 🔐 Social Media Integration

The website fetches latest posts from social media platforms during build time.

### Setting Up API Keys

**⚠️ Important:** Never commit API keys. Use environment variables locally and GitHub Secrets for CI/CD.

1. **Get a YouTube Data API v3 Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable "YouTube Data API v3"
   - Create an API key

2. **Local Development:**
   - Create `.env.local` (already in `.gitignore`)
   - Add: `YOUTUBE_API_KEY=your_key_here`
   - Run `npm run build` - posts fetched automatically

3. **GitHub Actions (Production):**
   - Add repository secret: `YOUTUBE_API_KEY`
   - Build workflow will use it automatically

The build script generates `public/social-posts.json` (safe to commit - no secrets).

## 🤝 Contributing

### Commit Message Format

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples:**
```bash
feat(theme): add comprehensive colour palette
fix(navbar): correct icon paths to use local images
refactor: reorganise image directory structure
docs: update README with contribution guidelines
```

## 📄 License

### Code
The source code is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Content & Assets
All logos, branding, images, blog content, and other assets are **© 2025 ProxiTech. All Rights Reserved.**

These materials may not be used without explicit permission. For licensing inquiries: oscar@proxitech.com.au

---

**ProxiTech** - Empowering innovation through robotics, AI, and education.
