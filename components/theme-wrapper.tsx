"use client"

import { usePathname } from "next/navigation"
import { Theme, ThemeContext } from "@/lib/theme-context"
import { cn } from "@/lib/utils"

interface ThemeWrapperProps {
  children: React.ReactNode
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const pathname = usePathname()
  
  // Determine theme based on pathname
  let theme: Theme = "education"
  let themeClass = ""
  
  if (pathname.startsWith("/engineering") || pathname.startsWith("/components/engineering")) {
    theme = "engineering"
    themeClass = "dark"
  } else if (pathname.startsWith("/blog") || pathname.startsWith("/components/blog")) {
    theme = "blog"
    themeClass = "blog-theme"
  }
  
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={cn(themeClass)}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

