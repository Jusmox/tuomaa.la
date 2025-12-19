export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription?: string
  technologies: string[]
  link?: string
  thumbnail?: string
  images?: string[]
  date?: string
  category?: string
}
