import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { MessageCircle } from 'lucide-react'

export default function Merch() {
  const merchItems = [
    { name: 'Yoga Girl T-Shirt', price: 'KES 1,299', img: '/tshirt1.png' },
    { name: 'I Got Me T-Shirt', price: 'KES 1,299', img: '/tshirt2.png' },
    { name: 'Me Time T-Shirt', price: 'KES 1,299', img: '/tshirt3.png' },
    { name: 'Self T-Shirt', price: 'KES 1,299', img: '/tshirt4.png' },
    { name: 'No Stress, Just Stretch T-Shirt', price: 'KES 1,299', img: '/tshirt5.png' },
    { name: 'The Reader T-Shirt', price: 'KES 1,299', img: '/tshirt6.png' },
    { name: 'Daily Steps T-Shirt', price: 'KES 1,299', img: '/tshirt7.png' },
    { name: 'Me Time Sweatshirt', price: 'KES 2,500', img: '/sweatshirt1.png' },
    { name: 'No Stress, Just Stretch Sweatshirt', price: 'KES 2,500', img: '/sweatshirt2.png' },
    { name: 'The Reader Sweatshirt', price: 'KES 2,500', img: '/sweatshirt3.png' },
    { name: 'Yoga Girl Sweatshirt', price: 'KES 2,500', img: '/sweatshirt4.png' },
    { name: 'Self Sweatshirt', price: 'KES 2,500', img: '/sweatshirt5.png' },
    { name: 'Me Time Cap', price: 'KES 950', img: '/cap1.png' },
    { name: 'Self Cap', price: 'KES 950', img: '/cap2.png' },
    { name: 'Self Mug', price: 'KES 850', img: '/mug.png' },
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
            <div className="rounded-3xl h-80 overflow-hidden">
              <img src="/tshirt1.png" alt="Syotria Merch" className="w-full h-full object-cover" />
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
                <div className="h-64 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                    <a
                      href="https://wa.me/254748416553"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors text-sm font-semibold"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Coming Soon
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg max-w-2xl mx-auto">
            We're expanding! Here's a sneak peek at what's coming to the Syotria store.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-3xl overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/outfits.jpg" alt="Workout Outfits" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Workout Outfits</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Sports bras, t-shirts, pants and more — everything you need to move in style.
                </p>
                <span className="text-primary font-semibold text-sm">Coming Soon</span>
              </div>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/equipment.jpg" alt="Equipment" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Equipment</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Yoga mats, skipping ropes, resistance bands, dumbbells, shoes and more.
                </p>
                <span className="text-primary font-semibold text-sm">Coming Soon</span>
              </div>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img src="/planners.jpg" alt="Planners" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Planners</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Beautifully designed planners and diaries to help you stay organised and intentional.
                </p>
                <span className="text-primary font-semibold text-sm">Coming Soon</span>
              </div>
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
              <h3 className="text-xl font-bold text-foreground mb-2">T-Shirts</h3>
              <p className="text-foreground/70">
                Designed with a relaxed fit for everyday wear and movement. If you're between sizes,
                we recommend sizing up for comfort.
              </p>
            </div>

            <div className="border-b border-border pb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Sweatshirts</h3>
              <p className="text-foreground/70">
                Cozy and roomy for layering. We recommend your true size for a classic fit or
                sizing up for an oversized look.
              </p>
            </div>

            <div className="border-b border-border pb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Caps</h3>
              <p className="text-foreground/70">
                Adjustable for all head sizes — one size fits all.
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
            Ready to Order?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Wear your sisterhood with pride. Reach out to us directly to place your order and
            we'll get back to you as soon as possible.
          </p>
          <a
            href="https://wa.me/254748416553"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg text-lg font-semibold"
          >
            Get in Touch <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
