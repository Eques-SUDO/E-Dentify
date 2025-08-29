import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Stethoscope, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const sectors = [
    {
      icon: Stethoscope,
      name: 'Médecins & Cliniques',
      path: '/clients/medecins-cliniques',
      description: 'Professionnels de santé'
    },
    {
      icon: Sparkles,
      name: 'Esthétique médicale',
      path: '/clients/esthetique-medicale',
      description: 'Centres de beauté'
    },
    {
      icon: Users,
      name: 'Acteurs',
      path: '/clients/acteurs',
      description: 'Partenaires business'
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#112540]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-white/80 mr-3" />
            <span className="text-white/90 font-semibold text-lg">Powered by Marnova</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              E-DENTIFY
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold">
            Connecter la science à la vie
          </p>
          
          <p className="text-xl text-white/70 mb-16 max-w-2xl mx-auto font-medium">
            Pour ceux qui prennent soin, avec soin.
          </p>

          {/* Client Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {sectors.map((sector, index) => (
              <Link 
                key={index}
                to={sector.path}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/15 transition-all duration-300">
                    <sector.icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-white/60 text-sm font-medium">
                    {sector.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#contact"
              className="group inline-flex items-center bg-white text-[#112540] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Démarrer votre projet
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero