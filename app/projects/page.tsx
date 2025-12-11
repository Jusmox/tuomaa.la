import { Navigation } from '@/components/navigation'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center px-2">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mb-8 sm:mb-10 text-center px-2">
            Coming soon
          </p>
        </div>
      </section>
    </main>
  )
}

