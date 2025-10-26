"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavbarProps {
  mode: "education" | "engineering"
  setMode?: (mode: "education" | "engineering") => void
}

export function Navbar({ mode, setMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? mode === "engineering"
            ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={
                mode === "engineering"
                  ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProxiTech%20Icon%20Dark-w4D0LkLDanteYXYsfnC74j9cJS0aEE.png"
                  : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProxiTech%20Icon-dciQtdBQQiPAm5huzYBuEnj6RwYjG1.png"
              }
              alt="ProxiTech"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1",
                  mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                )}
              >
                Education
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={cn(mode === "engineering" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200")}
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/education"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/education/gallery"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Gallery
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1",
                  mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                )}
              >
                Engineering
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={cn(mode === "engineering" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200")}
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/engineering"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/blog"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMode?.(mode === "education" ? "engineering" : "education")}
              className={cn(
                "ml-2",
                mode === "engineering"
                  ? "border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  : "border-purple-600 text-purple-600 hover:bg-purple-50",
              )}
            >
              {mode === "education" ? "Engineering" : "Education"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={mode === "engineering" ? "text-white" : "text-gray-900"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={cn("md:hidden py-4 border-t", mode === "engineering" ? "border-gray-800" : "border-gray-200")}
          >
            <Link
              href="/"
              className={cn(
                "block py-2 text-sm font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <div
                className={cn("text-sm font-medium mb-2", mode === "engineering" ? "text-gray-300" : "text-gray-700")}
              >
                Education
              </div>
              <Link
                href="/education"
                className={cn(
                  "block py-1 pl-4 text-sm transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </Link>
              <Link
                href="/education/gallery"
                className={cn(
                  "block py-1 pl-4 text-sm transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
            <div className="py-2">
              <div
                className={cn("text-sm font-medium mb-2", mode === "engineering" ? "text-gray-300" : "text-gray-700")}
              >
                Engineering
              </div>
              <Link
                href="/engineering"
                className={cn(
                  "block py-1 pl-4 text-sm transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "block py-1 pl-4 text-sm transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
            <Link
              href="/about"
              className={cn(
                "block py-2 text-sm font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block py-2 text-sm font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setMode?.(mode === "education" ? "engineering" : "education")
                setMobileMenuOpen(false)
              }}
              className={cn(
                "mt-2 w-full",
                mode === "engineering"
                  ? "border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  : "border-purple-600 text-purple-600 hover:bg-purple-50",
              )}
            >
              Switch to {mode === "education" ? "Engineering" : "Education"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
