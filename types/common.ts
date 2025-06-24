export interface ScrollToSectionProps {
  scrollToSection: (sectionId: string) => void
}

export interface AnimationProps {
  isVisible: boolean
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: string
} 