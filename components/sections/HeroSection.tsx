"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Scale, Trophy, Users } from "lucide-react"

interface HeroSectionProps {
  isVisible: boolean
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/city-background.jpg" alt="City background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      </div>

      {/* Our experts label */}
      <div
        className={`absolute top-4 left-6 z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="bg-gray-600/80 text-white px-3 py-1 text-sm font-medium">Our experts</div>
      </div>

      {/* Header */}
      <header
        className={`relative z-10 flex items-center justify-between px-6 py-4 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex space-x-1">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform duration-300">
              I
            </div>
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform duration-300">
              L
            </div>
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform duration-300">
              S
            </div>
          </div>
          <span className="ml-3 text-white text-lg font-medium">International Legal Services</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
          >
            CONTACT
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
          >
            SERVICES
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex items-center min-h-[calc(100vh-200px)] sm:min-h-[calc(100vh-250px)] md:min-h-[calc(100vh-300px)] px-4 sm:px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left Side - Lawyer Portrait & Services */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-white/20 w-full max-w-md lg:max-w-lg">
              <div className="relative w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 mx-auto mb-4 md:mb-6">
                <Image
                  src="/images/lawyer-portrait.png"
                  alt="Professional Immigration Lawyer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 rounded-lg"
                  priority
                />
              </div>
              <div className="text-center text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4">Immigration Law Experts</h3>
                <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 px-2">
                  Over 15 years helping to obtain Spanish residency and nationality
                </p>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-4 md:mt-6">
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Scale className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm">Residency & Work Permits</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm">Spanish Nationality</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm">Family Reunification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`text-white space-y-4 md:space-y-6 pt-8 md:pt-16 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your residency or nationality in the hands of a law firm. No appointments. No travel. 100% online.
            </h1>
            <div className="text-sm sm:text-base md:text-lg space-y-3 md:space-y-4 mt-4 md:mt-6">
              <p className="font-semibold">Professionalism, speed and legal support from the very first moment.</p>
              <p>We process your case wherever you are, with qualified lawyers and personalized attention.</p>
            </div>

            <div className="pt-6 md:pt-8 pb-8 md:pb-16">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-4 sm:px-6 py-3 md:py-4 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer w-full sm:w-auto"
                size="lg"
              >
                Any questions? Contact us
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
} 