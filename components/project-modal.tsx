'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import type { Project } from '@/types/project'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
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

  if (!isOpen || !project) return null

  const thumbnailPath = project.thumbnail
    ? `/projects/${project.id}/${project.thumbnail}`
    : '/projects/placeholder.svg'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-foreground/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b border-foreground/10 px-4 sm:px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
            {project.date && (
              <p className="text-sm text-foreground/70 mt-1">{project.date}</p>
            )}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left Column: Image */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src={thumbnailPath}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>

            {/* Right Column: Description */}
            <div className="flex flex-col">
              <div>
                <h4 className="text-lg font-semibold mb-3">About</h4>
                <div className="text-sm sm:text-base leading-relaxed text-foreground/80 whitespace-pre-line">
                  {(() => {
                    const text = project.longDescription || project.shortDescription
                    // Convert URLs to clickable links
                    const urlRegex = /(https?:\/\/[^\s]+)/g
                    const parts = text.split(urlRegex)
                    return parts.map((part, index) => {
                      if (part.match(urlRegex)) {
                        return (
                          <a
                            key={index}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline decoration-foreground/30 hover:decoration-foreground/60 transition-colors break-all"
                          >
                            {part}
                          </a>
                        )
                      }
                      return <span key={index}>{part}</span>
                    })
                  })()}
                </div>
              </div>
            </div>
          </div>

          {/* Technologies - Full Width */}
          <div className="mb-6 pt-6 border-t border-foreground/20">
            <h4 className="text-lg font-semibold mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-foreground/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Images and Videos */}
          {project.images && project.images.length > 0 && (
            <div className="mb-6 pt-6 border-t border-foreground/20">
              <h4 className="text-lg font-semibold mb-3">Gallery</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((media, index) => {
                  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(media)
                  
                  if (isVideo) {
                    return (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <video
                          src={`/projects/${project.id}/images/${media}`}
                          controls
                          className="w-full h-auto"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )
                  }
                  
                  return (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <Image
                        src={`/projects/${project.id}/images/${media}`}
                        alt={`${project.title} - Image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        unoptimized
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* External Link */}
          {project.link && (
            <div className="pt-4 border-t border-foreground/10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm sm:text-base text-foreground hover:opacity-80 transition-opacity font-medium"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

