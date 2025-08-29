import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Services from './components/Services'
import Projects from './components/Projects'
import Feeds from './components/Feeds'
import Innovations from './components/Innovations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Client Pages
import MedecinsCliniquesClients from './pages/MedecinsCliniquesClients'
import EsthetiqueMedicaleClients from './pages/EsthetiqueMedicaleClients'
import ActeursClients from './pages/ActeursClients'
import BtpImmobilierClients from './pages/BtpImmobilierClients'
import RestaurantClients from './pages/RestaurantClients'
import BijouterieLuxeClients from './pages/BijouterieLuxeClients'
import StartupTechClients from './pages/StartupTechClients'
import CultureEvenementielClients from './pages/CultureEvenementielClients'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Projects />
      <Feeds />
      <Innovations />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients/medecins-cliniques" element={<MedecinsCliniquesClients />} />
          <Route path="/clients/esthetique-medicale" element={<EsthetiqueMedicaleClients />} />
          <Route path="/clients/acteurs" element={<ActeursClients />} />
          <Route path="/clients/btp-immobilier" element={<BtpImmobilierClients />} />
          <Route path="/clients/restauration" element={<RestaurantClients />} />
          <Route path="/clients/bijouterie-luxe" element={<BijouterieLuxeClients />} />
          <Route path="/clients/startup-tech" element={<StartupTechClients />} />
          <Route path="/clients/culture-evenementiel" element={<CultureEvenementielClients />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  )
}

export default App