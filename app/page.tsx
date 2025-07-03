"use client"

import { useEffect, useState } from "react"
import { useScrollToSection } from "@/hooks/useScrollToSection"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import CommunicationPlatformsSection from "@/components/sections/CommunicationPlatformsSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollToSection } = useScrollToSection()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
      <AboutSection />
      <CommunicationPlatformsSection />
      <TestimonialsSection />
      <ContactSection scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
