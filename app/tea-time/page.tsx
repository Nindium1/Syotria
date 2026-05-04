import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function TeaTime() {
  const topics = [
    {
      title: 'Reproductive Health',
      description: 'Periods, hormones, mental health, and understanding your body. Real talk from people who get it.',
      img: '/reproductive-health.jpg',
    },
    {
      title: 'Friendships & Relationships',
      description: 'Navigating friendships, toxic dynamics, breakups, and building healthy connections.',
      img: '/friendships.jpg',
    },
    {
      title: 'Finances',
      description: 'Money mindset, saving, investing, independence, and making smart financial choices.',
      img: '/finances.jpg',
    },
    {
      title: 'Self-Growth & Manifestation',
      description: 'Dreams, goals, manifestation, therapy, personal development, and becoming your best self.',
      img: '/self-growth.jpg',
    },
    {
      title: 'Career & Education',
      description: 'Job hunting, workplace challenges, education goals, and building your future.',
      img: '/career.jpg',
    },
    {
      title: 'Mental Health & Wellness',
      description: 'Anxiety, stress, self-care, therapy, and supporting each other through hard times.',
      img: '/mental-health.jpg',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/tea-time-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Tea Time 
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            Every two weeks, we gather virtually for honest, open conversations about life,
            growth, and what it means to be a girl or woman in the world today.
          </p>
        </div>
      </section>

      {/* What is Tea Time */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What's Tea Time?
              </h2>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                Tea Time is our safe space for real, unfiltered conversation. No judgment. No
                pressure. Just girls and women having honest chats about topics that matter.
              </p>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                Whether you're looking for advice, perspective, or just want to know you're not
                alone in what you're experiencing, Tea Time is where you belong.
              </p>
              <div className="bg-card rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-foreground font-semibold">
                  Hosted every two weeks • Virtual • Confidential • Everyone's voice matters
                </p>
              </div>
            </div>
            <div className="rounded-3xl h-80 overflow-hidden">
              <img src="/tea-time.jpg" alt="Tea Time" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Topics We Discuss */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Topics We Talk About
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            If it's on your mind and your heart, it's worth talking about in Tea Time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img src={topic.img} alt={topic.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-6 pt-4 pb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{topic.title}</h3>
                  <p className="text-foreground/90 text-sm">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tea Time Matters */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Why Tea Time Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">You're Not Alone</h3>
              <p className="text-foreground/70 leading-relaxed">
                Whatever you're going through, someone else in Syotria understands. Hearing
                other girls' stories helps you feel less isolated and more connected.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">Gain New Perspectives</h3>
              <p className="text-foreground/70 leading-relaxed">
                Tea Time brings different viewpoints and experiences. You'll learn how other girls
                handle challenges and discover strategies you hadn't thought of.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">Build Confidence</h3>
              <p className="text-foreground/70 leading-relaxed">
                Speaking your truth in a safe space builds confidence. Over time, you'll feel more
                empowered to share your voice in all areas of life.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">Authentic Connection</h3>
              <p className="text-foreground/70 leading-relaxed">
                Real friendships are built on honesty. Tea Time deepens your bonds with other girls
                by creating space for authentic, vulnerable conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Topics */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Real Tea Time Conversations
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg max-w-2xl mx-auto">
            Here's what actual Tea Time sessions have looked like.
          </p>

          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">
                "How do I handle a toxic friend without hurting her feelings?"
              </h3>
              <p className="text-foreground/70">
                Girls shared real boundaries they've set, how they communicated, and how they
                prioritized their own peace while staying kind.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">
                "How do I start investing money at my age?"
              </h3>
              <p className="text-foreground/70">
                Community members shared beginner resources, common mistakes, and how they built
                their financial independence.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">
                "What does self-care really look like when you're struggling?"
              </h3>
              <p className="text-foreground/70">
                Real talk about mental health, therapy, and the small acts of self-love that matter
                when everything feels hard.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">
                "How do I talk to my family about reproductive health?"
              </h3>
              <p className="text-foreground/70">
                Girls shared how they started conversations, resources they found helpful, and how
                to advocate for their own health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Hangout Details */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Tea Time Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">Format</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ Small group virtual gatherings</li>
                <li>✓ Moderated by trusted Syotria leaders</li>
                <li>✓ Camera on or off—you choose</li>
                <li>✓ About 60 minutes</li>
                <li>✓ Every two weeks</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">What to Expect</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ A warm, welcoming group</li>
                <li>✓ Open discussion with no judgment</li>
                <li>✓ Shared experiences and advice</li>
                <li>✓ Confidentiality and respect</li>
                <li>✓ Real connection with real girls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready for Tea Time?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Join Syotria and discover the power of honest conversations with girls who truly get
            it. Your voice matters.
          </p>
          <Link
            href="/join-us"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg text-lg font-semibold"
          >
            Join Syotria <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
