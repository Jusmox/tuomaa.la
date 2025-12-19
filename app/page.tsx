import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <section id="home" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Tuomaa.la
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
              <div className="w-2 h-2 rounded-full bg-foreground/30"></div>
              <div className="w-12 sm:w-24 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 leading-tight">
              Welcome to the Portfolio/Project Bank of an Engineer
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
            <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-foreground/10 shadow-sm">
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed m-0">
                I'm a creator passionate about combining <span className="font-semibold text-foreground">technology</span>, <span className="font-semibold text-foreground">design</span>, and <span className="font-semibold text-foreground">craftsmanship</span>. I love learning new things, exploring emerging technologies, and discovering new ways to create, including 3D designing. My work spans embedded systems, IoT, digital fabrication, and woodworking, with a focus on turning ideas into functional and visually compelling projects.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/40 rounded-full"></div>
              <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 pl-8 border border-foreground/10 shadow-sm">
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed italic m-0">
                  This portfolio is just a droplet in the ocean of my creations. It currently features a couple of projects that were laying on the desktop of my PC, and over time, all projects that have some form of documentation will be added. The collection includes serious work, funny and silly pet projects, experimental concepts, and some lazy, vibe-coded ideas—everything that reflects curiosity, creativity, and a playful approach to making.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-foreground/5 to-transparent rounded-xl p-6 sm:p-8 border border-foreground/10">
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed m-0">
                If you're interested in <span className="font-medium text-foreground">custom 3D prints</span>, <span className="font-medium text-foreground">illustrations</span>, or <span className="font-medium text-foreground">laser-marked/cut creations</span>, you can reach out via the channels listed on the <a href="/contact" className="font-semibold text-foreground hover:text-foreground/80 transition-colors underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground/60">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


