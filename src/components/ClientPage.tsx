import React from 'react'
import { ArrowLeft, ExternalLink, Instagram, Facebook, Linkedin, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Client {
  name: string
  logo?: string // ✅ Added logo property
  description: string
  image: string
  services: string[]
  socialMedia?: {
    website?: string
    instagram?: string
    facebook?: string
    linkedin?: string
  }
}

interface ClientPageProps {
  sectorName: string
  sectorIcon: React.ComponentType<any>
  sectorColor: string
  clients: Client[]
}

const ClientPage: React.FC<ClientPageProps> = ({ sectorName, sectorIcon: SectorIcon, sectorColor, clients }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${sectorColor} text-white py-16`}>
        <div className="container-custom">
          <Link 
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
              <SectorIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{sectorName}</h1>
              <p className="text-xl text-white/90">Nos clients et réalisations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                {/* ✅ Logo and Name */}
                <div className="flex items-center space-x-3 mb-3">
                  {client.logo && (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <h3 className="text-xl font-bold text-gray-900">
                    {client.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {client.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Services fournis :</h4>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${sectorColor} text-white text-sm rounded-full`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {client.socialMedia && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Suivez-les :</h4>
                    <div className="flex space-x-3">
                      {client.socialMedia.website && (
                        <a
                          href={client.socialMedia.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Globe className="w-4 h-4 text-gray-600" />
                        </a>
                      )}
                      {client.socialMedia.instagram && (
                        <a
                          href={client.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                        >
                          <Instagram className="w-4 h-4 text-pink-600" />
                        </a>
                      )}
                      {client.socialMedia.facebook && (
                        <a
                          href={client.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                        </a>
                      )}
                      {client.socialMedia.linkedin && (
                        <a
                          href={client.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-blue-600" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientPage
