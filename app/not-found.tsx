import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">404 - Page Not Found</h2>
        <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 sm:py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium text-sm sm:text-base"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}

