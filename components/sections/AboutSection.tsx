"use client"

import { CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function AboutSection() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Centered Chatbot Button - Enhanced for Maximum Attention */}
        <div className="flex justify-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            {/* Outer pulsing rings for extra attention */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-30" style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-ping opacity-20" style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s' }}></div>
            
            {/* Main Button */}
            <a 
              href="https://www.extranjer-ia.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-500 transform group relative overflow-hidden shadow-lg animate-float-gentle"
              style={{ 
                background: 'linear-gradient(45deg, #2563eb, #7c3aed, #1d4ed8)',
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 3s ease-in-out infinite, float-gentle 4s ease-in-out infinite'
              }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              
              {/* Multiple shine effects */}
              <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
              <div className="absolute inset-0 bg-white/20 transform skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1200 rounded-full"></div>
              
              {/* Icon with enhanced animations */}
              <div className="relative z-10 bg-white/20 rounded-full p-2 mr-4 group-hover:bg-white/30 transition-all duration-300">
                <MessageCircle className="w-8 h-8 group-hover:animate-bounce group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              {/* Text with gradient effect */}
              <span className="relative z-10 bg-gradient-to-r from-white to-blue-100 bg-clip-text group-hover:from-white group-hover:to-yellow-100 transition-all duration-300">
                {t('about.chatButton')}
              </span>
              
              {/* Animated arrow */}
              <div className="ml-4 group-hover:translate-x-2 transition-transform duration-300 relative z-10 text-2xl">✨</div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
            </a>
            
            {/* Floating particles effect */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-60" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-60" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite 1s' }}></div>
            <div className="absolute top-0 -right-4 w-2 h-2 bg-green-300 rounded-full animate-ping opacity-60" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite 2s' }}></div>
          </div>
        </div>

        {/* Enhanced CSS Animations */}
        <style jsx>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float-gentle {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-8px) scale(1.02); }
          }
          
          .animate-float-gentle {
            animation: float-gentle 4s ease-in-out infinite;
          }
        `}</style>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('about.whyChooseUs')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t('about.multilingualService.title')}</h4>
                  <p className="text-gray-600">{t('about.multilingualService.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t('about.trackRecord.title')}</h4>
                  <p className="text-gray-600">{t('about.trackRecord.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t('about.personalAttention.title')}</h4>
                  <p className="text-gray-600">{t('about.personalAttention.description')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('about.ourMission')}</h3>
            <p className="text-gray-600 mb-4">
              {t('about.missionDescription1')}
            </p>
            <p className="text-gray-600">
              {t('about.missionDescription2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 