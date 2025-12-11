'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-md w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Something went wrong!</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              A global error occurred. Please try again.
            </p>
            <button
              onClick={reset}
              className="px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm sm:text-base"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

