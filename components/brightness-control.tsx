"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Sun, Moon } from "lucide-react"

interface BrightnessControlProps {
  bgBrightness: number
  onBgBrightnessChange: (bgBrightness: number[]) => void
}

export function BrightnessControl({ bgBrightness, onBgBrightnessChange }: BrightnessControlProps) {
  const getBrightnessLabel = (bgBrightness: number) => {
    if (bgBrightness <= 50) return "(Tối)"
    if (bgBrightness <= 80) return "(Vừa)"
    if (bgBrightness <= 120) return "(Sáng)"
    return "(Rất sáng)"
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="w-5 h-5" />
          Độ sáng nền
        </CardTitle>
        <CardDescription>Điều chỉnh độ sáng tối của hình nền</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Độ sáng</Label>
            <Badge variant="outline" className="bg-white">
              {bgBrightness}% {getBrightnessLabel(bgBrightness)}
            </Badge>
          </div>
          <Slider
            value={[bgBrightness]}
            onValueChange={onBgBrightnessChange}
            max={150}
            min={30}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Moon className="w-3 h-3" />
              Tối
            </span>
            <span className="flex items-center gap-1">
              <Sun className="w-3 h-3" />
              Sáng
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[50, 80, 100, 130].map((brightnessValue) => (
            <Button
              key={brightnessValue}
              variant="outline"
              size="sm"
              onClick={() => onBgBrightnessChange([brightnessValue])}
              className={`bg-white transition-all duration-200 ${
                bgBrightness === brightnessValue ? "ring-2 ring-blue-500 bg-blue-50" : ""
              }`}
            >
              {brightnessValue}%
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}