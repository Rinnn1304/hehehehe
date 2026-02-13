"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  rotate: number
}

export function PetalFall() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setPetals(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4,
        size: 8 + Math.random() * 14,
        rotate: Math.random() * 360,
      }))
    )
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-4 animate-petal-drift"
          style={{
            left: `${p.x}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.4}
            viewBox="0 0 20 28"
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <ellipse cx="10" cy="14" rx="8" ry="12" fill="#e91e63" opacity="0.6" />
            <ellipse cx="10" cy="14" rx="5" ry="9" fill="#f06292" opacity="0.4" />
          </svg>
        </div>
      ))}
    </div>
  )
}
