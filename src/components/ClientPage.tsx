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
    tiktok?: string
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
      {/* Header with proper spacing for fixed header */}
      <div className="bg-gradient-to-r from-[#112540] to-[#1a3a5c] text-white pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="w-20 h-20 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-xl">
              <SectorIcon className="w-10 h-10" />
            </div>
            
            {/* Title and Subtitle */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-shadow-lg">{sectorName}</h1>
            <p className="text-xl md:text-2xl font-bold text-white/90 mb-6">Nos clients et réalisations</p>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/30"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/30"></div>
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
                        className="px-3 py-1 bg-gradient-to-r from-[#112540] to-[#1a3a5c] text-white text-sm font-semibold rounded-full"
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
                          className="w-8 h-8 bg-gradient-to-r from-[#112540] to-[#8296B7] rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
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
                      {client.socialMedia.tiktok && (
                        <a
                          href={client.socialMedia.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
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
