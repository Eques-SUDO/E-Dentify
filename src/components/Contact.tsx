import React from 'react'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contactez E-DENTIFY
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Pour ceux qui prennent soin, avec soin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:E-DENTIFY@marnovagroup.ma" className="text-lg hover:text-primary-300 transition-colors">
                E-DENTIFY@marnovagroup.ma
              </a>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <div>
                <a href="tel:+212521137161" className="text-lg hover:text-primary-300 transition-colors block">
                  05 21 13 71 61
                </a>
                <a href="tel:+212665331087" className="text-lg hover:text-primary-300 transition-colors block">
                  06 65 33 10 87
                </a>
              </div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-lg">
                Groupe Marnova Holding<br />
                Rabat & Casablanca, Maroc
              </p>
            </div>
          </div>

          <div className="text-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg mb-4">Suivez‑nous :</h3>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://instagram.com/edentify_ma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/edentify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/company/edentify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="mailto:E-DENTIFY@marnovagroup.ma"
              className="group inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Connectons la science à votre croissance !
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact