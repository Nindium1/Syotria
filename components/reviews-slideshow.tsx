'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// Edit these. Add or remove entries freely; the dots update automatically.
const reviews = [
  {
    quote:
      'Replace this with a real review from a member. Two or three sentences reads best on phones.',
    name: 'Member name',
    detail: 'Member since 2025',
  },
  {
    quote: 'Second review goes here. Say what changed for her after joining, in her own words.',
    name: 'Member name',
    detail: 'Member since 2026',
  },
  {
    quote: 'Third review goes here.',
    name: 'Member name',
    detail: 'Member since 2026',
  },
  {
    quote: 'Fourth review goes here.',
    name: 'Member name',
    detail: 'Member since 2026',
  },
  {
    quote: 'Fifth review goes here.',
    name: 'Member name',
    detail: 'Member since 2026',
  },
  {
    quote: 'Sixth review goes here.',
    name: 'Member name',
    detail: 'Member since 2026',
  },
]

const AUTOPLAY_MS = 6000

export default function ReviewsSlideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const count = reviews.length

  const go = (n: number) => setIndex((n + count) % count)

  // Auto-advance, unless hovered/focused or the visitor prefers reduced motion
  useEffect(() => {
    if (paused || count < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          What Members Say
        </h2>

        <div
          className="bg-card rounded-3xl p-8 md:p-12"
          role="group"
          aria-roledescription="carousel"
          aria-label="Member reviews"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
            touchStartX.current = null
          }}
        >
          <Quote className="w-8 h-8 text-primary mb-4 mx-auto" aria-hidden="true" />

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((r, i) => (
                <figure
                  key={i}
                  className="w-full shrink-0 text-center px-1"
                  aria-hidden={i !== index}
                >
                  <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                    {r.quote}
                  </blockquote>
                  <figcaption>
                    <span className="block font-bold text-foreground">{r.name}</span>
                    <span className="text-sm text-foreground/60">{r.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {count > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={i === index}
                    className={`w-2.5 h-2.5 rounded-full border-2 border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      i === index ? 'bg-primary' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
