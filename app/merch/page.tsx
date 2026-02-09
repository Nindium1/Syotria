import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Merch() {
  const merchItems = [
    {
      name: 'Syotria Core Hoodie',
      description: 'Soft, cozy hoodie perfect for pre and post-workout warmth',
      price: '$65',
      emoji: '🎽',
    },
    {
      name: 'Confidence T-Shirt',
      description: 'Everyday tee celebrating the strength within every girl',
      price: '$28',
      emoji: '👕',
    },
    {
      name: 'Sisterhood Sports Bra',
      description: 'Supportive and stylish workout essential designed for comfort',
      price: '$48',
      emoji: '🧢',
    },
    {
      name: 'Wellness Water Bottle',
      description: 'Stainless steel bottle to keep you hydrated during challenges',
      price: '$32',
      emoji: '🧴',
    },
    {
      name: 'Syotria Yoga Mat',
      description: 'Premium mat for yoga, pilates, and mindful movement',
      price: '$75',
      emoji: '🧘',
    },
    {
      name: 'Growth Mindset Cap',
      description: 'Adjustable cap to wear your Syotria pride anywhere',
      price: '$24',
      emoji: '🧢',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            <span className="text-primary">Syotria</span> Merch
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            Wear your sisterhood with pride. Our carefully crafted collection celebrates the
            values that bind our community together.
          </p>
        </div>
      </section>

      {/* About Our Merch */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl h-80 flex items-center justify-center">
              <span className="text-7xl">👕</span>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Syotria Merch?
              </h2>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                Every piece of Syotria merch tells our story. We chose sustainable materials,
                thoughtful designs, and pieces that fit into your everyday life—whether you're
                heading to a workout or running errands.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✨</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Quality & Comfort</h3>
                    <p className="text-foreground/70 text-sm">
                      Designed for girls, by people who understand what matters
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl">🌍</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Sustainable</h3>
                    <p className="text-foreground/70 text-sm">
                      Ethical production and environmentally conscious choices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl">💝</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Purpose</h3>
                    <p className="text-foreground/70 text-sm">
                      A portion of proceeds supports community wellness initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Collection */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Shop the Collection
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            Celebrate your Syotria journey with pieces that feel like you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center">
                  <span className="text-6xl">{item.emoji}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-foreground/70 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-secondary/80 transition-colors text-sm font-semibold">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Drops */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Coming Soon
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg max-w-2xl mx-auto">
            New drops every quarter to celebrate our challenges and community milestones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Q1 Yoga Collection</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Limited edition pieces celebrating our Yoga Challenge
              </p>
              <span className="text-primary font-semibold text-sm">Available Jan 2025</span>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Q2 Pilates Edition</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Special designs honoring strength and grace
              </p>
              <span className="text-primary font-semibold text-sm">Available Apr 2025</span>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Exclusive Drops</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Surprise collaborations and limited runs throughout the year
              </p>
              <span className="text-primary font-semibold text-sm">Stay Tuned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Size & Fit Guide */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Size & Fit Guide
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            All our pieces are designed for comfort and confidence.
          </p>

          <div className="bg-card rounded-3xl p-8 space-y-6">
            <div className="border-b border-border pb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Tops & Hoodies</h3>
              <p className="text-foreground/70">
                Designed with a relaxed fit for layering and movement. If you're between sizes,
                we recommend sizing up for comfort.
              </p>
            </div>

            <div className="border-b border-border pb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Activewear</h3>
              <p className="text-foreground/70">
                Our sports bras and leggings are engineered for support and stretch. Check the
                sizing chart for your best fit.
              </p>
            </div>

            <div className="border-b border-border pb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Accessories</h3>
              <p className="text-foreground/70">
                Water bottles are universal size. Hats are adjustable for all head sizes. Mats
                come in standard yoga dimensions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Returns & Exchanges</h3>
              <p className="text-foreground/70">
                Not a perfect fit? We offer 30 days for returns and exchanges. Your satisfaction
                matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shop Now
          </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                Wear your sisterhood with pride. Our thoughtfully designed merch celebrates the
                <span className="text-primary">Syotria</span> journey and represents the values that bind our community together.
              </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg text-lg font-semibold"
          >
            Visit Syotria Store <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
