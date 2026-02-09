import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display'
})
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'Syotria | Girls Wellness & Fitness Community',
  description: 'Join Syotria, a supportive community for girls centered on quarterly workout challenges, mindful movement, and intentional connection. Embrace consistency, balance, accountability, and sisterhood.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
