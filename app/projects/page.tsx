'use client'

import { Navigation } from '@/components/navigation'
import { ProjectModal } from '@/components/project-modal'
import { projects } from '@/data/projects'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import type { Project } from '@/types/project'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Sort projects by date (newest first)
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const dateA = a.date || '0000-00'
      const dateB = b.date || '0000-00'
      // YYYY-MM format sorts correctly as strings (newest first)
      return dateB.localeCompare(dateA)
    })
  }, [])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center px-2">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mb-8 sm:mb-10 text-center px-2 max-w-2xl mx-auto">
            Click on any project to view more details
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedProjects.map((project) => {
              const thumbnailPath = project.thumbnail
                ? `/projects/${project.id}/${project.thumbnail}`
                : '/projects/placeholder.svg'

              return (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="text-left border border-foreground/10 rounded-lg overflow-hidden hover:border-foreground/30 transition-all hover:shadow-lg group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video bg-foreground/5 overflow-hidden">
                    <Image
                      src={thumbnailPath}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    {project.category && (
                      <span className="text-xs sm:text-sm text-foreground/60 mb-2 block">
                        {project.category}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-foreground/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-foreground/10 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* View More */}
                    <div className="text-sm sm:text-base text-foreground/80 group-hover:text-foreground transition-colors font-medium flex items-center">
                      View Details
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </main>
  )
}


