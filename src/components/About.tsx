import React from 'react'
import { Users, Calendar, Target, Award } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Calendar,
      label: 'Fondée',
      value: '2024',
      description: 'Au sein du Groupe Marnova',
      color: 'text-primary-500'
    },
    {
      icon: Users,
      label: 'Clients',
      value: '+90',
      description: 'Professionnels de santé accompagnés',
      color: 'text-primary-600'
    },
    {
      icon: Target,
      label: 'Croissance moyenne',
      value: '+28%',
      description: 'Sur le CA de nos clients',
      color: 'text-primary-700'
    },
    {
      icon: Award,
      label: 'Expertise',
      value: 'Double',
      description: 'Médicale et marketing',
      color: 'text-primary-800'
    }
  ]

  const images = [
    '/img/spark-01.jpeg',
    '/img/spark-02.jpeg',
    '/img/spark-03.jpeg',
    '/img/spark-04.jpeg', // .jpeg image
    '/img/spark-05.jpeg'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Main Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos d'E-DENTIFY
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <strong className="text-primary">E-DENTIFY</strong> est une agence de marketing de santé, née au sein du groupe{' '}
              <strong className="text-primary-light">Marnova</strong> et dirigée par Majdouline Chakraoui. Fondée avec l'ambition de réconcilier 
              la médecine avec les nouveaux enjeux de communication, E-DENTIFY se positionne comme le pont entre l'expertise 
              médicale et le marketing santé.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-10 h-10 rounded-full ${stat.color.replace('text-', 'bg-').replace('600', '100').replace('500', '100')} flex items-center justify-center flex-shrink-0`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{stat.label}:</span>
                    <span className="ml-2 text-gray-700">{stat.value}</span>
                    {stat.description && (
                      <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nous accompagnons les professionnels les plus exigeants du secteur médical et esthétique : 
                <strong className="text-primary"> dentistes</strong>, <strong className="text-primary-light">dermatologues</strong>, 
                <strong className="text-primary-dark"> chirurgiens esthétiques</strong>, cliniques spécialisées, laboratoires médicaux et marques de technologies santé.
              </p>
              <p className="text-base text-gray-600 italic">
                "E-DENTIFY, une agence où santé rime avec stratégie."
              </p>
            </div>
            <img 
              src="/img/spark-01.jpeg"
              alt="Team collaboration"
              className="rounded-2xl mt-6 shadow-xl w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Image Gallery Section - Shows 3 at once */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Notre équipe en action</h3>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto px-1 pb-2 scroll-smooth scrollbar-hide">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[250px] md:w-[280px] lg:w-[300px] rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src={img}
                    alt={`Spark ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
