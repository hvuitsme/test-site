export interface Language {
  code: string
  name: string
  flag: string
}

export interface BackgroundOption {
  id: string
  name: string
  url: string
  description: string
}

export interface SettingsState {
  selectedLanguage: string
  selectedBackground: string
  backgroundBlur: number
  bgBrightness: number
  hasChanges: boolean
}
