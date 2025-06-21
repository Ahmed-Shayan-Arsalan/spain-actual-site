"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Trophy, Users, Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/city-background.jpg" alt="City background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        </div>

        {/* Our experts label */}
        <div
          className={`absolute top-4 left-6 z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <div className="bg-gray-600/80 text-white px-3 py-1 text-sm font-medium">Our experts</div>
        </div>

        {/* Header */}
        <header
          className={`relative z-10 flex items-center justify-between px-6 py-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl transform hover:scale-110 transition-transform duration-300">
                I
              </div>
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl transform hover:scale-110 transition-transform duration-300">
                L
              </div>
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl transform hover:scale-110 transition-transform duration-300">
                S
              </div>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg leading-tight">INTERNATIONAL</div>
              <div className="font-bold text-lg leading-tight">LEGAL</div>
              <div className="font-bold text-lg leading-tight">SERVICES</div>
            </div>
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
            {/* Left Side - Lawyer Image */}
            <div
              className={`flex justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="relative">
                <Image
                  src="/images/lawyer-portrait.png"
                  alt="Professional Lawyer"
                  width={600}
                  height={800}
                  className="object-contain hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              className={`text-white space-y-6 pt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-pulse">
                International Legal
                <br />
                Services
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light">Lawyers in Tenerife</h2>
              <h3 className="text-xl lg:text-2xl font-light">Your Law Firm in Tenerife</h3>

              <div className="pt-8 pb-16">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-4 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer"
                  size="lg"
                >
                  Any questions? Contact us
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Feature Cards */}
        <div className="relative z-10 absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-8">
            <div
              className={`grid md:grid-cols-3 gap-0 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Card 1 */}
              <div
                onClick={() => scrollToSection("services")}
                className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  Experts in Immigration and Spanish
                  <br />
                  Nationality.
                </h3>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => scrollToSection("services")}
                className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">Timeshare Specialists</h3>
              </div>

              {/* Card 3 */}
              <div
                onClick={() => scrollToSection("services")}
                className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  We offer a wide range of legal
                  <br />
                  services
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About International Legal Services</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With over 15 years of experience in international law, we provide comprehensive legal services to
              individuals and businesses in Tenerife and throughout Spain. Our expertise spans immigration law,
              nationality procedures, timeshare disputes, and a wide range of legal matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Multilingual Service</h4>
                    <p className="text-gray-600">We speak English, Spanish, and German fluently</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Proven Track Record</h4>
                    <p className="text-gray-600">Over 1000 successful cases handled</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Personal Attention</h4>
                    <p className="text-gray-600">Direct access to experienced lawyers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide exceptional legal services with integrity, professionalism, and dedication. We understand the
                complexities of international law and are committed to achieving the best possible outcomes for our
                clients.
              </p>
              <p className="text-gray-600">
                Whether you're seeking Spanish nationality, dealing with immigration issues, or need assistance with
                timeshare matters, we're here to guide you through every step of the legal process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive legal solutions tailored to meet your specific needs. Our experienced team handles
              a wide range of legal matters with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Immigration Law</h3>
                <p className="text-gray-600 mb-4">
                  Complete assistance with visa applications, residence permits, and immigration procedures.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Visa applications</li>
                  <li>• Residence permits</li>
                  <li>• Work permits</li>
                  <li>• Family reunification</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Spanish Nationality</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance through the Spanish nationality acquisition process.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Nationality by residence</li>
                  <li>• Nationality by origin</li>
                  <li>• Document preparation</li>
                  <li>• Application follow-up</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Timeshare Law</h3>
                <p className="text-gray-600 mb-4">
                  Specialized representation in timeshare disputes and contract cancellations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contract cancellation</li>
                  <li>• Compensation claims</li>
                  <li>• Legal disputes</li>
                  <li>• Consumer protection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Real Estate Law</h3>
                <p className="text-gray-600 mb-4">
                  Complete legal support for property transactions and real estate matters.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Property purchases</li>
                  <li>• Contract review</li>
                  <li>• Title transfers</li>
                  <li>• Property disputes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Family Law</h3>
                <p className="text-gray-600 mb-4">
                  Sensitive handling of family legal matters with compassion and expertise.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Divorce proceedings</li>
                  <li>• Child custody</li>
                  <li>• Adoption procedures</li>
                  <li>• Prenuptial agreements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 6 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Business Law</h3>
                <p className="text-gray-600 mb-4">Comprehensive legal services for businesses and entrepreneurs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Company formation</li>
                  <li>• Contract drafting</li>
                  <li>• Commercial disputes</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service! They helped me obtain my Spanish nationality in record time. Professional,
                  efficient, and always available to answer questions."
                </p>
                <div className="font-semibold text-gray-800">Sarah Johnson</div>
                <div className="text-sm text-gray-500">British Citizen</div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Outstanding representation in my timeshare case. They recovered my full investment and handled
                  everything professionally. Highly recommended!"
                </p>
                <div className="font-semibold text-gray-800">Michael Schmidt</div>
                <div className="text-sm text-gray-500">German Resident</div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Very knowledgeable team. They guided us through the entire property purchase process and made
                  everything clear and straightforward."
                </p>
                <div className="font-semibold text-gray-800">Emma Thompson</div>
                <div className="text-sm text-gray-500">Property Buyer</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
                International Legal Services - Your trusted legal partner in Tenerife, providing expert legal solutions
                for over 15 years.
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
    </div>
  )
}
