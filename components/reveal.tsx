"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: "div" | "header" | "article" | "li"
}

export function Reveal({
  children,
  className,
  delayMs = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  // Start visible so SSR and first client paint match (no hydration mismatch).
  const [hidden, setHidden] = useState(false)
  const [shown, setShown] = useState(true)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const rect = node.getBoundingClientRect()
    const inView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 40

    // Above-the-fold: keep visible, skip animation.
    if (inView) return

    setShown(false)
    setHidden(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false)
          setShown(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "reveal-base",
        hidden && "reveal-hidden",
        shown && "reveal-shown",
        className
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
