"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Settings, Palette, ExternalLink, User, Bell } from "lucide-react"
import { useSettings } from "@/contexts/settings-context"
import { LANGUAGES } from "@/constants/settings"

export function Header() {
  const pathname = usePathname()
  const { settings } = useSettings()
  const currentLanguage = LANGUAGES.find((lang) => lang.code === settings.selectedLanguage)

  return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/20">
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-white/20">
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo at far left edge */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
          </Link>

          {/* Right side - Icons at far right edge */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-white hover:text-black hover:bg-white/20">
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-white hover:text-black hover:bg-white/20">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-white hover:text-black hover:bg-white/20">
              <User className="w-4 h-4" />
            </Button>
            <Link href="/settings">
              <Button
                variant={pathname === "/settings" ? "default" : "ghost"}
                size="sm"
                className={`w-9 h-9 p-0 ${
                  pathname === "/settings" ? "" : "text-white hover:text-black hover:bg-white/20"
                }`}
              >
                <Settings className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}