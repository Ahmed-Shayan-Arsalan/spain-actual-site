"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function ContactSection({ scrollToSection }: ContactSectionProps) {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="py-20 bg-blue-600 scroll-mt-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-blue-100">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-white opacity-0 animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-8">{t('contact.getInTouch')}</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.officeAddress')}</h4>
                  <p className="text-blue-100">
                    Avenida de Los Pueblos Nº 31, Edificio Palo Blanco
                    <br />
                    Planta 1ª, Local 5, CP. 38660
                    <br />
                    San Eugenio, Adeje (ESPAÑA)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.phone')}</h4>
                  <p className="text-blue-100">+34678860242</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.email')}</h4>
                  <p className="text-blue-100">gospodin.abogado@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <Clock className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.officeHours')}</h4>
                  <p className="text-blue-100 whitespace-pre-line">{t('contact.hoursText')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.form.title')}</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.firstName')}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.lastName')}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.service')}</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                  <option value="">{t('contact.form.selectService')}</option>
                  <option value="immigration">{t('contact.form.services.immigration')}</option>
                  <option value="nationality">{t('contact.form.services.nationality')}</option>
                  <option value="other">{t('contact.form.services.other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                ></textarea>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 hover:scale-105 transition-all duration-300 transform">
                {t('contact.form.sendMessage')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 