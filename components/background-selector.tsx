"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageIcon } from "lucide-react"
import { BACKGROUND_OPTIONS } from "@/constants/settings"

interface BackgroundSelectorProps {
  selectedBackground: string
  onBackgroundChange: (backgroundId: string) => void
}

export function BackgroundSelector({ selectedBackground, onBackgroundChange }: BackgroundSelectorProps) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          Hình nền
        </CardTitle>
        <CardDescription>Chọn hình nền anime cho ứng dụng của bạn</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {BACKGROUND_OPTIONS.map((bg) => (
            <div
              key={bg.id}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all hover:scale-105 bg-white ${
                selectedBackground === bg.id
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => onBackgroundChange(bg.id)}
            >
              <div className="relative h-24 w-full overflow-hidden">
                <img src={bg.url || "/placeholder.svg"} alt={bg.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-2 bg-white">
                <div className="text-sm font-medium text-center">{bg.name}</div>
                <div className="text-xs text-gray-500 text-center">{bg.description}</div>
              </div>
              {selectedBackground === bg.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
