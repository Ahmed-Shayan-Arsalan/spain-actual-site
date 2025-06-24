import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function ContactSection({ scrollToSection }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-blue-600 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-xl text-blue-100">Ready to get started? Get in touch with our legal experts today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-white opacity-0 animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Office Address</h4>
                  <p className="text-blue-100">
                    Calle Principal 123
                    <br />
                    38001 Santa Cruz de Tenerife
                    <br />
                    Canary Islands, Spain
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-blue-100">+34 922 123 456</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-blue-100">info@internationallegalservices.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                <Clock className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Office Hours</h4>
                  <p className="text-blue-100">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Legal Service Needed</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                  <option value="">Select a service</option>
                  <option value="immigration">Immigration Law</option>
                  <option value="nationality">Spanish Nationality</option>
                  <option value="timeshare">Timeshare Law</option>
                  <option value="real-estate">Real Estate Law</option>
                  <option value="family">Family Law</option>
                  <option value="business">Business Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Please describe your legal matter..."
                  required
                ></textarea>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 hover:scale-105 transition-all duration-300 transform">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 