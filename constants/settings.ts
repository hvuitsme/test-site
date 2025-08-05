import type { Language, BackgroundOption } from "@/types/settings"

export const LANGUAGES: Language[] = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
]

export const BACKGROUND_OPTIONS: BackgroundOption[] = [
  {
    id: "anime1",
    name: "Hà Nội",
    url: "https://images.unsplash.com/photo-1613131145282-9476375618e1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Phố cổ Hà Nội",
  },
  {
    id: "anime2",
    name: "Hà nội",
    url: "https://images.unsplash.com/photo-1598790193169-5841a2d75d04?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Góc phố Hà nội",
  },
  {
    id: "anime3",
    name: "Cyberpunk Anime",
    url: "https://images4.alphacoders.com/134/1340356.jpeg",
    description: "Thành phố tương lai",
  },
  {
    id: "anime4",
    name: "Sakura Blossom",
    url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&h=1080&fit=crop",
    description: "Hoa anh đào nở",
  },
  {
    id: "anime5",
    name: "Totoro",
    url: "https://images4.alphacoders.com/136/1369866.png",
    description: "Totoro trong rừng",
  },
  {
    id: "anime6",
    name: "Ocean Sunset",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&h=1080&fit=crop",
    description: "Hoàng hôn biển cả",
  },
]

export const DEFAULT_SETTINGS = {
  selectedLanguage: "vi",
  selectedBackground: "anime1",
  backgroundBlur: 4,
  bgBrightness: 100,
  hasChanges: false,
}
