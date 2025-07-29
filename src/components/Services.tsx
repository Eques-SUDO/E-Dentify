import React from 'react'
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
  Globe
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'STRATÉGIE & CONSEIL',
      description: 'Positionnement, plateforme de marque, business modeling, lancement, benchmarking, accompagnement dirigeants',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Palette,
      title: 'BRANDING & IDENTITÉ VISUELLE',
      description: 'Naming, logo, charte graphique, univers visuel, brandbook, habillage physique',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Share2,
      title: 'MARKETING DIGITAL',
      description: 'Social media, création de contenu, publicité en ligne, lead generation, CRM',
      color: 'from-primary-700 to-primary-800'
    },
    {
      icon: Video,
      title: 'PRODUCTION AUDIOVISUELLE',
      description: 'Tournages, shootings, montage, motion design, diffusion multicanal',
      color: 'from-primary-800 to-primary-900'
    },
    {
      icon: Printer,
      title: 'PRINT & SIGNALÉTIQUE',
      description: 'Flyers, brochures, affiches, stands, papeterie, vitrines et tout support visuel',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: TrendingUp,
      title: 'MARKETING TERRAIN',
      description: 'Activations, street marketing et actions de proximité à fort impact',
      color: 'from-primary-600 to-primary-800'
    },
    {
      icon: Building2,
      title: 'COMMUNICATION INSTITUTIONNELLE',
      description: 'Discours corporate, charte éditoriale, notoriété B2B',
      color: 'from-primary-700 to-primary-900'
    },
    {
      icon: Users,
      title: 'RELATIONS PUBLIQUES & INFLUENCE',
      description: 'Presse, partenariats stratégiques, campagne de notoriété, relation institutionnelle',
      color: 'from-primary-600 to-primary-800'
    },
    {
      icon: Monitor,
      title: 'ÉQUIPEMENT & HABILLAGE',
      description: 'Enseignes, mobilier brandé, signalétique directionnelle, écrans dynamiques',
      color: 'from-primary-500 to-primary-800'
    },
    {
      icon: MapPin,
      title: 'PARCOURS CLIENT',
      description: 'Mapping de l\'expérience client, points de contact physiques et digitaux',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Calendar,
      title: 'ÉVÉNEMENTIEL & IMMERSIF',
      description: 'Organisation d\'événements, tournées, animation live, production post-événement',
      color: 'from-primary-700 to-primary-800'
    },
    {
      icon: Globe,
      title: 'SOLUTIONS TECH & DIGITALES',
      description: 'Sites web, apps, ERP/CRM, QR codes, IA, réalité augmentée, sécurité IT',
      color: 'from-primary-800 to-primary-900'
    }
  ]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
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

        <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl border-l-4 border-primary animate-fade-in">
          <p className="text-center text-lg font-semibold text-gray-700">
            Une approche <span className="text-primary">360°</span> pour accompagner les professionnels de santé
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services