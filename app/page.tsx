"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings } from "lucide-react"
import Link from "next/link"
import { useSettings } from "@/contexts/settings-context"
import { LANGUAGES } from "@/constants/settings"
// import { LANGUAGES, BACKGROUND_OPTIONS } from "@/constants/settings"

export default function HomePage() {
  const { settings } = useSettings()
  const currentLanguage = LANGUAGES.find((lang) => lang.code === settings.selectedLanguage)
  // const selectedBg = BACKGROUND_OPTIONS.find((bg) => bg.id === settings.selectedBackground)

  return (
    <div className="text-center space-y-8 px-6">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">Welcome Home</h1>
        <p className="text-xl text-white/90 drop-shadow-lg">Trang chủ với theme tùy chỉnh</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
          {currentLanguage?.flag} {currentLanguage?.name}
        </Badge>

        <Link href="/settings">
          <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
            <Settings className="w-5 h-5 mr-2" />
            Cài đặt Theme
          </Button>
        </Link>
      </div>
    </div>
  )
}
