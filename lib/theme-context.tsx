"use client"

import { createContext, useContext } from "react"

export type Theme = "education" | "engineering" | "blog"

interface ThemeContextType {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { ThemeContext }

