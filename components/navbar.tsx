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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
            ? "bg-gray-950/80 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={mounted && mode === "engineering" ? "/images/logos/proxitech-icon-dark.png" : "/images/logos/proxitech-icon.png"}
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
                    href="/education/resources"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Resources
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/education/workshops"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Workshops
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/education/courses"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Courses
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
                    href="/engineering/projects"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/engineering/research-and-dev"
                    className={cn(
                      "cursor-pointer",
                      mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
                    )}
                  >
                    Research & Dev
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
              href="/store"
              className={cn(
                "text-sm font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
            >
              Store
            </Link>

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
            className={cn(
              "md:hidden py-6 min-h-[80vh]",
              mode === "engineering" 
                ? scrolled 
                  ? "bg-gray-950/80 border-t border-gray-800" 
                  : "bg-gray-950"
                : scrolled
                  ? "bg-white/80 border-t border-gray-200"
                  : "bg-white"
            )}
          >
            <Link
              href="/"
              className={cn(
                "block py-4 pl-6 text-lg font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <Link
                href="/education"
                className={cn("text-lg font-semibold mb-3 pl-6 block", mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="/education"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </Link>
              <Link
                href="/education/resources"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/education/workshops"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Workshops
              </Link>
              <Link
                href="/education/courses"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/education/gallery"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
            <div className="py-2">
              <Link
                href="/engineering"
                className={cn("text-lg font-semibold mb-3 pl-6 block", mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Engineering
              </Link>
              <Link
                href="/engineering"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </Link>
              <Link
                href="/engineering/projects"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/engineering/research-and-dev"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Research & Dev
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "block py-3 pl-8 text-base transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
            <Link
              href="/store"
              className={cn(
                "block py-4 pl-6 text-lg font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/about"
              className={cn(
                "block py-4 pl-6 text-lg font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block py-4 pl-6 text-lg font-medium transition-colors",
                mode === "engineering" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
