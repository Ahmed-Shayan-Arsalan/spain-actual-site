"use client"

import React from 'react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <div className="fixed top-20 left-2 sm:left-4 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="bg-white/90 backdrop-blur-sm hover:bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3"
      >
        <Languages className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="font-semibold text-xs sm:text-sm">
          {language === 'en' ? 'ES' : 'EN'}
        </span>
      </Button>
    </div>
  )
} 