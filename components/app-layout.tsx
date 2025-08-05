"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { BackgroundWrapper } from "@/components/background-wrapper"
import { Header } from "@/components/header"
import { useSettings } from "@/contexts/settings-context"
import { BACKGROUND_OPTIONS } from "@/constants/settings"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname()
  const { settings } = useSettings()

  const selectedBg = BACKGROUND_OPTIONS.find((bg) => bg.id === settings.selectedBackground)
  const isHomePage = pathname === "/"

  return (
    <BackgroundWrapper 
      backgroundUrl={selectedBg?.url || ""} 
      blurAmount={settings.backgroundBlur}
      bgBrightness={settings.bgBrightness}>
      <Header />
      <main className={`${isHomePage ? "pt-20 overflow-hidden" : "pt-20 hide-scrollbar"}`}>
        {isHomePage ? (
          <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="animate-fade-in">{children}</div>
          </div>
        ) : (
          <div className="min-h-[calc(100vh-5rem)] hide-scrollbar overflow-y-auto">
            <div className="animate-slide-in-right">{children}</div>
          </div>
        )}
      </main>
    </BackgroundWrapper>
  )
}
