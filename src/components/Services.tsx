import React, { useState, useEffect } from 'react'
import { 
  Target, 
  Share2, 
  Palette, 
  Video, 
  Printer, 
  TrendingUp, 
  Building2,
  Calendar,
  Users,
  Monitor,
  MapPin,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const services = [
    {
      icon: Target,
      title: 'STRATÉGIE & CONSEIL',
      description: 'Positionnement, plateforme de marque, business modeling, lancement, benchmarking, accompagnement dirigeants',
      color: 'from-[#112540] to-[#8296B7]'
    },
    {
      icon: Palette,
      title: 'BRANDING & IDENTITÉ VISUELLE',
      description: 'Naming, logo, charte graphique, univers visuel, brandbook, habillage physique',
      color: 'from-[#8296B7] to-[#112540]'
    },
    {
      icon: Share2,
      title: 'MARKETING DIGITAL',
      description: 'Social media, création de contenu, publicité en ligne, lead generation, CRM',
      color: 'from-[#112540] to-[#8296B7]'
    },
    {
      icon: Video,
      title: 'PRODUCTION AUDIOVISUELLE',
      description: 'Tournages, shootings, montage, motion design, diffusion multicanal',
      color: 'from-[#8296B7] to-[#112540]'
    },
    {
      icon: Printer,
      title: 'PRINT & SIGNALÉTIQUE',
      description: 'Flyers, brochures, affiches, stands, papeterie, vitrines et tout support visuel',
      color: 'from-[#112540] to-[#8296B7]'
    },
    {
      icon: TrendingUp,
      title: 'MARKETING TERRAIN',
      description: 'Activations, street marketing et actions de proximité à fort impact',
      color: 'from-[#8296B7] to-[#112540]'
    },
    {
      icon: Building2,
      title: 'COMMUNICATION INSTITUTIONNELLE',
      description: 'Discours corporate, charte éditoriale, notoriété B2B',
      color: 'from-[#112540] to-[#8296B7]'
    },
    {
      icon: Users,
      title: 'RELATIONS PUBLIQUES & INFLUENCE',
      description: 'Presse, partenariats stratégiques, campagne de notoriété, relation institutionnelle',
      color: 'from-[#8296B7] to-[#112540]'
    },
    {
      icon: Monitor,
      title: 'ÉQUIPEMENT & HABILLAGE',
      description: 'Enseignes, mobilier brandé, signalétique directionnelle, écrans dynamiques',
      color: 'from-[#112540] to-[#8296B7]'
    },
    {
      icon: MapPin,
      title: 'PARCOURS CLIENT',
      description: 'Mapping de l\'expérience client, points de contact physiques et digitaux',
      color: 'from-[#8296B7] to-[#112540]'
    },
    {
      icon: Calendar,
      title: 'ÉVÉNEMENTIEL & IMMERSIF',
      description: 'Organisation d\'événements, tournées, animation live, production post-événement',
      color: 'from-[#112540] to-[#8296B7]'
    },
    {
      icon: Globe,
      title: 'SOLUTIONS TECH & DIGITALES',
      description: 'Sites web, apps, ERP/CRM, QR codes, IA, réalité augmentée, sécurité IT',
      color: 'from-[#8296B7] to-[#112540]'
    }
  ]

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(services.length / getItemsPerView()))
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, services.length])

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4 // xl
      if (window.innerWidth >= 1024) return 3 // lg
      if (window.innerWidth >= 768) return 2 // md
    }
    return 1 // mobile
  }

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => {
      const itemsPerView = getItemsPerView()
      return prevIndex === 0 ? Math.ceil(services.length / itemsPerView) - 1 : prevIndex - 1
    })
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => {
      const itemsPerView = getItemsPerView()
      return (prevIndex + 1) % Math.ceil(services.length / itemsPerView)
    })
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const itemsPerView = getItemsPerView()
  const totalSlides = Math.ceil(services.length / itemsPerView)

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            COMMUNIQUER LA SANTÉ, AUTREMENT.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6 text-[#112540] group-hover:text-[#8296B7] transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6 text-[#112540] group-hover:text-[#8296B7] transition-colors" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2"
                >
                  {services
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((service, index) => (
                      <div 
                        key={`${slideIndex}-${index}`}
                        className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                      >
                        <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 h-2 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-full' 
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-[#112540]/10 to-[#8296B7]/10 rounded-2xl border-l-4 border-[#112540]">
          <p className="text-center text-lg font-semibold text-gray-700">
            Une approche <span className="text-[#112540] font-bold">360°</span> pour accompagner les professionnels de santé
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services