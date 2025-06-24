import { Scale, Users } from "lucide-react"

export default function ChatbotSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Asistente Legal Digital</h2>
          <p className="text-xl text-gray-600">Consulta gratuita disponible 24/7</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Chatbot Header */}
            <div className="bg-blue-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Asistente Legal</h3>
                  <p className="text-blue-200 text-sm">Online ahora</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">Activo</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="bg-white p-6 h-96 overflow-y-auto">
              <div className="space-y-4">
                {/* Bot Message */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-gray-800">
                      ¡Hola! Soy tu asistente legal especializado en extranjería y nacionalidad española. ¿En qué puedo
                      ayudarte hoy?
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-blue-600 rounded-lg p-3 max-w-xs">
                    <p className="text-white">Necesito información sobre la nacionalidad española</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-gray-600" />
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-gray-800">
                      Perfecto. Puedo ayudarte con el proceso de nacionalidad española. Tenemos diferentes vías:
                    </p>
                    <ul className="mt-2 text-sm text-gray-700 space-y-1">
                      <li>• Por residencia (10 años o 2 años en casos especiales)</li>
                      <li>• Por origen (padres o abuelos españoles)</li>
                      <li>• Por matrimonio con español/a</li>
                    </ul>
                    <p className="mt-2 text-gray-800">¿Cuál es tu situación específica?</p>
                  </div>
                </div>

                {/* Quick Reply Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm transition-colors duration-300">
                    Por residencia
                  </button>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm transition-colors duration-300">
                    Por origen
                  </button>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-2 rounded-full text-sm transition-colors duration-300">
                    Por matrimonio
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="bg-gray-50 p-4 border-t">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Escribe tu consulta legal aquí..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Consulta gratuita • Respuesta inmediata • Abogados colegiados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 