'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// Edit these. Add or remove entries freely; the dots update automatically.
const reviews = [
  {
    quote:
      'I love how Syotria has brought together a group of young women who are simply trying to grow, stay active, and enjoy life together. I’ve really enjoyed taking part in the fitness challenges because they keep me motivated and accountable, even on days when I don’t feel like doing much. My favorite thing about Syotria is that it doesn’t feel like just another group; it feels like a community where you can show up as yourself, meet new people, and grow together.',
    name: 'Waridi',
    detail: 'Member since 2025',
  },
  {
    quote: 'I joined Syotria because I wanted to join the military and needed to stay fit. As much as I did not reach that initial goal, it’s been such a rewarding experience for me especially in building physical fitness and gaining mental discipline. The daily routines really challenge you to show up consistently. My absolute favorites are the walks and rope skipping! While I’m still working on getting the hang of yoga and pilates (we’ll get there eventually! 😂), I love how encouraging the space is. Beyond the workouts, the sense of community is amazing. The quarterly hangouts are definitely a highlight, connecting in person with like-minded, driven ladies makes you feel genuinely connected and supported. So grateful to move and grow with Syotria! ',
    name: 'Gloria',
    detail: 'Member since 2025',
  },
  {
    quote: 'Syotria found me at a stage in my life when I had just started my career and was learning how to live on my own and navigate adulthood. What I love most about the community is the girlhood spirit;the  raw and honest conversations, the encouragement and the motivation to keep moving forward. I love how Syotria creates space for honest conversations about the struggles, beauty and realities of adulthood while still incorporating fitness and wellness. I’ve also really loved  the consistency the community encourages and the reminder to always strive to be the best version of myself. My favourite part is simply being surrounded by ladies who are growing, learning and figuring it all out together😊',
    name: 'Wendy',
    detail: 'Member since 2024',
  },
  {
    quote: 'I joined Syotria in 2024, and it is honestly been one of the best decisions I have made for myself. Being part of a girls-only fitness community has completely shifted how I think about fitness; not as a phase, but as something built on consistency. Our virtual hangouts every other Friday have become something I look forward to; we bond, laugh, and talk through so many different sides of our lives, and I have gained real clarity on what staying consistent actually looks like. But my favorite part has to be logging our workouts and seeing everyones reactions; it is hilarious watching us all "suffer" through the same exercises in our own dramatic ways. ✨',
    name: 'Hamdhi',
    detail: 'Member since 2024',
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
