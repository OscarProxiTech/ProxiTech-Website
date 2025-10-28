# ProxiTech Modular Theme System

## Complete Modular Design System

All sections use a consistent, modular system with reusable components and utility classes.

### Colour Palette
- **Primary Purple**: `#641E7C` (rgb(100, 30, 124))
- **Backgrounds**: Automatic light/dark adaptation
- **Text**: Hierarchical system with automatic theme switching
- **Purple Accents**: Used consistently for icons, buttons, and links

## Theme Definitions

### Light Mode (Education Theme)
- **Primary sections**: White backgrounds (`bg-white`)
- **Secondary sections**: Light gray backgrounds (`bg-gray-50`)
- **Card backgrounds**: White (`bg-white`)
- **Card borders**: Light gray (`border-gray-200`)
- **Headings**: Dark gray text (`text-gray-900`)
- **Subheadings**: Medium gray text (`text-gray-600`)
- **Body text**: Medium gray text (`text-gray-600`)

### Dark Mode (Engineering Theme)
- **Primary sections**: Very dark backgrounds (`bg-gray-950`)
- **Secondary sections**: Dark backgrounds (`bg-gray-900`)
- **Card backgrounds**: Dark gray (`bg-gray-800`)
- **Card borders**: Dark gray (`border-gray-700`)
- **Headings**: White text (`text-white`)
- **Subheadings**: Light gray text (`text-gray-300`)
- **Body text**: Light gray text (`text-gray-200`)

### Purple Accent Colour
- **Primary**: `#641E7C` (rgb(100, 30, 124))
- **Hover**: `rgb(115, 35, 142)` (lighter purple)
- **Active**: `rgb(85, 25, 106)` (darker purple)
- Used for: Icons, buttons, borders, links, and accent elements

## Important: Always Use Classes

**NEVER hardcode colors or styles in components. Always use utility classes.**

- ✅ **DO**: Use `<Button variant="purple-solid">` or `.btn-purple-solid`
- ✅ **DO**: Use `.text-heading` instead of `text-white` or `text-gray-900`
- ✅ **DO**: Use `.bg-section-primary` instead of conditionals like `mode === "engineering" ? "bg-gray-950" : "bg-white"`
- ❌ **DON'T**: Hardcode `className="text-white"` or `className="bg-gray-900"`
- ❌ **DON'T**: Use inline style attributes for colors
- ❌ **DON'T**: Create one-off conditional styling

When a new style is needed:
1. **Check if a utility class exists** - reuse it
2. **If it doesn't exist**, create a new utility class in `app/globals.css` following the existing patterns
3. **Update this documentation** with the new class
4. **Use the class consistently** across all components

### How to Change Colours Globally

All colours are controlled by CSS variables in `app/globals.css`:

```css
:root {
  --primary: rgb(100, 30, 124);  /* Change this to update the entire theme */
  --primary-foreground: rgb(255, 255, 255);
  --primary-hover: rgb(115, 35, 142);
  --primary-active: rgb(85, 25, 106);
}

.dark {
  --primary: rgb(100, 30, 124);  /* Same purple for both themes */
  --primary-foreground: rgb(255, 255, 255);
  --primary-hover: rgb(115, 35, 142);
  --primary-active: rgb(85, 25, 106);
}
```

Change `--primary` once to update the entire site.

## Modular Utility Classes

### Text Hierarchy
- `.text-heading` - Main titles (white in dark, gray-900 in light)
- `.text-subheading` - Descriptions (gray-300 in dark, gray-600 in light)
- `.text-body` - Body text (gray-200 in dark, gray-600 in light)
- `.text-muted` - Muted text (gray-400 both modes)

### Section Backgrounds
- `.bg-section-primary` - Primary sections (white/gray-950)
- `.bg-section-secondary` - Secondary sections (gray-50/gray-900)

### Card Styling
- `.bg-card-themed` - Card backgrounds (white/gray-800)
- `.border-card-themed` - Card borders (gray-200/gray-700)

### Purple Utilities
- `.text-purple-primary` - Purple text
- `.bg-purple-primary` - Purple background
- `.bg-purple-primary/10` - 10% opacity purple background
- `.bg-purple-primary/20` - 20% opacity purple background
- `.border-purple-primary` - Purple border

### Button Utilities
- `.btn-purple-solid` - Solid purple button with white text
- `.btn-purple-outline` - Outlined button with transparent purple background and white text
- `.btn-purple-ghost` - Ghost button with purple text, no background

### Input Field Utilities
- `.input-themed` - Theme-aware input fields (adapts to light/dark automatically)
- `.label-themed` - Theme-aware labels (adapts to light/dark automatically)

