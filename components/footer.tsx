import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Instagram, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteLinks, getEmailLink } from "@/lib/site-links"

interface FooterProps {
  mode: "education" | "engineering"
}

export function Footer({ mode }: FooterProps) {
  return (
    <footer
      className={cn("border-t", mode === "engineering" ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200")}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src={mode === "engineering" ? "/images/branding/proxitech-logo-dark.png" : "/images/branding/proxitech-logo.png"}
              alt="ProxiTech"
              width={200}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className={cn("text-sm max-w-md", mode === "engineering" ? "text-gray-400" : "text-gray-600")}>
              Empowering Robotics and AI Education. Bridging technology and learning to bring innovation to classrooms
              and industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={cn("font-semibold mb-4", mode === "engineering" ? "text-white" : "text-gray-900")}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/store"
                  className={cn(
                    "text-sm transition-colors",
                    mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className={cn(
                    "text-sm transition-colors",
                    mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering"
                  className={cn(
                    "text-sm transition-colors",
                    mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  Engineering
                </Link>
              </li>
              <li>
                <a
                  href={siteLinks.internal.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm transition-colors",
                    mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "text-sm transition-colors",
                    mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={cn("font-semibold mb-4", mode === "engineering" ? "text-white" : "text-gray-900")}>
              Connect
            </h3>
            <div className="flex gap-6">
              <a
                href={getEmailLink()}
                className={cn(
                  "transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                aria-label="Email ProxiTech"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href={siteLinks.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                aria-label="ProxiTech LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={siteLinks.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                aria-label="ProxiTech Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={siteLinks.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors",
                  mode === "engineering" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
                )}
                aria-label="ProxiTech YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-8 pt-8 border-t text-center text-sm",
            mode === "engineering" ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600",
          )}
        >
          <p>&copy; {new Date().getFullYear()} ProxiTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
