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
          <div className="text-white text-lg font-medium">your logo here</div>
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
      <main className="relative z-10 flex items-center min-h-[calc(100vh-300px)] px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Spanish Flag & Immigration */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <Image
                src="/SPAIN_FLAG.jpg"
                alt="Spanish Flag - Nacionalidad Española"
                width={500}
                height={333}
                className="object-contain hover:scale-105 transition-transform duration-700 rounded-lg"
                priority
              />
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Expertos en Derecho de Extranjería</h3>
                <p className="text-lg mb-4">
                  Más de 15 años ayudando a conseguir la residencia y nacionalidad española
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm">Residencia y permisos de trabajo</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm">Nacionalidad española</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm">Arraigo y reagrupación familiar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`text-white space-y-6 pt-16 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Tu residencia o nacionalidad en manos de un despacho de abogados. Sin citas. Sin desplazamientos. 100 %
              online.
            </h1>
            <div className="text-lg space-y-4 mt-6">
              <p className="font-semibold">Profesionalidad, rapidez y acompañamiento legal desde el primer momento.</p>
              <p>Tramitamos tu expediente estés donde estés, con abogados colegiados y atención personalizada.</p>
            </div>

            <div className="pt-8 pb-16">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-4 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer"
                size="lg"
              >
                ¿Alguna pregunta? Contáctanos
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
} 