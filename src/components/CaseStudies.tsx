import React from 'react'
import { TrendingUp, Users, Star } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Taxi Sahbi',
      context: 'Besoin d\'un positionnement unique face aux VTC internationaux',
      solutions: [
        'Naming & identité visuelle',
        'UX storytelling',
        'Campagne UGC',
        'Partenariats influenceurs tech & lifestyle'
      ],
      metrics: [
        { label: 'Downloads 3 mois', value: '+42k', icon: TrendingUp },
        { label: 'CAC', value: '÷2', icon: TrendingUp },
        { label: 'Rating stores', value: '4.6/5', icon: Star }
      ],
      image: '/img/TAXI-SAHBI-001.png',
      gradient: 'from-yellow-50 to-orange-50',
      accentColor: 'text-yellow-700'
    },
    {
      title: 'Moussem 2024',
      context: 'Moderniser l\'image du Moussem et attirer un public urbain',
      solutions: [
        'Brand guidelines patrimoniales',
        'Mini‑docs Instagram Reels',
        'Live TikTok multicam',
        'Collaboration presse & OTA'
      ],
      metrics: [
        { label: 'Vues cumulées', value: '18M', icon: Users },
        { label: 'Engagement moyen', value: '9.3%', icon: TrendingUp },
        { label: 'Affluence', value: '+15%', icon: TrendingUp }
      ],
      image: '/img/MoussemMoulayAbdellah.jpg',
      gradient: 'from-green-50 to-blue-50',
      accentColor: 'text-green-700'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h2>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Case Study: {study.title}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contexte</h4>
                    <p className="text-gray-600">{study.context}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solutions Spark</h4>
                    <ul className="space-y-1">
                      {study.solutions.map((solution, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className={`bg-gradient-to-br ${study.gradient} p-6 rounded-2xl mb-6`}>
                  <h4 className={`text-xl font-bold ${study.accentColor} mb-4 flex items-center`}>
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Impact
                  </h4>
                  <div className="space-y-3">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-700">{metric.label}</span>
                        <span className="font-bold text-green-600 text-lg">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <img 
                  src={study.image}
                  alt={study.title}
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies