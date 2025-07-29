import React from 'react'
import { Users, TrendingUp, Building2, Target } from 'lucide-react'

const Innovations = () => {
  const stats = [
    {
      icon: Users,
      value: '+90',
      label: 'CLIENTS ACCOMPAGNÉS',
      description: 'Chaque projet est unique, mais notre engagement reste constant : écouter, comprendre, structurer et délivrer des résultats mesurables.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Building2,
      value: '9',
      label: 'FILIALES INTÉGRÉES',
      description: 'Une synergie maîtrisée entre expertises complémentaires, pour offrir une réponse globale, fluide et cohérente à chaque besoin.',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: TrendingUp,
      value: '+28%',
      label: 'DE CROISSANCE MOYENNE CRÉÉE SUR LE CA CLIENT',
      description: 'Notre impact se mesure en valeur concrète, en structuration durable et en performance stratégique.',
      color: 'from-primary-700 to-primary-800'
    },
    {
      icon: Target,
      value: '+45',
      label: 'COLLABORATEURS ET TALENTS',
      description: 'Des équipes passionnées, alignées par des valeurs fortes, qui portent chaque projet avec responsabilité et exigence.',
      color: 'from-primary-800 to-primary-900'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Chiffres Clés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LES CHIFFRES QUI TRADUISENT NOTRE IMPACT
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-gray-700 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Evidence Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Résultats en Images
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nous transformons les métriques en réussites tangibles
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* First Image with Description */}
            <div className="group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <img
                    src="/img/cle1.png"
                    alt="Analytics et performance clients E-DENTIFY"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Performance Analytics
                  </h4>
                  <p className="text-gray-600">
                    Suivi en temps réel de l'impact de nos stratégies sur la croissance de nos partenaires médicaux
                  </p>
                </div>
              </div>
            </div>

            {/* Second Image with Description */}
            <div className="group animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <img
                    src="/img/cle2.png"
                    alt="Résultats et croissance clients E-DENTIFY"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    ROI & Croissance
                  </h4>
                  <p className="text-gray-600">
                    Visualisation claire du retour sur investissement et de l'évolution positive de notre accompagnement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-90"></div>
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="relative p-12 text-center text-white rounded-3xl shadow-2xl animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Des résultats qui parlent d'eux-mêmes
              </h3>
              <p className="text-xl font-medium opacity-95 leading-relaxed">
                L'art de structurer l'avenir, projet après projet.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium">
                <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  ✓ Mesurable
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  ✓ Transparent
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  ✓ Durable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovations