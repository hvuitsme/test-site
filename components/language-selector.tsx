"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
// import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"
import { LANGUAGES } from "@/constants/settings"

interface LanguageSelectorProps {
  selectedLanguage: string
  onLanguageChange: (language: string) => void
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  // const currentLanguage = LANGUAGES.find((lang) => lang.code === selectedLanguage)

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Ngôn ngữ
        </CardTitle>
        <CardDescription>Chọn ngôn ngữ hiển thị cho ứng dụng</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language">Ngôn ngữ hiện tại</Label>
          <Select value={selectedLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Chọn ngôn ngữ" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
