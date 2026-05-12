import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Gallery() {
  const galleryItems = [
    { id: 1, img: '/syotria1.jpg', title: 'Syotria Moments', caption: 'Finding strength in stillness' },
    { id: 2, img: '/syotria2.jpg', title: 'Syotria Moments', caption: 'Core strength and grace' },
    { id: 3, img: '/syotria3.jpg', title: 'Syotria Moments', caption: 'Building momentum together' },
    { id: 4, img: '/syotria4.jpg', title: 'Syotria Moments', caption: 'Every step counts' },
    { id: 5, img: '/syotria5.jpg', title: 'Syotria Moments', caption: 'Open conversations, real connections' },
    { id: 6, img: '/syotria6.jpg', title: 'Syotria Moments', caption: 'Sisterhood in real time' },
    { id: 7, img: '/syotria7.jpg', title: 'Syotria Moments', caption: 'Where the magic happens' },
    { id: 8, img: '/syotria8.jpg', title: 'Syotria Moments', caption: 'Celebrating consistency and growth' },
    { id: 9, img: '/syotria9.jpg', title: 'Syotria Moments', caption: 'Building bonds that last' },
    { id: 10, img: '/syotria10.jpg', title: 'Syotria Moments', caption: 'Starting the day together' },
    { id: 11, img: '/syotria11.jpg', title: 'Syotria Moments', caption: 'Moving together, growing together' },
  ]

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

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-card/80 text-sm">{item.caption}</p>
                  </div>
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
