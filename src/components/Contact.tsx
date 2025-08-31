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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:e-dentify@marnovagroup.ma" className="text-lg hover:text-primary-300 transition-colors">
                e-dentify@marnovagroup.ma
              </a>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <a href="tel:+212669128430" className="text-lg hover:text-primary-300 transition-colors">
                +212 669-128430
              </a>
            </div>
          </div>

          <div className="text-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg mb-4">Suivez‑nous :</h3>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://www.instagram.com/e_dentify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/e-dentify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-6">Notre Localisation</h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106358.5!2d-7.635498!3d33.5917433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzMwLjMiTiA3wrAzOCcwNy44Ilc!5e0!3m2!1sfr!2sma!4v1693234567890!5m2!1sfr!2sma&q=marnova+holding"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marnova Holding Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="mailto:e-dentify@marnovagroup.ma"
              className="group inline-flex items-center bg-white text-[#112540] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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