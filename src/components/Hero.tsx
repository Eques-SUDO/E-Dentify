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
      <div className="relative z-10 container-custom text-center pt-20">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#8296B7] mr-2" />
            <span className="text-white text-sm font-medium">Powered by Marnova</span>
          </div>
          
          {/* Main Title H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            <span className="block text-white/90 font-medium mb-2">Votre image, notre expertise :</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-[#8296B7]">
              du médical au lifestyle
            </span>
          </h1>
          
          {/* Divider Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#8296B7] to-transparent mx-auto mb-8"></div>
          
          {/* Brand Name */}
          <div className="mb-12">
            <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide">
              E-DENTIFY
            </p>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 mb-16 max-w-2xl mx-auto leading-relaxed">
            L'agence qui connecte la science à la vie, avec une expertise unique en marketing santé et lifestyle.
          </p>

          {/* Client Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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