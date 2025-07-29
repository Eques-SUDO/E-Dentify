import React from 'react'

const Feeds = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            QUELQUES UNS DE NOS FEEDS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos créations et stratégies digitales pour nos clients du secteur médical
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-slide-up">
            <div className="relative">
              <img
                src="/img/feed.png"
                alt="Nos feeds Instagram et réseaux sociaux"
                className="w-full h-auto object-contain"
              />
              {/* Optional overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Optional caption area */}
            <div className="p-8 bg-gradient-to-r from-primary-50 to-primary-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nos Créations Social Media
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Chaque contenu est pensé pour engager votre audience et renforcer votre expertise médicale. 
                  De l'éducation patient aux campagnes de sensibilisation, nous créons des feeds authentiques 
                  qui respectent l'éthique médicale tout en maximisant votre impact digital.
                </p>
                <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span>Contenu Éducatif</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-light rounded-full mr-2"></div>
                    <span>Respect Déontologique</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-dark rounded-full mr-2"></div>
                    <span>Engagement Authentique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feeds