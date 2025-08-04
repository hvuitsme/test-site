"use client"

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react"
import type { SettingsState } from "@/types/settings"
import { DEFAULT_SETTINGS } from "@/constants/settings"

interface SettingsContextType {
  settings: SettingsState
  updateLanguage: (language: string) => void
  updateBackground: (backgroundId: string) => void
  updateBlur: (blur: number[]) => void
  resetSettings: () => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
  // Initialize with localStorage immediately if available
  const [settings, setSettings] = useState<SettingsState>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedSettings = localStorage.getItem("app-settings")
        if (savedSettings) {
          const parsed = JSON.parse(savedSettings)
          return { ...parsed, hasChanges: false }
        }
      } catch (error) {
        console.error("Failed to parse saved settings:", error)
      }
    }
    return DEFAULT_SETTINGS
  })

  // Auto save when settings change
  useEffect(() => {
    if (settings.hasChanges) {
      localStorage.setItem("app-settings", JSON.stringify(settings))
      setSettings((prev) => ({ ...prev, hasChanges: false }))
    }
  }, [settings])

  const updateLanguage = useCallback((language: string) => {
    setSettings((prev) => ({
      ...prev,
      selectedLanguage: language,
      hasChanges: true,
    }))
  }, [])

  const updateBackground = useCallback((backgroundId: string) => {
    setSettings((prev) => ({
      ...prev,
      selectedBackground: backgroundId,
      hasChanges: true,
    }))
  }, [])

  const updateBlur = useCallback((blur: number[]) => {
    setSettings((prev) => ({
      ...prev,
      backgroundBlur: blur[0],
      hasChanges: true,
    }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS)
    localStorage.removeItem("app-settings")
  }, [])

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateLanguage,
        updateBackground,
        updateBlur,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}
