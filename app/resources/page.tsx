import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Music, Zap, Play } from 'lucide-react'

export default function Resources() {
  const playlists = [
    {
      title: 'Rope-Skipping Playlist',
      description:
        'High-energy beats to keep you motivated during your rope-skipping challenge. Perfect for building momentum and staying consistent.',
      icon: '🎵',
      emoji: '⛹️',
    },
    {
      title: 'Walking & Steps Challenge Playlist',
      description:
        'Uplifting music to accompany your daily steps. Great for walks, outdoor movement, and keeping the energy high.',
      icon: '🎵',
      emoji: '👟',
    },
    {
      title: 'Beginner-Friendly Yoga Playlist',
      description:
        'Calming, accessible yoga flows perfect for all levels. A gentle way to build strength and flexibility at your own pace.',
      icon: '🎵',
      emoji: '🧘',
    },
    {
      title: 'Beginner-Friendly Pilates Playlist',
      description:
        'Core-strengthening, grace-focused pilates workouts. Designed for beginners to build confidence and consistency.',
      icon: '🎵',
      emoji: '💪',
    },
  ]

  const motivationVideos = [
    {
      title: 'Your Journey Matters',
      description: 'A reminder that showing up for yourself is everything.',
    },
    {
      title: 'Sisterhood in Motion',
      description: 'How Syotria members support and lift each other up.',
    },
    {
      title: 'The Power of Consistency',
      description: 'Small steps, big transformations. Your story of growth.',
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
            Resources for Your Wellness Journey
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            Everything you need to succeed with your <span className="text-primary">Syotria</span> challenges. Music to motivate,
            videos to inspire, and tools to celebrate your progress.
          </p>
        </div>
      </section>

      {/* Playlists Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Our Curated Playlists
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            The perfect soundtrack for every Syotria challenge. Designed to keep you motivated,
            energized, and connected to the beat of our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{playlist.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {playlist.title}
                    </h3>
                    <p className="text-foreground/70">{playlist.description}</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4">
                  <Music className="w-5 h-5" />
                  Listen on Spotify
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation Videos Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Motivation Videos
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            Real stories of Syotria members and inspiration to keep you moving forward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {motivationVideos.map((video, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{video.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{video.description}</p>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    <Play className="w-4 h-4" />
                    Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Show Up at Your Own Pace
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            These resources are here to support you, not pressure you. Whether you use every
            playlist or just one, whether you watch all videos or a few—what matters is that
            you're showing up for yourself. Every step counts, every effort is celebrated.
          </p>
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">
              You belong here, exactly as you are.
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join Syotria and access these resources as part of your community journey.
          </p>
          <Link
            href="/join-us"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg text-lg font-semibold"
          >
            Join Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