## Reusable Components

### Section Component

```tsx
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"

<Section variant="primary" | "secondary">
  <div className="container mx-auto px-4">
    <SectionHeader>
      <SectionTitle>Your Title</SectionTitle>
      <SectionDescription>Your description</SectionDescription>
    </SectionHeader>
    {/* Your content */}
  </div>
</Section>
```

### ThemedCard Component

```tsx
import { 
  ThemedCard, 
  ThemedCardHeader, 
  ThemedCardTitle, 
  ThemedCardDescription, 
  ThemedCardContent 
} from "@/components/ui/themed-card"

<ThemedCard mode="education" | "engineering">
  <ThemedCardHeader>
    <ThemedCardTitle>Card Title</ThemedCardTitle>
    <ThemedCardDescription>Card description</ThemedCardDescription>
  </ThemedCardHeader>
  <ThemedCardContent>
    {/* Your content */}
  </ThemedCardContent>
</ThemedCard>
```

### Button Variants

```tsx
import { Button } from "@/components/ui/button"

// Solid purple button
<Button variant="purple-solid">Click Me</Button>

// Outlined purple button
<Button variant="purple-outline">Click Me</Button>

// Ghost purple button
<Button variant="purple-ghost">Click Me</Button>
```

## Migration Guide

### Old Pattern
```tsx
<section className={mode === "engineering" ? "bg-gray-950" : "bg-white"}>
  <h2 className={mode === "engineering" ? "text-white" : "text-gray-900"}>Title</h2>
  <Button className="bg-purple-primary hover:bg-purple-primary/90 text-white">Click</Button>
</section>
```

### New Pattern
```tsx
<Section variant="primary">
  <SectionTitle>Title</SectionTitle>
  <Button variant="purple-solid">Click</Button>
</Section>
```

## Benefits

- **Single source of truth**: Change colors/styles in one place
- **Automatic theme adaptation**: Components respond to dark mode automatically
- **Type-safe**: Button variants are type-checked
- **Easy replication**: Copy-paste patterns work everywhere
- **Maintainable**: Clear separation between structure and styling
- **Consistent**: All components use same styling patterns

## Usage Examples

### Creating a New Section

```tsx
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { ThemedCard, ThemedCardHeader, ThemedCardTitle, ThemedCardContent } from "@/components/ui/themed-card"
import { Button } from "@/components/ui/button"

export function MyNewSection() {
  return (
    <Section variant="primary">
      <div className="container mx-auto px-4">
        <SectionHeader>
          <SectionTitle>My Section Title</SectionTitle>
          <SectionDescription>
            A brief description of what this section is about
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6">
          <ThemedCard>
            <ThemedCardHeader>
              <ThemedCardTitle>Feature 1</ThemedCardTitle>
            </ThemedCardHeader>
            <ThemedCardContent>
              <p className="text-body">Feature description</p>
              <Button variant="purple-outline" className="w-full mt-4">
                Learn More
              </Button>
            </ThemedCardContent>
          </ThemedCard>
        </div>
      </div>
    </Section>
  )
}
```

### Quick Reference

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `Section` | Page section wrapper | `variant: "primary" \| "secondary"` |
| `SectionTitle` | Section heading | Standard heading props |
| `SectionDescription` | Section description | Standard paragraph props |
| `ThemedCard` | Theme-aware card | `mode: "education" \| "engineering"` |
| `Button` | Interactive button | `variant: "purple-solid" \| "purple-outline" \| "purple-ghost"` |

### Class Reference

| Class | Light Mode | Dark Mode |
|-------|------------|-----------|
| `.text-heading` | `text-gray-900` | `text-white` |
| `.text-subheading` | `text-gray-600` | `text-gray-300` |
| `.text-body` | `text-gray-600` | `text-gray-200` |
| `.bg-section-primary` | `bg-white` | `bg-gray-950` |
| `.bg-section-secondary` | `bg-gray-50` | `bg-gray-900` |
| `.bg-card-themed` | `bg-white` | `bg-gray-800` |
| `.input-themed` | White background, gray border & text | Dark gray background, light border & text |
| `.label-themed` | `text-gray-900` | `text-white` |

### Button Style Details

| Variant | Background | Text Color (Light) | Text Color (Dark) | Border |
|---------|-----------|-------------------|------------------|---------|
| `purple-solid` | Solid purple (#641E7C) | White | White | None |
| `purple-outline` | 20% opacity purple | Purple | White | 2px solid purple |
| `purple-ghost` | Transparent | Purple | Purple | None |

