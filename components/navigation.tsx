'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-we-do-it', label: 'How We Do It' },
    { href: '/tea-time', label: 'Tea Time' },
    { href: '/resources', label: 'Resources' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/merch', label: 'Merch' },
    { href: '/join-us', label: 'Join Us' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-2xl text-primary"
          >
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            Syotria
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/join-us"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg hover:bg-secondary text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join-us"
              className="block w-full text-center bg-primary text-primary-foreground px-3 py-2 rounded-full hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
