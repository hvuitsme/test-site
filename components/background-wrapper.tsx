"use client"

import type { ReactNode } from "react"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

interface BackgroundWrapperProps {
  children: ReactNode
  backgroundUrl: string
  blurAmount: number
  bgBrightness: number
}

function BackgroundWrapperComponent({ children, backgroundUrl, blurAmount, bgBrightness }: BackgroundWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen relative">
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          filter: `blur(${blurAmount}px) brightness(${bgBrightness}%)`,
          transform: "scale(1.1)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Disable SSR for this component
export const BackgroundWrapper = dynamic(() => Promise.resolve(BackgroundWrapperComponent), {
  ssr: false,
})
