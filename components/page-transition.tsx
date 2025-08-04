"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState, type ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fade-in")

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage("fade-out")
    }
  }, [children, displayChildren])

  return (
    <div
      className={`transition-all duration-300 ${
        transitionStage === "fade-out" ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
      }`}
      onTransitionEnd={() => {
        if (transitionStage === "fade-out") {
          setDisplayChildren(children)
          setTransitionStage("fade-in")
        }
      }}
    >
      {displayChildren}
    </div>
  )
}
