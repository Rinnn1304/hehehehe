"use client"

import { Gift } from "lucide-react"

interface GiftBoxProps {
  label: string
  index: number
  onClick: () => void
  isOpened: boolean
}

export function GiftBox({ label, index, onClick, isOpened }: GiftBoxProps) {
  const colors = [
    "from-pink-400 to-rose-500",
    "from-red-400 to-pink-500",
    "from-rose-400 to-red-500",
  ]

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isOpened}
      className={`group relative animate-gift-float cursor-pointer transition-all duration-500 ${
        isOpened ? "scale-90 opacity-50" : "hover:scale-110"
      }`}
      style={{
        animationDelay: `${index * 0.3}s`,
      }}
      aria-label={`Open ${label}`}
    >
      <div
        className={`flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${colors[index]} shadow-lg shadow-pink-300/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-pink-400/50 sm:h-32 sm:w-32`}
      >
        {/* Ribbon */}
        <div className="absolute -top-2 left-1/2 h-6 w-3 -translate-x-1/2 rounded-t-full bg-yellow-300 shadow-sm" />
        <div className="absolute -top-4 left-1/2 h-4 w-8 -translate-x-1/2 rounded-full border-2 border-yellow-300 bg-transparent" />

        <Gift className="mb-2 h-8 w-8 text-white/90 transition-transform duration-300 group-hover:rotate-12 sm:h-10 sm:w-10" />
        <span className="text-sm font-semibold text-white/95">{label}</span>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 animate-pulse rounded-2xl bg-pink-400/20 blur-xl" />
    </button>
  )
}
