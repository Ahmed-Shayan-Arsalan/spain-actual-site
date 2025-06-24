interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
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
              International Legal Services - Your trusted legal partner in Tenerife, providing expert legal solutions for
              over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Legal Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Immigration Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Spanish Nationality
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Timeshare Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                >
                  Real Estate Law
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Calle Principal 123</p>
              <p>38001 Santa Cruz de Tenerife</p>
              <p>Phone: +34 922 123 456</p>
              <p>Email: info@internationallegalservices.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 International Legal Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 