"use client"

import { useState } from "react"
import Image from "next/image"
import { PetalFall } from "./petal-fall"

interface GiftRevealProps {
  giftIndex: number
  onBack: () => void
}

const giftContent = [
  {
    title: "FROM MY HEART TO YOURS",
    subtitle: "For you",
    message:
      "You're my favorite person, and I can't wait to share every moment with you.",
    type: "roses" as const,
  },
  {
    title: "YOU MAKE MY WORLD BRIGHTER",
    subtitle: "Always & forever",
    message:
      "Every day with you feels like a beautiful dream I never want to wake up from.",
    type: "letter" as const,
  },
  {
    title: "MY HEART BEATS FOR YOU",
    subtitle: "With all my love",
    message:
      "You are the reason I believe in magic, in love, and in happily ever after.",
    type: "stars" as const,
  },
]

const playfulLines = [
  "You stole my heart, but I'll let you keep it",
  "You're my favorite notification",
  "My love for you is like pi... never ending",
  "I love you more than pizza... and that's saying a lot!",
  "You had me at hello... okay maybe at the second hello",
  "If you were a vegetable, you'd be a cute-cumber",
]

function LetterReveal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Closed envelope */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex h-64 w-full cursor-pointer items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 transition-all duration-500 hover:from-pink-50 hover:to-rose-100 sm:h-80"
        >
          {/* Envelope body */}
          <div className="relative">
            <svg
              className="h-28 w-28 text-primary drop-shadow-lg transition-transform duration-500 group-hover:scale-110 sm:h-36 sm:w-36"
              viewBox="0 0 100 80"
              fill="none"
            >
              {/* Envelope back */}
              <rect x="5" y="15" width="90" height="60" rx="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
              {/* Envelope front */}
              <rect x="5" y="15" width="90" height="60" rx="4" fill="hsl(340, 50%, 98%)" stroke="currentColor" strokeWidth="2" />
              {/* Flap */}
              <path
                d="M5 19 L50 50 L95 19"
                fill="currentColor"
                opacity="0.1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                className="origin-top transition-transform duration-500 group-hover:-translate-y-1"
              />
              {/* Heart seal */}
              <path
                d="M50 40 C50 37, 46 34, 44 36 C42 38, 44 40, 50 45 C56 40, 58 38, 56 36 C54 34, 50 37, 50 40Z"
                fill="currentColor"
                className="animate-heart-bounce"
              />
            </svg>
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-sm font-semibold tracking-widest text-primary/70 sm:text-base">
            TAP TO OPEN
          </p>
        </button>
      )}

      {/* Opened letter with rose and playful lines */}
      {isOpen && (
        <div className="relative flex min-h-[24rem] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-pink-100 px-4 py-10 sm:min-h-[28rem]">
          <PetalFall />

          {/* Playful lines on the left */}
          <div className="absolute left-3 top-6 flex flex-col gap-4 sm:left-6 sm:top-8 sm:gap-5">
            {playfulLines.slice(0, 3).map((line, i) => (
              <p
                key={line}
                className="max-w-[90px] text-[10px] leading-tight text-primary/60 sm:max-w-[120px] sm:text-xs"
                style={{
                  animation: "slide-up 0.6s ease-out both",
                  animationDelay: `${0.5 + i * 0.2}s`,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Playful lines on the right */}
          <div className="absolute right-3 top-6 flex flex-col items-end gap-4 sm:right-6 sm:top-8 sm:gap-5">
            {playfulLines.slice(3, 6).map((line, i) => (
              <p
                key={line}
                className="max-w-[90px] text-right text-[10px] leading-tight text-primary/60 sm:max-w-[120px] sm:text-xs"
                style={{
                  animation: "slide-up 0.6s ease-out both",
                  animationDelay: `${0.6 + i * 0.2}s`,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Center rose popping out */}
          <div
            className="relative z-10 mb-4"
            style={{
              animation: "bloom 0.8s ease-out 0.3s both",
            }}
          >
            <div className="relative mx-auto h-40 w-40 sm:h-52 sm:w-52">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10 blur-xl" />
              <Image
                src="/images/single-red-rose.avif"
                alt="A beautiful red rose"
                width={208}
                height={208}
                className="relative h-full w-full rounded-full object-cover shadow-xl shadow-pink-300/40"
                priority
              />
            </div>
          </div>

          {/* Decorative tiny hearts around the rose */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              className="absolute text-primary/40"
              style={{
                top: `${20 + Math.sin(i * 1.1) * 30}%`,
                left: `${15 + ((i * 14) % 70)}%`,
                animation: `twinkle 1.5s ease-in-out ${i * 0.25}s infinite`,
              }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ))}

          <p
            className="relative z-10 text-center font-serif text-lg text-foreground sm:text-xl"
            style={{ animation: "slide-up 0.7s ease-out 0.8s both" }}
          >
            This rose blooms only for you
          </p>
        </div>
      )}
    </div>
  )
}

export function GiftReveal({ giftIndex, onBack }: GiftRevealProps) {
  const gift = giftContent[giftIndex]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-md animate-fade-scale-in">
        {/* Petal animation for roses */}
        {gift.type === "roses" && <PetalFall />}

        {/* Title */}
        <h2 className="mb-2 text-center font-serif text-3xl tracking-wide text-primary animate-shimmer sm:text-4xl">
          {gift.title}
        </h2>
        <p className="mb-6 text-center text-lg text-muted-foreground sm:text-xl">
          {gift.subtitle}
        </p>

        {/* Gift visual */}
        <div className="relative mx-auto mb-6 overflow-hidden rounded-3xl shadow-2xl shadow-pink-300/30">
          {gift.type === "roses" ? (
            <Image
              src="/images/red-rose-bouquet.avif"
              alt="A beautiful bouquet of red roses"
              width={400}
              height={400}
              className="h-auto w-full animate-bloom object-cover"
              priority
            />
          ) : gift.type === "letter" ? (
            <LetterReveal />
          ) : (
            <Image
              src="/images/hearts-and-stars.avif"
              alt="Magical hearts and stars"
              width={400}
              height={400}
              className="h-auto w-full animate-pulse-slow object-cover"
              priority
            />
          )}
        </div>

        {/* Message */}
        <p className="mb-8 animate-slide-up text-center text-base leading-relaxed text-foreground sm:text-lg">
          {gift.message}
        </p>

        {/* Back button */}
        <div className="text-center">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/20"
          >
            Back to gifts
          </button>
        </div>
      </div>
    </div>
  )
}
