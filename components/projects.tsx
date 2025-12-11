import type { Project } from '@/types/project'

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A brief description of the project and its key features.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Another project showcasing different skills and technologies.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'A third project demonstrating versatility and expertise.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    link: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center px-2">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-foreground/10 rounded-lg p-4 sm:p-6 hover:border-foreground/30 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-3 sm:mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-foreground/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-sm sm:text-base text-foreground hover:opacity-80 transition-opacity font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

