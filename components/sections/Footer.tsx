"use client"

import { useLanguage } from "@/lib/language-context"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const { t } = useLanguage()
  return (
    <footer className="bg-gray-800 text-white py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="hover:translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-2 mb-4">
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
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  {t('footer.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  {t('footer.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  {t('footer.contact')}
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.legalServices')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  {t('footer.immigration')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  {t('footer.nationality')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  {t('footer.timeshare')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  {t('footer.realEstate')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{t('footer.address1')}</p>
              <p>{t('footer.address2')}</p>
              <p>{t('footer.address3')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 International Legal Services. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
} 