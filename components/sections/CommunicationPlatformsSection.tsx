import { MessageCircle, Send, Mail, Phone, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"

const communicationPlatforms = [
  {
    id: 2,
    name: "Telegram",
    description: "Connect with our legal experts through Telegram for quick consultations and updates",
    icon: Send,
    color: "bg-sky-500",
    link: "https://t.me/+34922123456"
  },
  {
    id: 3,
    name: "Email",
    description: "Send us your detailed legal queries via email and get comprehensive responses",
    icon: Mail,
    color: "bg-red-500",
    link: "#email-demo"
  },
  {
    id: 4,
    name: "WhatsApp",
    description: "Chat with our legal team on WhatsApp for immediate assistance and consultations",
    icon: Phone,
    color: "bg-green-500",
    link: "https://wa.me/34922123456"
  },
  {
    id: 5,
    name: "Instagram",
    description: "Follow us on Instagram for legal tips, updates, and direct messaging support",
    icon: Instagram,
    color: "bg-pink-500",
    link: "#instagram-demo"
  }
]

export default function CommunicationPlatformsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640
      const cardWidth = isMobile ? 288 + 12 : 320 + 24 // responsive card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640
      const cardWidth = isMobile ? 288 + 12 : 320 + 24 // responsive card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      })
    }
  }

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-scroll animation to show it's scrollable - Responsive
  useEffect(() => {
    const autoScroll = () => {
      if (scrollContainerRef.current && isAutoScrolling && isVisible) {
        const container = scrollContainerRef.current
        const isMobile = window.innerWidth < 640
        const scrollAmount = isMobile ? 150 : 200
        
        // More engaging auto-scroll demonstration
        setTimeout(() => {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }, 1500)
        
        setTimeout(() => {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }, 2500)
        
        // Scroll back to start with a flourish
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'smooth' })
          setIsAutoScrolling(false)
        }, 4000)
      }
    }

    if (isVisible) {
      autoScroll()
    }
  }, [isAutoScrolling, isVisible])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollability)
      checkScrollability() // Initial check
      
      return () => container.removeEventListener('scroll', checkScrollability)
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden scroll-mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="floating-element absolute bottom-20 right-10 w-24 h-24 bg-purple-100/20 rounded-full blur-xl animate-float-reverse"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-16 h-16 bg-green-100/20 rounded-full blur-lg animate-float-fast"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 md:mb-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 bg-clip-text text-transparent mb-4 md:mb-6 animate-gradient">
            Communicate with Our Platforms
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Choose your preferred way to connect with our legal experts
          </p>
          <div className="mt-3 md:mt-4 flex justify-center">
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className={`relative w-full mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
          {/* Left Scroll Button - Hidden on mobile */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-1 sm:left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md shadow-xl hover:bg-white transition-all duration-500 group hidden sm:flex w-8 h-8 md:w-10 md:h-10 ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed scale-90' : 'hover:shadow-2xl hover:scale-110'
            }`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 group-hover:animate-bounce-x transition-transform duration-300" />
          </Button>

          {/* Right Scroll Button - Hidden on mobile */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute right-1 sm:right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md shadow-xl hover:bg-white transition-all duration-500 group hidden sm:flex w-8 h-8 md:w-10 md:h-10 ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed scale-90' : 'hover:shadow-2xl hover:scale-110 animate-pulse-gentle'
            }`}
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 group-hover:animate-bounce-x transition-transform duration-300" />
          </Button>

          {/* Horizontal Scrollable Container - Responsive */}
          <div className="overflow-hidden px-4 sm:px-8 md:px-12">
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {communicationPlatforms.map((platform, index) => {
                const IconComponent = platform.icon
                return (
                  <Card 
                    key={platform.id} 
                    className={`flex-shrink-0 w-72 sm:w-80 md:w-80 lg:w-80 snap-start hover:shadow-2xl transition-all duration-700 cursor-pointer group border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-1 md:hover:-translate-y-2 hover:rotate-0 md:hover:rotate-1 ${
                      isVisible ? `animate-slide-in-up` : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${index * 200}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <CardHeader className="text-center relative overflow-hidden p-4 md:p-6">
                      {/* Decorative background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 md:group-hover:scale-125 group-hover:rotate-6 md:group-hover:rotate-12 transition-all duration-500 relative z-10 shadow-lg animate-float-gentle`}>
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:animate-bounce" />
                        {/* Pulsing ring effect */}
                        <div className={`absolute inset-0 ${platform.color} rounded-full animate-ping opacity-20 group-hover:opacity-40`}></div>
                      </div>
                      
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                        {platform.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative p-4 md:p-6">
                      <CardDescription className="text-sm sm:text-base text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4 md:mb-6">
                        {platform.description}
                      </CardDescription>
                      <div className="text-center">
                        <a 
                          href={platform.link}
                          className={`inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base ${platform.color} text-white rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium group/btn relative overflow-hidden`}
                        >
                          {/* Button shine effect */}
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                          <span className="relative z-10">Connect Now</span>
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Enhanced Gradient Fade Effects - Responsive */}
          <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-15"></div>
          <div className="absolute right-4 sm:right-8 md:right-12 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-15"></div>
          
          {/* Interactive Scroll Indicators - Responsive */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {Array.from({ length: Math.ceil(communicationPlatforms.length / 3) }).map((_, index) => (
              <div 
                key={index} 
                className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer animate-pulse-slow"
                style={{ animationDelay: `${index * 300}ms` }}
              />
            ))}
          </div>
        </div>
        
        <div className={`text-center mt-8 md:mt-12 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          {/* Mobile Layout - Stacked */}
          <div className="sm:hidden space-y-3">
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>Immediate Response</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>Professional Legal Assistance</span>
            </div>
          </div>
          
          {/* Desktop Layout - Horizontal */}
          <div className="hidden sm:inline-flex items-center space-x-4 md:space-x-8 text-sm font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 rounded-full shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">Available 24/7</span>
            </div>
            <div className="w-1 h-3 md:h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-xs sm:text-sm">Immediate Response</span>
            </div>
            <div className="w-1 h-3 md:h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-xs sm:text-sm">Professional Legal Assistance</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Floating background elements */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-10deg); }
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        /* Card entrance animations */
        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Icon floating animation */
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
        
        /* Button hover animations */
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .animate-bounce-x {
          animation: bounce-x 0.6s ease-in-out;
        }
        
        /* Gentle pulse for buttons */
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        
        /* Slow pulse for indicators */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Gradient text animation */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease-in-out infinite;
        }
        
        /* Enhanced transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  )
} 