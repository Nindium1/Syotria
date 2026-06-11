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
      img: '/rope-skipping.jpg',
      link: 'https://open.spotify.com/playlist/10Tjj2w3jYaLzyOVNdR5V3',
      type: 'spotify',
    },
    {
      title: 'Walking & Steps Challenge Playlist',
      description:
        'Uplifting music to accompany your daily steps. Great for walks, outdoor movement, and keeping the energy high.',
      img: '/steps.jpg',
      link: 'https://open.spotify.com/playlist/7dRr5Rq9MrlEgX9N5qOjLx',
      type: 'spotify',
    },
    {
      title: 'Beginner-Friendly Yoga Playlist',
      description:
        'Calming, accessible yoga flows perfect for all levels. A gentle way to build strength and flexibility at your own pace.',
      img: null,
      embedPlaylist: 'PLEs9dX8UXFZpD4n4gS-Upe-DcR0z3_9NE',
      link: 'https://www.youtube.com/playlist?list=PLEs9dX8UXFZpD4n4gS-Upe-DcR0z3_9NE',
      type: 'youtube',
    },
    {
      title: 'Beginner-Friendly Pilates Playlist',
      description:
        'Core-strengthening, grace-focused pilates workouts. Designed for beginners to build confidence and consistency.',
      img: null,
      embedPlaylist: 'PL6F8elYp4eOFCIMT4EzJbWX8llDIRqtyq',
      link: 'https://www.youtube.com/playlist?list=PL6F8elYp4eOFCIMT4EzJbWX8llDIRqtyq',
      type: 'youtube',
    },
  ]

  const motivationVideos = [
    {
      title: 'Your Journey Matters',
      description: 'A reminder that showing up for yourself is everything.',
      link: 'https://www.youtube.com/watch?v=5XhfNHswGsU',
      embedId: '5XhfNHswGsU',
    },
    {
      title: 'Showing up for Yourself',
      description: 'How Syotria members support and lift each other up.',
      link: 'https://www.youtube.com/watch?v=K9QmqNokV3E',
      embedId: 'K9QmqNokV3E',
    },
    {
      title: 'The Power of Consistency',
      description: 'Small steps, big transformations. Your story of growth.',
      link: 'https://www.youtube.com/watch?v=hNO1qYWg8bc',
      embedId: 'hNO1qYWg8bc',
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
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  {playlist.embedPlaylist ? (
                    <iframe
                      src={`https://www.youtube.com/embed/videoseries?list=${playlist.embedPlaylist}`}
                      title={playlist.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <img src={playlist.img!} alt={playlist.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{playlist.title}</h3>
                  <p className="text-foreground/70 mb-4">{playlist.description}</p>
                  <a
                    href={playlist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <Music className="w-5 h-5" />
                    {playlist.type === 'spotify' ? 'Listen on Spotify' : 'Watch on YouTube'}
                  </a>
                </div>
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
                <div className="relative h-48">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{video.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{video.description}</p>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <Play className="w-4 h-4" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-64 rounded-3xl overflow-hidden mb-8 max-w-2xl mx-auto">
            <img src="/balance.jpg" alt="Show Up at Your Own Pace" className="w-full h-full object-cover" />
          </div>
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
