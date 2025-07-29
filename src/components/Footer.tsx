import React from 'react'
import { Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/img/edintify-logo.png" 
              alt="E-DENTIFY Logo" 
              className="h-12 object-contain"
            />
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span>Powered by Marnova</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ouurtech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer