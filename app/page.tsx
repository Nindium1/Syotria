import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Heart, Users } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Welcome to <span className="text-primary">Syotria</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            A warm, supportive community for girls centered on quarterly wellness challenges,
            mindful movement, and meaningful connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg text-lg font-semibold"
            >
              Join the Community <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/how-we-do-it"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all border-2 border-white/40 text-lg font-semibold backdrop-blur-sm"
            >
              Learn How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Overview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Our Quarterly Challenges
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            Each quarter, we come together for 90 days of consistent movement, growth, and sisterhood.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/yoga.jpg" alt="Yoga Challenge" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Yoga Challenge</h3>
                <p className="text-foreground/90 text-sm">
                  Q1 & Q3: Mindful movement and flexibility through guided yoga practices.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/pilates.jpg" alt="Pilates Challenge" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pilates Challenge</h3>
                <p className="text-foreground/90 text-sm">
                  Q2 & Q4: Core strength and graceful movement for total body wellness.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/rope-skipping.jpg" alt="Rope Skipping" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Rope Skipping</h3>
                <p className="text-foreground/90 text-sm">
                  Month 2 of each quarter: Fun cardio challenge to boost endurance and energy.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/steps.jpg" alt="Steps Challenge" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Steps Challenge</h3>
                <p className="text-foreground/90 text-sm">
                  Final month: Daily movement and consistency challenge to celebrate progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tea Time Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tea Time: Our Spaces for Connection
              </h2>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                Every two weeks, we gather virtually for open, honest conversations about
                life as girls and women. No judgment, just real talk about what matters.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">
                    <strong>Reproductive Health:</strong> Understanding our bodies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">
                    <strong>Friendships:</strong> Navigating relationships and sisterhood
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">
                    <strong>Finances:</strong> Money, independence, and smart choices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">
                    <strong>Personal Growth:</strong> Manifestation and becoming our best selves
                  </span>
                </li>
              </ul>
              <Link
                href="/tea-time"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Explore Tea Time <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-3xl h-96 overflow-hidden">
              <img src="/tea-time.jpg" alt="Tea Time" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* In-Person Meetups */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl h-96 overflow-hidden order-2 md:order-1">
              <img src="/meetups.jpg" alt="In-Person Meetups" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                In-Person Meetups: The Syotria Experience
              </h2>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                At the end of every quarter, we gather in person to celebrate our progress,
                deepen our connections, and create lasting memories together. It's where
                the magic of Syotria truly comes alive.
              </p>
              <div className="bg-card rounded-2xl p-6 mb-6 border-l-4 border-primary">
                <p className="text-foreground">
                  <strong>Mandatory quarterly meetups</strong> ensure everyone experiences
                  the full power of in-person sisterhood. Plus, we occasionally add bonus
                  meetups for extra connection and fun.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Built for Sisterhood</h3>
                  <p className="text-foreground/70">
                    Every meetup is designed to strengthen bonds, celebrate consistency, and
                    remind each other why we show up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            What We Stand For
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            <span className="text-primary">Syotria</span> is built on four pillars that guide everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/Consistency.jpg" alt="Consistency" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Consistency</h3>
                <p className="text-foreground/90 text-sm">Showing up for yourself and each other, no matter what.</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/balance.jpg" alt="Balance" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Balance</h3>
                <p className="text-foreground/90 text-sm">Honoring both strength and softness in our wellness journeys.</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/accountability.jpg" alt="Accountability" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Accountability</h3>
                <p className="text-foreground/90 text-sm">Supporting each other to reach our goals and celebrate wins.</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/sisterhood.jpg" alt="Sisterhood" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Sisterhood</h3>
                <p className="text-foreground/90 text-sm">Creating a safe, inclusive space where everyone belongs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Teaser */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Syotria</span> Merch
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Wear your sisterhood with pride. Our thoughtfully designed merch celebrates the
            Syotria journey and represents the values that bind our community together.
          </p>
          <div className="rounded-3xl mb-8 h-96 overflow-hidden">
            <img src="/sweatshirt4.jpg" alt="Syotria Merch" className="w-full h-full object-cover" />
          </div>
          <Link
            href="/merch"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg font-semibold"
          >
            Explore Merch
          </Link>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Get updates on new challenges, Tea Time topics, and exclusive community moments.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-card border-2 border-border focus:border-primary focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-foreground/50 text-sm mt-4">
            Join our community and never miss what's happening at Syotria.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
