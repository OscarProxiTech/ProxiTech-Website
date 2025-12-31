# ProxiTech Website

A modern, responsive static website for ProxiTech - empowering the next generation with robotics and AI education while delivering innovative engineering solutions.

## Tech Stack

- **Next.js 16** - React framework with static site generation
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible UI components

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build static site
npm run build
```

## Design System

The website uses a modular 3-theme system that automatically applies based on route:

- **Education Theme** (Light) - Applied to `/education/*` routes
- **Engineering Theme** (Dark) - Applied to `/engineering/*` routes  
- **Blog Theme** (Mixed) - Applied to `/blog/*` routes

See `THEME_SYSTEM.md` for detailed design system documentation.

## Project Structure

```
app/              # Next.js pages and layouts
components/       # React components
content/          # Markdown blog posts
lib/              # Utilities and helpers
public/           # Static assets (images, etc.)
```

## License

### Code
MIT License - see [LICENSE.md](LICENSE.md) for details.

### Content & Assets
All logos, branding, images, and content are **© 2025 ProxiTech. All Rights Reserved.**

For licensing inquiries: oscar@proxitech.com.au

---

**ProxiTech** - Empowering innovation through robotics, AI, and education.
