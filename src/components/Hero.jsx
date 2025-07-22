import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container-width section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Miris Green Investments
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
          >
            It's not an investment if it's destroying the planet.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex justify-center mb-8">
              <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce-subtle" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For this reason, Oslo based MIRIS has launched a sustainable investment product that will be used exclusively to fund high impact projects across 4 key focuses...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-primary-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Green Buildings</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-2 h-8 bg-primary-600 rounded-full"></div>
                <div className="w-2 h-6 bg-primary-600 rounded-full ml-1"></div>
                <div className="w-2 h-4 bg-primary-600 rounded-full ml-1"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Green Energy</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-6 bg-primary-600 rounded border-2 border-white"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Green Compute</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Green Finance</h3>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  )
}

export default Hero