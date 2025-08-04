"use client"

import { useState, useCallback } from "react"
import type { SettingsState } from "@/types/settings"
import { DEFAULT_SETTINGS } from "@/constants/settings"

export function useSettings() {
  const [settings, setSettings] = useState<SettingsState>(DEFAULT_SETTINGS)

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

  const saveSettings = useCallback(() => {
    console.log("Saving settings:", settings)
    // Có thể lưu vào localStorage hoặc API
    localStorage.setItem("app-settings", JSON.stringify(settings))
    setSettings((prev) => ({ ...prev, hasChanges: false }))
  }, [settings])

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS)
  }, [])

  return {
    settings,
    updateLanguage,
    updateBackground,
    updateBlur,
    saveSettings,
    resetSettings,
  }
}
