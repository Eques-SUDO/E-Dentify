import React from 'react'
import ClientPage from '../components/ClientPage'
import { Sparkles } from 'lucide-react'

const EsthetiqueMedicaleClients = () => {
  const clients = [
    {
      name: 'SASC',
      description: 'Centre d\'esthétique médicale avancée offrant des traitements innovants et personnalisés.',
      image: 'https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Branding luxe', 'Marketing digital', 'Contenus visuels'],
      results: [
        'Création d\'une identité luxe distinctive',
        'Augmentation de 60% des demandes de consultation',
        'Renforcement du positionnement premium'
      ],
      socialMedia: {
        website: 'https://linktr.ee/sasc_maroc',
        instagram: 'https://www.instagram.com/sasc_maroc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@sasc_maroc?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/p/Sasc-61566272360312/?_rdc=1&_rdr#'
      }
    },
    {
      name: 'Top Minceur & Anti-âge',
      description: 'Institut spécialisé dans les soins minceur et anti-âge avec technologies de pointe.',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Identité premium', 'Campagnes digitales', 'Réseaux sociaux'],
      results: [
        'Développement d\'une identité premium cohérente',
        'Campagnes digitales performantes',
        'Croissance de 45% de la clientèle'
      ],
      socialMedia: {
        website: 'https://linktr.ee/topminceur_antige',
        instagram: 'https://www.instagram.com/topminceur_antiage?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@topminceuretantiage?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/profile.php?id=61555686123138'
      }
    },
    {
      name: 'Marsh & Mallow',
      description: 'Espace bien-être alliant soins esthétiques et relaxation dans un cadre élégant.',
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Direction artistique', 'Stratégie social media', 'Contenus lifestyle'],
      results: [
        'Direction artistique élégante et moderne',
        'Engagement social media multiplié par 3',
        'Positionnement lifestyle réussi'
      ],
      socialMedia: {
        website: 'https://www.marshandmallow.ma',
        instagram: 'https://www.instagram.com/marshand_mallow?igsh=bzc4bGZ1dnExcW41'
      }
    },
    {
      name: 'Lavetta Beauty & Esthétique',
      description: 'Centre de beauté complet proposant une gamme étendue de soins esthétiques professionnels.',
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Branding beauté', 'Marketing digital', 'Visuels raffinés'],
      results: [
        'Création d\'un branding beauté attractif',
        'Stratégie marketing digital efficace',
        'Amélioration de 50% de la visibilité'
      ],
      socialMedia: {
        website: 'https://linktr.ee/Center_Lavetta',
        instagram: 'https://www.instagram.com/centre_lavetta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@centre.lavetta?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/lavetta.ma/?_rdc=1&_rdr#'
      }
    },
    {
      name: 'Studio Laser',
      description: 'Clinique spécialisée dans les traitements laser avec équipements de dernière génération.',
      image: 'https://images.pexels.com/photos/5756677/pexels-photo-5756677.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Image moderne', 'Communication tech', 'Stratégie acquisition'],
      results: [
        'Image moderne et technologique',
        'Communication axée sur l\'innovation',
        'Acquisition client optimisée'
      ],
      socialMedia: {
        instagram: 'https://www.instagram.com/studio_laser_agdal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@studiolaserrabat?is_from_webapp=1&sender_device=pc'
      }
    },
    {
      name: 'Epil Dream',
      description: 'Centre d\'épilation définitive offrant des solutions personnalisées et durables.',
      image: 'https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Identité visuelle', 'Campagnes ciblées', 'Présence digitale'],
      results: [
        'Identité visuelle distinctive',
        'Campagnes ciblées performantes',
        'Forte présence digitale établie'
      ],
      socialMedia: {
        website: 'https://epil-dream.com',
        instagram: 'https://www.instagram.com/centreepildream?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@epil_dream_official?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/centreepildream'
      }
    }
  ]

  return (
    <ClientPage
      sectorName="Esthétique médicale"
      sectorIcon={Sparkles}
      sectorColor="from-primary-500 to-primary-600"
      clients={clients}
    />
  )
}

export default EsthetiqueMedicaleClients