"use client"

import { Button } from "@/components/ui/button"
import { RotateCcw, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"
import { BlurControl } from "@/components/blur-control"
import { BackgroundSelector } from "@/components/background-selector"
import { useSettings } from "@/contexts/settings-context"

export default function SettingsPage() {
  const { settings, updateLanguage, updateBackground, updateBlur, resetSettings } = useSettings()

  return (
    <div className="p-6 pb-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Về trang chủ
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">Cài đặt Theme</h1>
            </div>
            <p className="text-white drop-shadow">Tùy chỉnh ngôn ngữ và hình nền theo sở thích của bạn</p>
          </div>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={resetSettings}
            className="flex items-center gap-2 bg-white/90 hover:bg-white"
          >
            <RotateCcw className="w-4 h-4" />
            Đặt lại
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Language Settings */}
          <LanguageSelector selectedLanguage={settings.selectedLanguage} onLanguageChange={updateLanguage} />

          {/* Blur Control */}
          <BlurControl blurAmount={settings.backgroundBlur} onBlurChange={updateBlur} />
        </div>

        {/* Background Selection */}
        <BackgroundSelector selectedBackground={settings.selectedBackground} onBackgroundChange={updateBackground} />
      </div>
    </div>
  )
}
