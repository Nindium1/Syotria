import Link from 'next/link'
import { Instagram, TicketIcon as TikTok, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Syotria</h3>
            <p className="text-foreground/70 text-sm">
              A supportive community for girls centered on wellness, mindful movement, and intentional connection.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/how-we-do-it"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  How We Do It
                </Link>
              </li>
              <li>
                <Link
                  href="/tea-time"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Tea Time
                </Link>
              </li>
              <li>
                <Link
                  href="/merch"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Merch
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/join-us"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Waitlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <TikTok className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>
              &copy; {currentYear} Syotria. All rights reserved. Built with love for
              girls everywhere.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
