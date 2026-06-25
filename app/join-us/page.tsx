'use client'

import React from "react"
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function JoinUs() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/join-us-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Join <span className="text-primary">Syotria</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            You belong here. Let's move, grow, and thrive together in a community built for girls
            like you.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            What You'll Get
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            Joining Syotria means becoming part of something bigger than yourself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Structured Challenges</h3>
              <p className="text-foreground/70">
                Quarterly challenges designed to build consistency, strength, and confidence.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Supportive Community</h3>
              <p className="text-foreground/70">
                A sisterhood of girls cheering each other on, celebrating wins, and supporting
                through challenges.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Open Conversations</h3>
              <p className="text-foreground/70">
                Tea Time hangouts where you can talk about real life without judgment or shame.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Real Friendships</h3>
              <p className="text-foreground/70">
                Meaningful connections built through shared experiences, vulnerability, and
                mutual support.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Inclusive Wellness</h3>
              <p className="text-foreground/70">
                No judgment about fitness level, body type, or experience. Everyone is welcome.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Personal Growth</h3>
              <p className="text-foreground/70">
                Accountability and encouragement to become your best self in all areas of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Is Syotria For You?
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg max-w-2xl mx-auto">
            Syotria is for girls who want more than a workout—they want a community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">You're a Good Fit If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">You want consistent structure and accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">You're looking for genuine friendships with other girls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">You value wellness beyond just exercise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">You're open to talking about real life issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground/80">You want to show up for other girls too</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">What We Ask:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">♡</span>
                  <span className="text-foreground/80">Commit to quarterly challenges and consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">♡</span>
                  <span className="text-foreground/80">Attend quarterly in-person meetups (mandatory)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">♡</span>
                  <span className="text-foreground/80">Participate in Tea Time and community spaces when you can</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">♡</span>
                  <span className="text-foreground/80">Keep conversations confidential and respectful</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">♡</span>
                  <span className="text-foreground/80">Show up with authenticity and kindness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Fee Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Membership Fee</h3>
            <p className="text-foreground/70 leading-relaxed">
              Syotria membership requires a quarterly fee of{' '}
              <span className="font-bold text-primary">KES 1,000</span>. This helps us sustain and
              grow the community — covering shared resources, in-person meetup costs, and community
              activities. Payment details will be shared once your application is reviewed.
            </p>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Register Your Interest
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            We welcome new members at the start of each quarter. Register your interest and we'll be in touch when the next intake opens.
          </p>

          <form
            action="https://formspree.io/f/xrevakbn"
            method="POST"
            className="bg-card rounded-3xl p-8 md:p-12 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="Tell us your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-foreground mb-2">
                  Age Range
                </label>
                <select
                  id="age"
                  name="age"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select your age range</option>
                  <option value="13-17">13-17</option>
                  <option value="18-22">18-22</option>
                  <option value="23-30">23-30</option>
                  <option value="30+">30+</option>
                </select>
              </div>

              <div>
                <label htmlFor="fitnessLevel" className="block text-sm font-semibold text-foreground mb-2">
                  Fitness Level
                </label>
                <select
                  id="fitnessLevel"
                  name="fitnessLevel"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="notSure">Not sure</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Why do you want to join us?
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-2xl bg-input border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none h-24"
                placeholder="Tell us what you're looking for in a community..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg font-semibold text-lg flex items-center justify-center gap-2"
            >
              Register <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-foreground/60 text-sm">
              By registering, you agree to our community values of respect, confidentiality, and
              sisterhood.
            </p>
          </form>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Have Questions?
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg max-w-2xl mx-auto">
            We're here to help. Reach out and let's chat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:slaystretchsquad@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                slaystretchsquad@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-foreground mb-2">DM on Instagram</h3>
              <a href="https://www.instagram.com/syotriawellness/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                @syotriawellness
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-foreground mb-2">Chat with Us</h3>
              <a href="https://wa.me/254748416553" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
