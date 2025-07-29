import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Stethoscope, Smile, Building2, FlaskConical, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const sectors = [
    {
      icon: Stethoscope,
      name: 'Médecins & Cliniques',
      path: '/clients/medecins-cliniques'
    },
    {
      icon: Smile,
      name: 'Dentistes',
      path: '/clients/dentistes'
    },
    {
      icon: Sparkles,
      name: 'Esthétique',
      path: '/clients/esthetique'
    },
    {
      icon: FlaskConical,
      name: 'Laboratoires',
      path: '/clients/laboratoires'
    },
    {
      icon: HeartHandshake,
      name: 'Technologies Santé',
      path: '/clients/tech-sante'
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary to-primary-dark">
        <div className="absolute inset-0 bg-black/20">
        <img 
          src="img/spark-ba.jpg"
          alt="Medical workspace"
          className="w-full h-full object-cover opacity-30"
        />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-primary-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-primary-300/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-primary-400 mr-3" />
            <span className="text-primary-400 font-medium text-lg">Powered by Marnova</span>
          </div>
          
          <h1 className="mb-6 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-primary-300 to-primary-500 font-bold text-6.5xl md:text-6xl uppercase">E-DENTIFY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Connecter la science à la vie
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Pour ceux qui prennent soin, avec soin.
          </p>

          
          

          {/* Client Sectors */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <Link 
                key={index}
                to={sector.path}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary-400/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                  <sector.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                  {sector.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero