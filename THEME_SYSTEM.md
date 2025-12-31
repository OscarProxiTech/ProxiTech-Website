# ProxiTech Modular Theme System

## Complete Modular Design System

All sections use a consistent, modular system with reusable components and utility classes. Themes are automatically applied based on route paths.

### Colour Palette
- **Primary Purple**: `#641E7C` (rgb(100, 30, 124))
- **Backgrounds**: Automatic theme adaptation based on route
- **Text**: Hierarchical system with automatic theme switching
- **Purple Accents**: Used consistently for icons, buttons, and links

## Theme Definitions

### Education Theme (Light)
- **Applied to**: `/education/*`, `/store`, `/about`, `/contact` (if they exist)
- **Primary sections**: White backgrounds (`bg-white`)
- **Secondary sections**: Light gray backgrounds (`bg-gray-50`)
- **Card backgrounds**: White (`bg-white`)
- **Card borders**: Light gray (`border-gray-200`)
- **Headings**: Dark gray text (`text-gray-900`)
- **Subheadings**: Medium gray text (`text-gray-600`)
- **Body text**: Medium gray text (`text-gray-600`)

### Engineering Theme (Dark)
- **Applied to**: `/engineering/*`
- **Primary sections**: Very dark backgrounds (`bg-gray-950`)
- **Secondary sections**: Dark backgrounds (`bg-gray-900`)
- **Card backgrounds**: Dark gray (`bg-gray-800`)
- **Card borders**: Dark gray (`border-gray-700`)
- **Headings**: White text (`text-white`)
- **Subheadings**: Light gray text (`text-gray-300`)
- **Body text**: Light gray text (`text-gray-200`)

### Blog Theme (Mixed)
- **Applied to**: `/blog/*`
- **Background**: Dark (`bg-gray-950`)
- **Content cards**: Light (`bg-white`)
- **Card borders**: Light gray (`border-gray-200`)
- **Headings**: White text on dark background, dark text on light cards
- **Subheadings**: Light gray on dark background, medium gray on light cards
- **Body text**: Light gray on dark background, medium gray on light cards

### Purple Accent Colour
- **Primary**: `#641E7C` (rgb(100, 30, 124))
- **Hover**: `rgb(115, 35, 142)` (lighter purple)
- **Active**: `rgb(85, 25, 106)` (darker purple)
- Used for: Icons, buttons, borders, links, and accent elements

## Automatic Theme Detection

Themes are automatically applied based on the route path using the `ThemeWrapper` component:

```tsx
import { ThemeWrapper } from "@/components/theme-wrapper"

export default function MyPage() {
  return (
    <ThemeWrapper>
      {/* Your page content */}
    </ThemeWrapper>
  )
}
```

The `ThemeWrapper` detects the theme based on the pathname:
- Routes starting with `/engineering` → Engineering theme (dark)
- Routes starting with `/blog` → Blog theme (mixed)
- All other routes → Education theme (light)

## Important: Always Use Classes

**NEVER hardcode colors or styles in components. Always use utility classes.**

- ✅ **DO**: Use `.text-heading` instead of `text-white` or `text-gray-900`
- ✅ **DO**: Use `.bg-section-primary` instead of hardcoded backgrounds
- ✅ **DO**: Use `.bg-card-themed` for theme-aware cards
- ❌ **DON'T**: Hardcode `className="text-white"` or `className="bg-gray-900"`
- ❌ **DON'T**: Use inline style attributes for colors
- ❌ **DON'T**: Create one-off conditional styling based on theme

When a new style is needed:
1. **Check if a utility class exists** - reuse it
2. **If it doesn't exist**, create a new utility class in `app/globals.css` following the existing patterns
3. **Update this documentation** with the new class
4. **Use the class consistently** across all components

### How to Change Colours Globally

All colours are controlled by CSS variables in `app/globals.css`:

```css
:root {
  /* Education Theme (Light Mode) */
  --primary: #641E7C;
  --background: oklch(0.99 0.005 300);
  --foreground: oklch(0.15 0.02 300);
  /* ... */
}

.dark {
  /* Engineering Theme (Dark Mode) */
  --primary: #641E7C;
  --background: oklch(0.12 0.02 300);
  --foreground: oklch(0.98 0.005 300);
  /* ... */
}

.blog-theme {
  /* Blog Theme (Mixed) */
  --primary: #641E7C;
  --background: oklch(0.12 0.02 300);
  --card: oklch(1 0 0);
  /* ... */
}
```

Change `--primary` once to update the entire site.

## Modular Utility Classes

