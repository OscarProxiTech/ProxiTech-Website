# ProxiTech Website

A modern, responsive website for ProxiTech built with Next.js and TypeScript.

## Getting Started

### Prerequisites

- Node.js >= 20.9.0 (required for Next.js 16)
- npm or pnpm

### Installing Node.js

If you don't have Node.js 20+ installed, you can use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 20
nvm install 20
nvm use 20

# Verify version
node --version
```

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build a static export (for GitHub Pages):

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deploying to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub (e.g., `proxitech-website`)

2. Push your code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/proxitech-website.git
git push -u origin main
```

### Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Create a workflow file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm install --legacy-peer-deps
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'
      
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Commit and push the workflow file:

```bash
mkdir -p .github/workflows
# Create the deploy.yml file above
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Using a Custom Domain

If you want to deploy to `username.github.io` (your main GitHub Pages site), update `next.config.mjs` and uncomment the `basePath` line:

```javascript
basePath: '/proxitech-website',
assetPrefix: '/proxitech-website',
```

## Project Structure

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
│   ├── images/
│   │   ├── blog/         # Blog images
│   │   │   ├── thumbnails/  # Blog post thumbnails
│   │   │   └── content/     # In-post images
│   │   ├── workshops/     # Workshop galleries
│   │   ├── projects/     # Engineering project images
│   │   ├── gallery/      # General gallery images
│   │   ├── logos/        # Icon files
│   │   ├── branding/     # Brand images
│   │   └── placeholders/ # Placeholder images
│   └── CNAME             # Custom domain config
└── out/                   # Build output (generated)
```

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Accessible component primitives

## Content Management

### Creating Blog Posts

Blog posts are written in Markdown format and stored in the `content/blog/` directory.

#### Blog Post Template

Create a new file with the naming format: `YYYY-MM-DD-slug.md`

Example: `2025-01-15-getting-started-robotics.md`

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description that appears in listings"
date: "2025-01-15"
category: "Education"
thumbnail: "/images/blog/thumbnails/your-thumbnail.jpg"
author: "Oscar Lloyd"
tags: ["robotics", "education", "tutorial"]
---

# Your Blog Post Title

Your blog post content goes here. You can use full Markdown syntax including:

- Lists
- **Bold text**
- *Italic text*
- Code blocks
- Images
- Tables
- And more!

## Code Example

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

## Images

You can reference images from the image library:

![Description](/images/blog/content/your-image.jpg)
```

#### Frontmatter Fields

- `title` (required): The post title
- `excerpt` (required): Short description for listings
- `date` (required): Publication date (YYYY-MM-DD format)
- `category` (required): Post category (e.g., "Education", "Engineering", "AI")
- `thumbnail` (optional): Path to thumbnail image
- `author` (optional): Author name
- `tags` (optional): Array of tags

#### Adding Images to Blog Posts

1. Upload images to `public/images/blog/content/`
2. Reference them in markdown: `![Alt text](/images/blog/content/filename.jpg)`
3. For thumbnails, upload to `public/images/blog/thumbnails/` and reference in frontmatter

### Image Library System

The image library provides an organised way to manage and display images across the site.

#### Folder Structure

```
public/images/
├── blog/
│   ├── thumbnails/     # Blog post thumbnails
│   └── content/        # In-post images
├── workshops/          # Workshop galleries (subfolders per workshop)
├── projects/           # Engineering project images (subfolders per project)
└── gallery/           # General gallery images
```

#### Using Images in Components

**RotatingImages Component** - Random selection of images:

```tsx
import { RotatingImages } from "@/components/ui/rotating-images"
import { getImagesInFolder } from "@/lib/images"

// In your component
const images = getImagesInFolder("gallery")
<RotatingImages images={images} count={10} columns={3} />
```

**ImageGallery Component** - Display all images:

```tsx
import { ImageGallery } from "@/components/ui/image-gallery"
import { getImagesInFolder } from "@/lib/images"

const images = getImagesInFolder("workshops/intro-robotics")
<ImageGallery images={images} columns={3} aspectRatio="video" />
```

#### Image Utility Functions

- `getImagesInFolder(folderPath)`: Get all images in a folder
- `getRandomImages(folderPath, count)`: Get random selection (build-time)
- `getImagePath(category, filename)`: Get full path to specific image

**Note**: For client-side randomisation, use the `RotatingImages` component which shuffles images on mount.

## Contributing

### Commit Message Format

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification:

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
feat(theme): add comprehensive colour palette based on #641E7C
fix(navbar): correct icon paths to use local images
refactor: reorganise image directory structure
docs: update README with Conventional Commits format
```

## License

MIT
