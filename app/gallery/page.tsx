import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Yoga Flow',
      category: 'Workout',
      caption: 'Finding strength in stillness',
      emoji: '🧘',
    },
    {
      id: 2,
      title: 'Pilates Power',
      category: 'Workout',
      caption: 'Core strength and grace',
      emoji: '💪',
    },
    {
      id: 3,
      title: 'Rope-Skipping Energy',
      category: 'Workout',
      caption: 'Building momentum together',
      emoji: '⛹️',
    },
    {
      id: 4,
      title: 'Steps Challenge Victory',
      category: 'Workout',
      caption: 'Every step counts',
      emoji: '👟',
    },
    {
      id: 5,
      title: 'Tea Time Connection',
      category: 'Virtual Hangout',
      caption: 'Open conversations, real connections',
      emoji: '☕',
    },
    {
      id: 6,
      title: 'Tea Time Laughs',
      category: 'Virtual Hangout',
      caption: 'Sisterhood in real time',
      emoji: '💬',
    },
    {
      id: 7,
      title: 'Quarterly Meetup',
      category: 'In-Person Meetup',
      caption: 'Where the magic happens',
      emoji: '🤝',
    },
    {
      id: 8,
      title: 'Community Celebration',
      category: 'In-Person Meetup',
      caption: 'Celebrating consistency and growth',
      emoji: '🎉',
    },
    {
      id: 9,
      title: 'Sisterhood Moments',
      category: 'Community',
      caption: 'Building bonds that last',
      emoji: '💝',
    },
    {
      id: 10,
      title: 'Morning Motivation',
      category: 'Community',
      caption: 'Starting the day together',
      emoji: '🌅',
    },
    {
      id: 11,
      title: 'Group Energy',
      category: 'Workout',
      caption: 'Moving together, growing together',
      emoji: '✨',
    },
    {
      id: 12,
      title: 'Victory Moments',
      category: 'Community',
      caption: 'Your progress, our pride',
      emoji: '🏆',
    },
  ]

  const categories = ['All', 'Workout', 'Virtual Hangout', 'In-Person Meetup', 'Community']

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
            A visual celebration of <span className="text-primary">Syotria</span> moments—workouts, hangouts, meetups, and the
            beautiful sisterhood we share.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-semibold transition-all"
                style={{
                  backgroundColor: category === 'All' ? 'var(--color-primary)' : 'var(--color-secondary)',
                  color: category === 'All' ? 'var(--color-primary-foreground)' : 'var(--color-secondary-foreground)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 aspect-square flex items-center justify-center overflow-hidden">
                  <span className="text-6xl transition-transform group-hover:scale-110">
                    {item.emoji}
                  </span>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-sm font-semibold text-accent mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold text-card mb-2">{item.title}</h3>
                  <p className="text-card/80 text-sm">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Story Matters
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            Every photo, every moment in this gallery represents someone showing up for
            themselves and their community. These are the faces of consistency, the proof of
            sisterhood, and the visual record of what happens when girls come together to
            support each other's wellness journeys.
          </p>
          <div className="space-y-4">
            <p className="text-foreground font-semibold">
              Want to see your moment in the gallery?
            </p>
            <p className="text-foreground/70">
              Share your <span className="text-primary">Syotria</span> moments with us on social media using{' '}
              <span className="font-bold text-primary">#SyotriaStories</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
