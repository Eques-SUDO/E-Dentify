import React from 'react'
import { Rocket } from 'lucide-react'
import ClientPage from '../components/ClientPage'
import VideoCarousel from '../components/VideoCarousel'

const StartupTechClients = () => {
  const clients = [
    {
      name: 'Taxi Sahbi',
      logo: '/img/taxi-sahbi.jpeg',
      description: 'Plateforme marocaine VTC. Projet complet : naming, branding, campagnes "Ana Ti9a", stratégie d\'acquisition et app storytelling. Une référence nationale.',
      image: '/img/taxisahbi.png',
      services: ['Naming & branding', 'Campagnes UGC', 'Stratégie acquisition'],
      socialMedia: {
        instagram: 'https://instagram.com/taxisahbi',
        website: 'https://taxisahbi.ma'
      }
    },
    {
      name: 'RentGooo',
      logo: '/img/Rentgooo.jpg',
      description: 'Start-up de location automobile 100% digitale. Stratégie omnicanale, activation internationale à GITEX Africa, et création de contenus pédagogiques innovants.',
      image: '/img/Rentgooo.jpg',
      services: ['Stratégie omnicanale', 'Activation GITEX', 'Contenus pédagogiques'],
      socialMedia: {
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'YelTech',
      logo: '/img/YelTech.png', 
      description: 'Intégrateur Odoo pour le BTP. Définition de son image B2B, visuels techniques, stratégie de publication LinkedIn et discours commercial.',
      image: '/img/YelTech.png',
      services: ['Image B2B', 'Visuels techniques', 'Stratégie LinkedIn'],
      socialMedia: {
        linkedin: '#',
        website: '#'
      }
    },
    {
      name: 'SafarDream',
      logo: '/img/SafarDream-logo.jpg',
      description: 'Plateforme de voyage exploitant l\'IA, repositionnée sur TikTok avec un branding tendance, des vidéos immersives et une ligne éditoriale génération Z.',
      image: '/img/SafarDream-logo.jpg',
      services: ['Repositionnement TikTok', 'Branding tendance', 'Vidéos immersives'],
      socialMedia: {
        instagram: 'https://instagram.com/safardream',
        website: 'https://safardream.com'
      }
    },
    {
      name: 'DakiTrack',
       logo: '/img/dakitrack-logo-1.svg',
      description: 'Start-up spécialisée en géolocalisation IoT. Accompagnement stratégique global incluant le naming, le branding produit et les contenus pré-campagne.',
      image: '/img/geolocalisation-en-temp-reel-dakitrack.com_.png',
      services: ['Naming', 'Branding produit', 'Contenus pré-campagne'],
      socialMedia: {
        linkedin: 'https://linkedin.com/company/dakitrack',
        website: 'https://dakitrack.com'
      }
    },
    {
      name: 'Omnixis',
      logo: '/img/omnixisai_logo.jpeg',
      description: 'Acteur des smart cities et de l\'IA opérationnelle. Développement visuel de son agent d\'appel IA, démonstrations vidéo 3D et activation événement tech.',
      image: '/img/omnixisai.jpeg',
      services: ['Agent IA visuel', 'Démonstrations 3D', 'Activation tech'],
      socialMedia: {
        linkedin: 'https://linkedin.com/company/omnixis',
        website: 'https://omnixis.com'
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
        sectorName="Start-up & Tech"
        sectorIcon={Rocket}
        sectorColor="from-amber-600 to-yellow-700"
        clients={clients}
      />
      <VideoCarousel videos={videoUrls} vertical />
    </>
  )
}

export default StartupTechClients
