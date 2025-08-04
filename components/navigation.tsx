"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Settings, Palette } from "lucide-react"
import { useSettings } from "@/contexts/settings-context"
import { LANGUAGES } from "@/constants/settings"

export function Navigation() {
  const pathname = usePathname()
  const { settings } = useSettings()
  const currentLanguage = LANGUAGES.find((lang) => lang.code === settings.selectedLanguage)

  const navItems = [
    {
      href: "/",
      label: "Trang chủ",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/settings",
      label: "Cài đặt",
      icon: Settings,
      active: pathname === "/settings",
    },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
        <div className="flex items-center gap-4">
          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center gap-2 ${
                      item.active ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300" />

          {/* Current Language & Theme Info */}
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-gray-500" />
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {currentLanguage?.flag} {currentLanguage?.name}
            </Badge>
            {settings.hasChanges && (
              <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
                Chưa lưu
              </Badge>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
