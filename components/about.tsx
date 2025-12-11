export function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center px-2">
          About Me
        </h2>
        <div className="prose prose-lg mx-auto text-foreground/80">
          <p className="text-base sm:text-lg leading-relaxed mb-4 px-2">
            I am a passionate developer with expertise in modern web
            technologies. I love creating user-friendly applications that solve
            real-world problems.
          </p>
          <p className="text-base sm:text-lg leading-relaxed px-2">
            My skills include frontend and backend development, with a focus on
            creating performant, accessible, and maintainable code.
          </p>
        </div>
      </div>
    </section>
  )
}

