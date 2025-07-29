import React from 'react'
import { Eye, Heart, Shield, Users } from 'lucide-react'

const VisionMission = () => {
  const values = [
    {
      icon: Shield,
      title: 'ÉTHIQUE',
      description: 'Nous plaçons l\'intégrité et la responsabilité au cœur de chaque action. E-dentify s\'engage à communiquer dans le respect des règles déontologiques du secteur médical.',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'ACCOMPAGNEMENT HUMAIN',
      description: 'Plus qu\'un prestataire, un partenaire de confiance. Nous co-construisons avec chaque professionnel une stratégie sur-mesure, avec une approche humaine et empathique.',
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      icon: Eye,
      title: 'PERFORMANCE',
      description: 'Des résultats mesurables, des stratégies testées, une croissance durable. Nous optimisons les actions marketing pour générer un vrai retour sur investissement.',
      gradient: 'from-primary-700 to-primary-800'
    },
    {
      icon: Heart,
      title: 'INNOVATION',
      description: 'Toujours en avance, toujours à l\’écoute des tendances. E-dentify utilise les outils les plus récents en communication, design, vidéo, IA et digital.',
      gradient: 'from-primary-800 to-primary-900'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Valeurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une agence où santé rime avec stratégie. Une expertise double : médicale et marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`group p-8 bg-gradient-to-br ${value.gradient} rounded-2xl text-white transform hover:scale-105 transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <value.icon className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">{value.title}</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-95">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-medium text-gray-700 italic">
            "Ce que vous voyez est pensé, ce que vous ne voyez pas, aussi."
          </blockquote>
          <p className="text-gray-500 mt-4">Notre philosophie</p>
        </div>
      </div>
    </section>
  )
}

export default VisionMission