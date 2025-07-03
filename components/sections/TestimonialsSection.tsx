"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function TestimonialsSection() {
  const { t } = useLanguage()
  
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      content: t('testimonials.client1.text'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.role'),
      content: t('testimonials.client2.text'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.role'),
      content: t('testimonials.client3.text'),
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform opacity-0 animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 