### Text Hierarchy
- `.text-heading` - Main titles (white in dark/blog, gray-900 in light)
- `.text-subheading` - Descriptions (gray-300 in dark/blog, gray-600 in light)
- `.text-body` - Body text (gray-200 in dark/blog, gray-600 in light)
- `.text-muted` - Muted text (gray-400 all themes)

### Section Backgrounds
- `.bg-section-primary` - Primary sections (white/gray-950)
- `.bg-section-secondary` - Secondary sections (gray-50/gray-900)

### Card Styling
- `.bg-card-themed` - Card backgrounds (white/gray-800, white in blog theme)
- `.border-card-themed` - Card borders (gray-200/gray-700, gray-200 in blog theme)

### Purple Utilities
- `.text-purple-primary` - Purple text
- `.bg-purple-primary` - Purple background
- `.bg-purple-primary/10` - 10% opacity purple background
- `.bg-purple-primary/20` - 20% opacity purple background
- `.border-purple-primary` - Purple border

### Button Variants

The button component has been simplified to 3 core variants:

```tsx
import { Button } from "@/components/ui/button"

// Primary button (solid purple)
<Button>Click Me</Button>

// Secondary button (outline style)
<Button variant="secondary">Click Me</Button>

// Ghost button (minimal, no background)
<Button variant="ghost">Click Me</Button>
```

### Input Field Utilities
- `.input-themed` - Theme-aware input fields (adapts to theme automatically)
- `.label-themed` - Theme-aware labels (adapts to theme automatically)

## Reusable Components

### ThemeWrapper Component

All pages should be wrapped with `ThemeWrapper` to enable automatic theme detection:

```tsx
import { ThemeWrapper } from "@/components/theme-wrapper"

export default function MyPage() {
  return (
    <ThemeWrapper>
      <Navbar />
      <main>
        {/* Your content */}
      </main>
      <Footer />
    </ThemeWrapper>
  )
}
```

### Using Theme Context

To access the current theme in a component:

```tsx
"use client"

import { useTheme } from "@/lib/theme-context"

export function MyComponent() {
  const { theme } = useTheme()
  // theme will be "education" | "engineering" | "blog"
  
  return <div>Current theme: {theme}</div>
}
```

## Site Structure

### Navigation Structure
- **Home** (`/`)
- **Education** (`/education/*`)
  - Overview
  - Resources
  - Workshops
  - Courses
  - Gallery
  - Store (`/education/store`)
- **Engineering** (`/engineering/*`)
  - Overview
  - Projects
  - Research & Development
- **Blog** (`/blog/*`) - Top-level navigation

### Class Reference

| Class | Education (Light) | Engineering (Dark) | Blog (Mixed) |
|-------|------------------|-------------------|--------------|
| `.text-heading` | `text-gray-900` | `text-white` | `text-white` (on dark), `text-gray-900` (on cards) |
| `.text-subheading` | `text-gray-600` | `text-gray-300` | `text-gray-300` (on dark), `text-gray-600` (on cards) |
| `.text-body` | `text-gray-600` | `text-gray-200` | `text-gray-200` (on dark), `text-gray-600` (on cards) |
| `.bg-section-primary` | `bg-white` | `bg-gray-950` | `bg-gray-950` |
| `.bg-section-secondary` | `bg-gray-50` | `bg-gray-900` | `bg-gray-900` |
| `.bg-card-themed` | `bg-white` | `bg-gray-800` | `bg-white` |
| `.border-card-themed` | `border-gray-200` | `border-gray-700` | `border-gray-200` |

### Button Style Details

| Variant | Background | Text Color | Border |
|---------|-----------|------------|--------|
| `default` | Solid purple (#641E7C) | White | None |
| `secondary` | Transparent | Theme-aware | Border with purple tint |
| `ghost` | Transparent | Theme-aware | None |

## Benefits

- **Single source of truth**: Change colors/styles in one place
- **Automatic theme adaptation**: Components respond to route-based themes automatically
- **Type-safe**: Button variants are type-checked
- **Easy replication**: Copy-paste patterns work everywhere
- **Maintainable**: Clear separation between structure and styling
- **Consistent**: All components use same styling patterns
- **No manual theme switching**: Themes apply automatically based on route

## Usage Examples

### Creating a New Page

```tsx
"use client"

import { ThemeWrapper } from "@/components/theme-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function MyPage() {
  return (
    <ThemeWrapper>
      <Navbar />
      <main className="min-h-screen pt-20 bg-section-primary">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-4 text-heading">My Page</h1>
          <p className="text-lg text-subheading">Page description</p>
        </section>
      </main>
      <Footer />
    </ThemeWrapper>
  )
}
```

### Creating a Themed Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card className="bg-card-themed border-card-themed">
  <CardHeader>
    <CardTitle className="text-heading">Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-body">Card content</p>
  </CardContent>
</Card>
```
