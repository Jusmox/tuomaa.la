'use client'

import { useEffect } from 'react'

interface TestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  company: string
  position: string
  testimonial: string
  author?: string
  authorTitle?: string
}

export function TestimonialModal({
  isOpen,
  onClose,
  company,
  position,
  testimonial,
  author,
  authorTitle,
}: TestimonialModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-foreground/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b border-foreground/10 px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">{company}</h3>
            <p className="text-sm text-foreground/70">{position}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-foreground/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 sm:px-6 py-6">
          <div className="mb-6">
            <svg
              className="w-8 h-8 text-foreground/30 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/80 whitespace-pre-line">
              {testimonial}
            </p>
          </div>
          {author && (
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-sm sm:text-base font-semibold">{author}</p>
              {authorTitle && (
                <p className="text-xs sm:text-sm text-foreground/60">{authorTitle}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


