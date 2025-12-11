'use client'

import { Navigation } from '@/components/navigation'
import { TestimonialModal } from '@/components/testimonial-modal'
import Image from 'next/image'
import { useState } from 'react'

interface WorkExperience {
  position: string
  company: string
  period: string
  duration: string
  testimonial?: {
    text: string
    author?: string
    authorTitle?: string
  }
}

interface Education {
  degree: string
  institution: string
  period: string
  duration?: string
}

interface FiduciaryDuty {
  position: string
  organization: string
  period: string
  duration: string
}

const workExperiences: WorkExperience[] = [
  {
    position: 'Project Coordinator',
    company: 'Plugit Finland',
    period: 'Jun 2025 - Dec 2025',
    duration: '7 mos',
    // testimonial: {
    //   text: 'Add testimonial text here...',
    //   author: 'Name',
    //   authorTitle: 'Title',
    // },
  },
  {
    position: 'BIM Specialist',
    company: 'Tampereen Infra Oy',
    period: 'May 2024 - Mar 2025',
    duration: '11 mos',
    // testimonial: {
    //   text: 'Add testimonial text here...',
    //   author: 'Name',
    //   authorTitle: 'Title',
    // },
  },
  {
    position: 'Design Assistant',
    company: 'A-Insinöörit',
    period: 'Jun 2020 - Aug 2022',
    duration: '2 yrs 3 mos',
  },
  {
    position: 'Modeler',
    company: 'Peikko Finland Oy',
    period: 'Jul 2018 - Jun 2020',
    duration: '2 yrs',
  },
  {
    position: 'Production Worker',
    company: 'Herkkumaa Oy',
    period: 'Jul 2016 - Jul 2017',
    duration: '1 yr 1 mo',
  },
  {
    position: 'Production Worker',
    company: 'Herkkumaa Oy',
    period: 'Jul 2015 - Jul 2016',
    duration: '1 yr',
  },
  {
    position: 'Warehouse Worker',
    company: 'Transval Support Oy',
    period: 'Oct 2014',
    duration: '10 days',
  },
  {
    position: 'Competition Guide (CAD-Design)',
    company: 'Taitaja2014 / Koulutuskeskus Salpaus',
    period: 'Apr 2014',
    duration: '3 days',
  },
  {
    position: 'Construction Assistant',
    company: 'Lemminkäinen Talo Oy',
    period: 'Jun - Aug 2013',
    duration: '2 mos',
  },
  {
    position: 'Construction Assistant',
    company: 'Lemminkäinen Talo Oy',
    period: 'Aug 2012 - Jul 2013',
    duration: '11 mos',
  },
  {
    position: 'Summer Trainee',
    company: 'Lemminkäinen Talo Oy',
    period: 'Jun - Jul 2011',
    duration: '1 mo',
  },
]

const education: Education[] = [
  {
    degree: 'Bachelor of Engineering - BE, Electrical and Automation Engineering',
    institution: 'Häme University of Applied Sciences, HAMK',
    period: 'Aug 2022 - Nov 2025',
  },
  {
    degree: 'Design Assistant, Technical Draftsperson (Suunnitteluassistentti, tekninen piirtäjä)',
    institution: 'Koulutuskeskus Salpaus',
    period: '2012 - 2015',
  },
]

const fiduciaryDuties: FiduciaryDuty[] = [
  {
    position: 'Board Member',
    organization: 'Valkeakosken Insinööriopiskelijat VARO ry',
    period: 'Jan 2024 - Dec 2024',
    duration: '1 yr',
  },
  {
    position: 'Vice Chairman of the Board',
    organization: 'Valkeakosken Insinööriopiskelijat VARO ry',
    period: 'Jan 2023 - Dec 2023',
    duration: '1 yr',
  },
]

// Map company names to logo filenames
const getCompanyLogo = (company: string): string | null => {
  const logoMap: Record<string, string> = {
    'Plugit Finland': '/logos/Plugit.jpg',
    'Tampereen Infra Oy': '/logos/Tampereen-Infra.png',
    'A-Insinöörit': '/logos/ainsinoorit.png',
    'Peikko Finland Oy': '/logos/peikko.jpg',
    'Herkkumaa Oy': '/logos/Herkkumaa.png',
    'Transval Support Oy': '/logos/Transval.png',
    'Lemminkäinen Talo Oy': '/logos/Lemminkainen.png',
    'Taitaja2014 / Koulutuskeskus Salpaus': '/logos/Taitaja2014.jpg',
  }
  return logoMap[company] || null
}

// Map education institution names to logo filenames
const getEducationLogo = (institution: string): string | null => {
  const logoMap: Record<string, string> = {
    'Häme University of Applied Sciences, HAMK': '/logos/HAMK.png',
    'Koulutuskeskus Salpaus': '/logos/Koulutuskeskus_Salpaus_logo.jpg',
  }
  return logoMap[institution] || null
}

// Map fiduciary duty organization names to logo filenames
const getFiduciaryLogo = (organization: string): string | null => {
  const logoMap: Record<string, string> = {
    'Valkeakosken Insinööriopiskelijat VARO ry': '/logos/Todistus.png',
  }
  return logoMap[organization] || null
}

