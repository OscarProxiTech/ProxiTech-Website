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
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── education/
│   └── engineering/
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── ...
├── public/                # Static assets
│   └── images/
└── styles/                # Global styles
```

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Accessible component primitives

## License

MIT
