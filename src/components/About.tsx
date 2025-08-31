import React from 'react'
import { Users, Calendar, Target, Award, Heart, Lightbulb, Shield, Star, Sparkles } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Calendar,
      label: 'Fondée',
      value: '2024',
      description: 'Au sein du Groupe Marnova'
    },
    {
      icon: Users,
      label: 'Clients',
      value: '+90',
      description: 'Professionnels accompagnés'
    },
    {
      icon: Target,
      label: 'Croissance',
      value: '+28%',
      description: 'Sur le CA de nos clients'
    },
    {
      icon: Award,
      label: 'Expertise',
      value: '100%',
      description: 'Médicale et marketing'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Empathie',
      description: 'Comprendre les enjeux spécifiques du secteur médical et esthétique avec une approche humaine.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Proposer des solutions créatives et avant-gardistes adaptées aux nouvelles technologies.'
    },
    {
      icon: Shield,
      title: 'Confiance',
      description: 'Établir des partenariats durables basés sur la transparence, l\'éthique et la fiabilité.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Viser l\'excellence dans chaque projet avec un dépassement constant des attentes.'
    }
  ]

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#112540] to-[#8296B7] mb-8">
            À propos d'E-DENTIFY
          </h2>
          
          <p className="text-xl text-gray-600 font-semibold max-w-4xl mx-auto leading-relaxed">
            Une agence de marketing de santé née au sein du groupe{' '}
            <span className="text-[#112540] font-black">Marnova</span>
            , dirigée par{' '}
            <span className="text-[#8296B7] font-black">Majdouline Chakraoui</span>
          </p>
        </div>

        {/* Photos Gallery - Styled like Mission Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-[#112540] mb-4">Notre Équipe en Action</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First row - 3 images */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/img/spark-01.jpeg"
                alt="E-DENTIFY Team Moment 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/img/spark-02.jpeg"
                alt="E-DENTIFY Team Moment 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/img/spark-03.jpeg"
                alt="E-DENTIFY Team Moment 3"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Second row - 2 images */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/img/spark-04.jpeg"
                alt="E-DENTIFY Team Moment 4"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/img/spark-05.jpeg"
                alt="E-DENTIFY Team Moment 5"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-xl text-white text-center">
            <p className="font-bold italic">
              "L'excellence naît de la collaboration et de la passion partagée."
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-[#112540] mb-4">Notre Mission</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold mb-6">
                Chez E-dentify, notre mission est d'accompagner les marques et professionnels de la santé, de la beauté et du bien-être dans leur croissance digitale. Nous créons des contenus créatifs, esthétiques et pédagogiques qui renforcent la confiance, la notoriété et l'impact de nos clients, tout en respectant les codes de chaque secteur.
              </p>
              
              <div className="p-4 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-xl text-white">
                <blockquote className="font-bold italic">
                  "E-DENTIFY, une agence où santé rime avec stratégie."
                </blockquote>
              </div>
            </div>
            
            <div>
              <p className="text-gray-600 font-semibold mb-6">
                Nous accompagnons les professionnels les plus exigeants du secteur médical et esthétique :
              </p>
              
              <div className="space-y-3">
                {['Dentistes', 'Dermatologues', 'Chirurgiens esthétiques', 'Cliniques spécialisées', 'Laboratoires médicaux', 'Technologies santé'].map((profession, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#8296B7] rounded-full"></div>
                    <span className="text-[#112540] font-bold">{profession}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-[#112540] mb-4">Nos Chiffres Clés</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-[#112540] mb-2">{stat.value}</div>
                <div className="font-bold text-gray-700 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600 font-semibold">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-[#112540] mb-4">Nos Valeurs</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-[#112540] mb-3">{value.title}</h4>
                    <p className="text-gray-700 leading-relaxed font-semibold">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-6">Prêt à transformer votre présence digitale ?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Rejoignez les professionnels de santé qui nous font confiance pour développer leur activité et maximiser leur impact.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-[#112540] px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors"
          >
            <span>Discutons de votre projet</span>
            <Sparkles className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About