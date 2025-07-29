import React from 'react'
import { Calendar } from 'lucide-react'
import ClientPage from '../components/ClientPage'
import VideoCarousel from '../components/VideoCarousel'

const CultureEvenementielClients = () => {
  const clients = [
    {
      name: 'Moussem Moulay Abdellah Amghar',
       logo: '/img/moussem-2024.jpeg',
      description: 'Plus grand festival équestre d\'Afrique. Refonte de communication visuelle, stratégie digitale, couverture photo/vidéo immersive, et valorisation de l\'héritage culturel.',
      image: '/img/moussemmoulayAbdellah.jpeg',
      services: ['Communication visuelle', 'Stratégie digitale', 'Couverture immersive'],
      socialMedia: {
        instagram: '#',
        facebook: '#'
      }
    },
    {
      name: 'Filat',
      logo: '/img/logo-Lunera.png',
      description: 'Projet culturel valorisant les métiers du fil et de la transmission artisanale. Capsules vidéos, storytelling multicouche et ligne éditoriale dédiée aux artisans marocains.',
      image: '/img/lunera.png',
      services: ['Capsules vidéos', 'Storytelling', 'Valorisation artisans'],
      socialMedia: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'ARCAMA',
      logo: '/img/logo-Lunera.png',
      description: 'Association spécialisée dans la préservation de la musique andalouse. Branding global, supports événementiels et valorisation visuelle des actions éducatives.',
      image: '/img/lunera.png',
      services: ['Branding global', 'Supports événementiels', 'Actions éducatives'],
      socialMedia: {
        facebook: '#',
        website: '#'
      }
    }
  ]

  const videoUrls = [
    'https://www.youtube.com/shorts/1HgCpkJyaM8?t=10&feature=share',
    'https://www.youtube.com/shorts/teOBpuiGSw8?t=3&feature=share',
    'https://www.youtube.com/shorts/GMOUe4He3pA?feature=share',
    'https://www.youtube.com/shorts/_v9TE7cnrqY?t=1&feature=share',
    'https://www.youtube.com/shorts/60LB1hzECeU',
    'https://www.youtube.com/shorts/9UBe9_ZeoGE?feature=share',
  ]

  return (
    <>
      <ClientPage
        sectorName="Culture & Événementiel"
        sectorIcon={Calendar}
        sectorColor="from-yellow-500 to-orange-500"
        clients={clients}
      />
      <VideoCarousel videos={videoUrls} vertical />
    </>
  )
}

export default CultureEvenementielClients