export default function BioPage() {
  const [openTestimonial, setOpenTestimonial] = useState<number | null>(null)
  const [showAllExperiences, setShowAllExperiences] = useState(false)

  const handleOpenTestimonial = (index: number) => {
    setOpenTestimonial(index)
  }

  const handleCloseTestimonial = () => {
    setOpenTestimonial(null)
  }

  const handleToggleExperiences = () => {
    setShowAllExperiences(!showAllExperiences)
  }

  const currentTestimonial =
    openTestimonial !== null ? workExperiences[openTestimonial] : null

  const displayedExperiences = showAllExperiences
    ? workExperiences
    : workExperiences.slice(0, 4)

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-square w-full max-w-xs mx-auto md:mx-0 bg-foreground/10 rounded-lg overflow-hidden mb-6 sm:mb-8">
                <Image
                  src="/bio-image.jpg"
                  alt="CV image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              
              {/* Contact Section */}
              <div className="max-w-xs mx-auto md:mx-0">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/70"
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
                      className="text-sm sm:text-base text-foreground/80 hover:text-foreground transition-colors"
                    >
                      +358 50 917 9857
                    </a>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/70"
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
                      href="mailto:juuso.s.tuomaala@gmail.com"
                      className="text-sm sm:text-base text-foreground/80 hover:text-foreground transition-colors break-all"
                    >
                      juuso.s.tuomaala@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/70"
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
                      className="text-sm sm:text-base text-foreground/80 hover:text-foreground transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-2/3 space-y-4 sm:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                  Juuso Tuomaala
                </h1>
                <p className="text-base sm:text-lg text-foreground/70 italic">
                  B. Eng. (Electrical and Automation Engineering)
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">About</h2>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/80 mb-3 sm:mb-4">
                  I am an Electrical and Automation Engineering graduate from 2025. I possess strong problem-solving and communication skills, as well as a desire to develop through continuous learning. In my free time, I build various small electronics projects.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Work Experience</h2>
                <div className="space-y-6 sm:space-y-8">
                  {displayedExperiences.map((experience, index) => {
                    const logoPath = getCompanyLogo(experience.company)
                    const originalIndex = workExperiences.findIndex(
                      (exp) => exp.company === experience.company && exp.position === experience.position && exp.period === experience.period
                    )
                    return (
                      <div key={`${experience.company}-${experience.position}-${experience.period}-${index}`} className="flex gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-foreground/10 rounded-lg flex items-center justify-center overflow-hidden">
                          {logoPath ? (
                            <Image
                              src={logoPath}
                              alt={experience.company}
                              width={64}
                              height={64}
                              className="object-contain w-full h-full p-2"
                            />
                          ) : (
                            <div className="text-foreground/40 text-xs sm:text-sm font-medium text-center px-1">Logo</div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold mb-1">
                            {experience.position}
                          </h3>
                          <p className="text-sm sm:text-base text-foreground/70 mb-1">
                            {experience.company}
                          </p>
                          <p className="text-xs sm:text-sm text-foreground/60 mb-2">
                            {experience.period} · {experience.duration}
                          </p>
                          {experience.testimonial && (
                            <button
                              onClick={() => handleOpenTestimonial(originalIndex)}
                              className="text-xs sm:text-sm text-foreground/70 hover:text-foreground underline transition-colors"
                            >
                              View Testimonial →
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {workExperiences.length > 4 && (
                <div className="mt-6 sm:mt-8 text-center">
                  <button
                    type="button"
                    onClick={handleToggleExperiences}
                    className="text-sm sm:text-base text-foreground/70 hover:text-foreground underline transition-colors cursor-pointer"
                  >
                    {showAllExperiences ? 'Show Less' : `Show More (${workExperiences.length - 4} more)`}
                  </button>
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Education</h2>
                <div className="space-y-6 sm:space-y-8">
                  {education.map((edu, index) => {
                    const logoPath = getEducationLogo(edu.institution)
                    return (
                      <div key={index} className="flex gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-foreground/10 rounded-lg flex items-center justify-center overflow-hidden">
                          {logoPath ? (
                            <Image
                              src={logoPath}
                              alt={edu.institution}
                              width={64}
                              height={64}
                              className="object-contain w-full h-full p-2"
                            />
                          ) : (
                            <div className="text-foreground/40 text-xs sm:text-sm font-medium text-center px-1">Logo</div>
                          )}
                        </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-sm sm:text-base text-foreground/70 mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-xs sm:text-sm text-foreground/60">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Fiduciary Duties</h2>
                <div className="space-y-6 sm:space-y-8">
                  {fiduciaryDuties.map((duty, index) => {
                    const logoPath = getFiduciaryLogo(duty.organization)
                    return (
                      <div key={index} className="flex gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-foreground/10 rounded-lg flex items-center justify-center overflow-hidden">
                          {logoPath ? (
                            <Image
                              src={logoPath}
                              alt={duty.organization}
                              width={64}
                              height={64}
                              className="object-contain w-full h-full p-2"
                            />
                          ) : (
                            <div className="text-foreground/40 text-xs sm:text-sm font-medium text-center px-1">Logo</div>
                          )}
                        </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold mb-1">
                          {duty.position}
                        </h3>
                        <p className="text-sm sm:text-base text-foreground/70 mb-1">
                          {duty.organization}
                        </p>
                        <p className="text-xs sm:text-sm text-foreground/60">
                          {duty.period} · {duty.duration}
                        </p>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {currentTestimonial?.testimonial && (
        <TestimonialModal
          isOpen={openTestimonial !== null}
          onClose={handleCloseTestimonial}
          company={currentTestimonial.company}
          position={currentTestimonial.position}
          testimonial={currentTestimonial.testimonial.text}
          author={currentTestimonial.testimonial.author}
          authorTitle={currentTestimonial.testimonial.authorTitle}
        />
      )}
    </main>
  )
}
