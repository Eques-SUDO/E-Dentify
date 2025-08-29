import React from 'react'
import ClientPage from '../components/ClientPage'
import { Stethoscope } from 'lucide-react'

const MedecinsCliniquesClients = () => {
  const clients = [
    {
      name: 'Dr Manjra Hiba – Orthoplus',
      description: 'Cabinet d\'orthopédie spécialisé offrant des soins de pointe et un accompagnement personnalisé pour les patients.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Identité visuelle', 'Communication digitale', 'Stratégie patient'],
      results: [
        'Augmentation de 40% de la visibilité en ligne',
        'Amélioration de l\'engagement patient',
        'Renforcement de la présence digitale'
      ],
      socialMedia: {
        instagram: 'https://www.instagram.com/orthoplus.rabatagdal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: 'https://web.facebook.com/profile.php?id=61555062873679&sk=about'
      }
    },
    {
      name: 'Chraibi Dental Clinic',
      description: 'Clinique dentaire moderne proposant une gamme complète de soins dentaires avec les dernières technologies.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Branding médical', 'Présence digitale', 'Contenus éducatifs'],
      results: [
        'Création d\'une identité visuelle moderne',
        'Développement de contenus éducatifs engageants',
        'Croissance de 50% de la patientèle'
      ],
      socialMedia: {
        website: 'https://www.drchraibi.com',
        instagram: 'https://www.instagram.com/chraibi_dental_clinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@mounirchrabi1?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/cabinet.dentaire.specialise.chraibi.mounir'
      }
    },
    {
      name: 'Dr Lamrini Loubna',
      description: 'Spécialiste reconnue offrant une expertise médicale de haut niveau et une approche patient-centrée.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Image professionnelle', 'Communication santé', 'Réseaux sociaux'],
      results: [
        'Établissement d\'une image professionnelle forte',
        'Amélioration de la communication patient',
        'Augmentation de la notoriété locale'
      ],
      socialMedia: {
        instagram: 'https://www.instagram.com/dr.lamriniloubna?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@dr.lamrini.loubna?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/profile.php?id=61576091007900'
      }
    },
    {
      name: 'Dr Oukacha Nadia',
      description: 'Praticienne expérimentée combinant expertise médicale et approche humaine pour le bien-être des patients.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Stratégie digitale', 'Contenus médicaux', 'Gestion réputation'],
      results: [
        'Développement d\'une stratégie digitale complète',
        'Création de contenus médicaux informatifs',
        'Amélioration de la réputation en ligne'
      ],
      socialMedia: {
        website: 'https://docteuroukachanadia.com',
        instagram: 'https://www.instagram.com/dr_oukacha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@dr.oukacha.nadia?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/nadinya1'
      }
    },
    {
      name: 'Dr Lahbabi Mehdi',
      description: 'Cabinet médical moderne avec une approche innovante de la médecine et des soins personnalisés.',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Identité visuelle', 'Marketing médical', 'Communication patient'],
      results: [
        'Refonte complète de l\'identité visuelle',
        'Mise en place d\'une stratégie marketing efficace',
        'Amélioration significative de la satisfaction patient'
      ],
      socialMedia: {
        website: 'https://docteur-lahbabi-esthetique.com',
        instagram: 'https://www.instagram.com/dr_lahbabi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@dr.mehdi.lahbabi?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/mehdi.lahbabi.359'
      }
    },
    {
      name: 'Dr Benabdellah Mouna',
      description: 'Spécialiste dédiée offrant des consultations complètes et un suivi médical de qualité.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Branding santé', 'Stratégie digitale', 'Contenus informatifs'],
      results: [
        'Création d\'un branding santé cohérent',
        'Développement d\'une présence digitale forte',
        'Production de contenus informatifs de qualité'
      ],
      socialMedia: {
        website: 'https://dr-mouna-benabdallah.business.site/',
        instagram: 'https://www.instagram.com/dr.benabdallah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        tiktok: 'https://www.tiktok.com/@drmounabenabdallah?is_from_webapp=1&sender_device=pc',
        facebook: 'https://web.facebook.com/CabinetMedicalMieuxVivreEnBonneSante/?_rdc=1&_rdr#'
      }
    }
  ]

  return (
    <ClientPage
      sectorName="Médecins & Cliniques"
      sectorIcon={Stethoscope}
      sectorColor="from-primary-500 to-primary-600"
      clients={clients}
    />
  )
}

export default MedecinsCliniquesClients