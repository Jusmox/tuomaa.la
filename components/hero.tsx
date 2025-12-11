export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
          Welcome to My Portfolio
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto text-balance px-2">
          I create beautiful and functional web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-foreground rounded-lg hover:bg-foreground/10 transition-colors font-medium text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

