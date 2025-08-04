"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"
import { BACKGROUND_OPTIONS, LANGUAGES } from "@/constants/settings"

interface PreviewCardProps {
  selectedBackground: string
  selectedLanguage: string
  blurAmount: number
}

export function PreviewCard({ selectedBackground, selectedLanguage, blurAmount }: PreviewCardProps) {
  const selectedBg = BACKGROUND_OPTIONS.find((bg) => bg.id === selectedBackground)
  const currentLanguage = LANGUAGES.find((lang) => lang.code === selectedLanguage)

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Xem trước
        </CardTitle>
        <CardDescription>
          Hình nền: {selectedBg?.name} • Độ mờ: {blurAmount}px
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-32 rounded-lg overflow-hidden border">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${selectedBg?.url})`,
              filter: `blur(${blurAmount}px)`,
              transform: "scale(1.1)",
            }}
          />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow">
              <div className="text-lg font-semibold text-gray-900">
                {currentLanguage?.flag} {currentLanguage?.name}
              </div>
              <div className="text-sm text-gray-600">Blur: {blurAmount}px • UI luôn rõ nét</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
