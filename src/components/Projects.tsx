import React from 'react'
import { Heart, Eye, Shield } from 'lucide-react'

const Projects = () => {
  const visionPoints = [
    {
      icon: Heart,
      title: 'Réinventer la communication santé',
      description: 'Pour que les professionnels médicaux existent, s\'expriment et se connectent avec justesse.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Eye,
      title: 'Gagner en visibilité',
      description: 'Aider les professionnels de santé à bâtir une image de marque forte et à attirer plus de patients.',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Shield,
      title: 'Rester fidèles à leur expertise',
      description: 'Tout en restant fidèles à leur expertise médicale et aux valeurs déontologiques.',
      color: 'from-primary-700 to-primary-800'
    }
  ]


  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'AVENIR EN PERSPECTIVE
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            "Ce que vous voyez est pensé, ce que vous ne voyez pas, aussi."
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Chez E-dentify, nous croyons que la santé et l'esthétique de demain passeront par une communication plus humaine, plus transparente et plus experte.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous aspirons à devenir la référence du marketing médical dans le monde francophone, en créant un écosystème où les médecins peuvent grandir professionnellement tout en valorisant leur unicité auprès de leurs patients.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects