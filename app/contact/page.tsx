import { Navigation } from '@/components/navigation'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center px-2">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mb-8 sm:mb-10 text-center px-2">
            Ways to get in touch with me
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-foreground/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <a
                href="tel:+358509179857"
                className="text-base sm:text-lg text-foreground/80 hover:text-foreground transition-colors"
              >
                +358 50 917 9857
              </a>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-foreground/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a
                href="mailto:juuso@tuomaa.la"
                className="text-base sm:text-lg text-foreground/80 hover:text-foreground transition-colors break-all"
              >
                juuso@tuomaa.la
              </a>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-foreground/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <a
                href="https://www.linkedin.com/in/juuso-tuomaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-foreground/80 hover:text-foreground transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-foreground/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </div>
              <a
                href="https://t.me/seonrikkinyt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-foreground/80 hover:text-foreground transition-colors"
              >
                @seonrikkinyt
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

