"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  color: string
  shape: "heart" | "circle" | "star"
  delay: number
  duration: number
}

const COLORS = ["#e91e63", "#f06292", "#f8bbd0", "#ff5252", "#ff80ab", "#ffffff", "#ffcdd2"]

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -10 - Math.random() * 20,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 1,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: (["heart", "circle", "star"] as const)[Math.floor(Math.random() * 3)],
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
  }))
}

export function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(createParticles(50))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.shape === "heart" ? (
            <svg
              width={20 * p.scale}
              height={20 * p.scale}
              viewBox="0 0 24 24"
              fill={p.color}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : p.shape === "star" ? (
            <svg
              width={16 * p.scale}
              height={16 * p.scale}
              viewBox="0 0 24 24"
              fill={p.color}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <div
              className="rounded-full"
              style={{
                width: 10 * p.scale,
                height: 10 * p.scale,
                backgroundColor: p.color,
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
