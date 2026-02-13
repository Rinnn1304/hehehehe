"use client"

import { useState, useCallback } from "react"
import { FloatingHearts } from "./floating-hearts"
import { Confetti } from "./confetti"
import { GiftBox } from "./gift-box"
import { GiftReveal } from "./gift-reveal"
import { Heart } from "lucide-react"

type Screen = "proposal" | "accepted" | "gift-reveal"

export function ValentineApp() {
  const [screen, setScreen] = useState<Screen>("proposal")
  const [noButtonOffset, setNoButtonOffset] = useState({ x: 0, y: 0 })
  const [selectedGift, setSelectedGift] = useState<number>(0)
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set())

  const handleYes = useCallback(() => {
    setScreen("accepted")
  }, [])

  const handleNo = useCallback(() => {
    setNoButtonOffset({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    })
  }, [])

  const handleGiftClick = useCallback((index: number) => {
    setSelectedGift(index)
    setOpenedGifts((prev) => new Set(prev).add(index))
    setScreen("gift-reveal")
  }, [])

  const handleBackToGifts = useCallback(() => {
    setScreen("accepted")
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />

      {screen === "proposal" && (
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          {/* Decorative hearts */}
          <div className="absolute left-4 top-8 animate-pulse sm:left-12">
            <Heart className="h-8 w-8 fill-primary/30 text-primary/30 sm:h-12 sm:w-12" />
          </div>
          <div className="absolute right-6 top-16 animate-pulse sm:right-16" style={{ animationDelay: "1s" }}>
            <Heart className="h-6 w-6 fill-accent/30 text-accent/30 sm:h-8 sm:w-8" />
          </div>
          <div className="absolute bottom-20 left-8 animate-pulse sm:left-20" style={{ animationDelay: "0.5s" }}>
            <Heart className="h-10 w-10 fill-primary/20 text-primary/20 sm:h-14 sm:w-14" />
          </div>

          <div className="relative z-10 animate-fade-scale-in text-center">
            {/* Glowing heart icon */}
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
              <Heart className="h-12 w-12 fill-primary text-primary drop-shadow-lg sm:h-16 sm:w-16" />
            </div>

            <p className="mb-2 text-base tracking-widest text-muted-foreground sm:text-lg">
              Hey there,
            </p>
            <h1 className="mb-10 font-serif text-4xl leading-tight tracking-wide text-foreground sm:text-6xl md:text-7xl">
              Will you be{" "}
              <span className="text-primary">
                my Valentine?
              </span>
            </h1>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <button
                type="button"
                onClick={handleYes}
                className="group relative overflow-hidden rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-pink-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-400/40 sm:px-14 sm:py-5 sm:text-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="h-5 w-5 transition-transform duration-300 group-hover:scale-125" />
                  YES
                </span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>

              <button
                type="button"
                onClick={handleNo}
                className="rounded-full border-2 border-border bg-transparent px-10 py-4 text-lg font-bold text-muted-foreground transition-all duration-300 hover:border-primary/50 sm:px-14 sm:py-5 sm:text-xl"
                style={{
                  transform: `translate(${noButtonOffset.x}px, ${noButtonOffset.y}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}

      {screen === "accepted" && (
        <>
          <Confetti />
          <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
            <div className="relative z-10 animate-fade-scale-in text-center">
              {/* Bouncing hearts */}
              <div className="mx-auto mb-4 flex items-center justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <Heart
                    key={i}
                    className="h-8 w-8 animate-bounce fill-primary text-primary sm:h-10 sm:w-10"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>

              <h2 className="mb-2 font-serif text-5xl text-foreground animate-heart-bounce sm:text-7xl">
                YAY!
              </h2>
              <p className="mb-10 text-xl font-semibold tracking-wide text-primary sm:text-2xl">
                YOU SAID YES!
              </p>

              {/* Gift boxes */}
              <p className="mb-8 text-base text-muted-foreground sm:text-lg">
                Choose a gift to unwrap
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {["Gift 1", "Gift 2", "Gift 3"].map((label, index) => (
                  <GiftBox
                    key={label}
                    label={label}
                    index={index}
                    onClick={() => handleGiftClick(index)}
                    isOpened={openedGifts.has(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {screen === "gift-reveal" && (
        <GiftReveal giftIndex={selectedGift} onBack={handleBackToGifts} />
      )}
    </div>
  )
}
