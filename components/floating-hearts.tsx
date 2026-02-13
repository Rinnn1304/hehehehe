"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  x: number
  size: number
  opacity: number
  delay: number
  duration: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    setHearts(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 12 + Math.random() * 24,
        opacity: 0.15 + Math.random() * 0.3,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
      }))
    )
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: `${h.x}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          <svg
            width={h.size}
            height={h.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary"
            style={{ opacity: h.opacity }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
