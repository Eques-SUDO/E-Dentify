import React from 'react'
import { PlayCircle } from 'lucide-react'

const Videos = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            NOS VIDÉOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos créations vidéo et contenus audiovisuels
          </p>
        </div>

        {/* Empty container - will be filled with video content later */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
            <PlayCircle className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-4">
              Contenu vidéo à venir
            </h3>
            <p className="text-lg text-gray-400">
              Cette section sera bientôt mise à jour avec nos dernières créations vidéo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos