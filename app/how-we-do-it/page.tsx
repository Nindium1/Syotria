import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HowWeDoIt() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
     <section
  className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  style={{
    backgroundImage: 'url(/how-we-do-it-hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
  How <span className="text-white">Syotria</span> Works
</h1>
    <p className="text-xl md:text-2xl text-white/80 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
      A simple, sustainable system designed to keep you moving, growing, and connected
      all year long.
    </p>
  </div>
</section>

      {/* The Quarterly System */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            The <span className="text-primary">Syotria</span> Quarterly System
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            We break the year into four quarters, each with its own unique focus and rhythm.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Q1 */}
            <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-primary mb-4">QUARTER 1</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">January - March: Yoga Focus</h3>
              <div className="space-y-3">
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 1-4: Yoga Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Begin with a full month of guided yoga practice, building flexibility and mindfulness.
                  </p>
                </div>
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 5-8: Rope Skipping Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Add cardio energy with our rope skipping challenge, boosting your endurance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Weeks 9-12: Steps Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Close the quarter strong with daily step goals, celebrating consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-primary mb-4">QUARTER 2</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">April - June: Pilates Focus</h3>
              <div className="space-y-3">
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 1-4: Pilates Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Build core strength and grace with targeted pilates exercises and guidance.
                  </p>
                </div>
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 5-8: Rope Skipping Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Switch gears with cardio to complement your pilates progress.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Weeks 9-12: Steps Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Wrap up the quarter with consistent daily movement tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-primary mb-4">QUARTER 3</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">July - September: Yoga Focus</h3>
              <div className="space-y-3">
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 1-4: Yoga Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Return to yoga with deeper practices, building on what you learned in Q1.
                  </p>
                </div>
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 5-8: Rope Skipping Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Boost cardio endurance with high-energy rope skipping sessions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Weeks 9-12: Steps Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    End strong with daily movement goals and community celebration.
                  </p>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-bold text-primary mb-4">QUARTER 4</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">October - December: Pilates Focus</h3>
              <div className="space-y-3">
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 1-4: Pilates Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Strengthen your core for the year ahead with advanced pilates routines.
                  </p>
                </div>
                <div className="pb-3 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-1">Weeks 5-8: Rope Skipping Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Stay energized with cardio before the holiday season.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Weeks 9-12: Steps Challenge</h4>
                  <p className="text-foreground/70 text-sm">
                    Reflect and celebrate 12 months of growth and sisterhood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Three Pillars of Syotria
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            Every part of the Syotria experience rests on these three foundations.
          </p>

          {/* Membership Fee Note */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-3xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-3">Membership Fee</h3>
            <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Participating in Syotria requires a quarterly membership fee of{' '}
              <span className="font-bold text-primary">KES 1,000</span>. This sustains our
              community by covering shared resources, in-person meetup costs, and community
              activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/rope-skipping.jpg" alt="Workout Challenges" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6">
                <h3 className="text-3xl font-bold text-foreground mb-4">Workout Challenges</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Quarterly challenges give structure and motivation. Each challenge is designed
                  to fit your fitness level, and progress is tracked within our community.
                  Consistency builds strength—physical and mental.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/tea-time.jpg" alt="Tea Time Hangouts" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6">
                <h3 className="text-3xl font-bold text-foreground mb-4">Tea Time Hangouts</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Every two weeks, we gather virtually for open conversations. No topics are
                  off-limits. We talk about what really matters: relationships, health, finances,
                  growth, and life as a girl or woman.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/in-person-meetups.jpg" alt="In-Person Meetups" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pt-4 pb-6">
                <h3 className="text-3xl font-bold text-foreground mb-4">In-Person Meetups</h3>
                <p className="text-foreground/90 leading-relaxed">
                  At the end of every quarter, we gather in person to celebrate, connect, and
                  create memories. These mandatory meetups are where the Syotria magic truly
                  comes alive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Our Philosophy
          </h2>

          <div className="space-y-8 mt-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/Consistency.jpg" alt="Consistency" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Consistency Over Perfection</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We celebrate showing up, not being perfect. Missing a day? No shame. Come back
                  tomorrow. Syotria is about sustainable, long-term wellness—not perfection.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/balance.jpg" alt="Balance" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Balance and Self-Care</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Wellness isn't just exercise. It's rest, reflection, community, and joy. We
                  honor both the strength in pushing ourselves and the wisdom in listening to
                  our bodies.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/accountability.jpg" alt="Accountability" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Accountability Through Love</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We hold each other accountable, but with grace. Friends check in, celebrate
                  wins, and remind each other why consistency matters. That's real accountability.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/sisterhood.jpg" alt="Sisterhood" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Sisterhood is Sacred</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Everyone who joins <span className="text-primary">Syotria</span> becomes part of our family. We create a safe, judgment-free
                  space where girls can be exactly who they are and grow into who they want to become.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Join?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a fitness enthusiast or just looking for community, there's a place
            for you in Syotria. Let's move, grow, and thrive together.
          </p>
          <Link
            href="/join-us"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg text-lg font-semibold"
          >
            Join the Community <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
