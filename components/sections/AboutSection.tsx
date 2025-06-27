import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a team of qualified lawyers, specialized in Immigration and Nationality Law, who have developed an 
            innovative system so you can manage your legal procedures in Spain 100% online, without leaving home. 
            Our digital legal assistant allows you to have a free consultation, receive legal guidance tailored to your 
            case, sign your professional contract securely and send all documentation from your mobile or email. 
            Each case is reviewed and processed by an experienced lawyer, guaranteeing real advice, personalized follow-up 
            and complete legal security. In addition, we speak several languages, so you can communicate with total clarity 
            throughout the entire process. We combine technology, legal experience and human closeness to offer you a 
            simpler, faster and safer way to resolve your immigration procedures.
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
  )
} 