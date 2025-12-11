export function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center px-2">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 text-center px-2">
          I am always open to discussing new projects and opportunities.
        </p>
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:border-foreground/50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:border-foreground/50"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:border-foreground/50 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

