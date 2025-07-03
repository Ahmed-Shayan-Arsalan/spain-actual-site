"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Scale, Trophy, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface HeroSectionProps {
  isVisible: boolean
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
  const { t } = useLanguage()
  return (
    <section id="home" className="min-h-screen relative overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full">
        <Image src="/images/city-background.jpg" alt="City background" fill className="object-cover w-full h-full" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 w-full" />
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
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
          >
            {t('nav.contact')}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:scale-105 transform cursor-pointer"
          >
            {t('nav.services')}
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex items-center min-h-[calc(100vh-200px)] sm:min-h-[calc(100vh-250px)] md:min-h-[calc(100vh-300px)] px-4 sm:px-6 w-full">
        <div className="container mx-auto w-full max-w-7xl">
          {/* Centered Services Card */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 border border-white/20 max-w-lg mx-auto">
                <div className="text-center text-white">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t('hero.servicesCard.title')}</h3>
                  <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-2">
                    {t('hero.servicesCard.subtitle')}
                  </p>
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 hover:scale-110 transition-transform duration-300">
                        <Scale className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <p className="text-sm sm:text-base font-medium">{t('hero.servicesCard.residency')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <p className="text-sm sm:text-base font-medium">{t('hero.servicesCard.nationality')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 hover:scale-110 transition-transform duration-300">
                        <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <p className="text-sm sm:text-base font-medium">{t('hero.servicesCard.family')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`text-white text-center max-w-4xl mx-auto space-y-6 md:space-y-8 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <div className="text-base sm:text-lg md:text-xl space-y-4 md:space-y-6">
              <p className="font-semibold">{t('hero.subtitle')}</p>
              <p>{t('hero.description')}</p>
            </div>

            <div className="pt-6 md:pt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-4 md:py-5 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer"
                size="lg"
              >
                {t('hero.contactButton')}
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
} 