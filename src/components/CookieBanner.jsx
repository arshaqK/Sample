import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <p className="text-sm">
              We use cookies to enhance your experience. Please read our{' '}
              <a href="/cookie-policy" className="underline hover:text-primary-400">
                Cookies Policy
              </a>{' '}
              so that you are empowered to make decisions on your privacy.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAccept}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Accept
            </button>
            <a 
              href="/cookie-policy"
              className="text-primary-400 hover:text-primary-300 text-sm underline transition-colors duration-200"
            >
              Read more
            </a>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner