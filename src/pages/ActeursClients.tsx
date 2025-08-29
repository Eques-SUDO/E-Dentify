import React from 'react'
import ClientPage from '../components/ClientPage'
import { Users } from 'lucide-react'

const ActeursClients = () => {
  const clients = [
    {
      name: 'URBAINK',
      description: 'Acteur majeur dans le développement urbain innovant et les solutions intelligentes pour les villes.',
      image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Stratégie de marque', 'Communication corporate', 'Présence digitale'],
      results: [
        'Développement d\'une stratégie de marque forte',
        'Communication corporate professionnelle',
        'Présence digitale renforcée et moderne'
      ],
      socialMedia: {
        website: 'https://www.urbank.shop/',
        instagram: 'https://www.instagram.com/urbank_maroc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@urbank_maroc?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/UrbanKmaroc'
      }
    }
  ]

  return (
    <ClientPage
      sectorName="Acteurs"
      sectorIcon={Users}
      sectorColor="from-primary-500 to-primary-600"
      clients={clients}
    />
  )
}

export default ActeursClients