import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, Eye, Users } from 'lucide-react'

const Platform = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-time Tracking",
      description: "Monitor your investments and their environmental impact in real-time with our advanced tracking system."
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Your investments are protected through asset security and strict governance frameworks."
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "See exactly where your money goes and track the progress of sustainable projects."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Join a community of investors making a positive difference for the planet."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              INVESTING
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Featured Green Investments
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Invest digitally into MIRIS Green Investments through MIRIS X
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8"
            >
              <button className="btn-primary text-lg px-8 py-4">
                Invest on MIRIS X
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Investment Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Greenbond Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">GB</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Greenbond</h4>
                    <p className="text-sm text-gray-500">Green Bond Investment</p>
                  </div>
                </div>
                
                <h5 className="font-semibold text-gray-900 mb-2">
                  Fully digital experience via interactive investment dashboard
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  Interest growth shown in real time
                </p>
                
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li>• Structure: Green Bond (loan agreement)</li>
                  <li>• Available: EUR 500,000,000</li>
                  <li>• Term: 4 years</li>
                </ul>
                
                <div className="flex space-x-3">
                  <button className="btn-primary flex-1">
                    INVEST NOW
                  </button>
                  <button className="btn-secondary">
                    View invest memo
                  </button>
                </div>
              </div>
            </div>

            {/* US CAP GLOBAL Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xs">USC</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">US CAP GLOBAL</h4>
                    <p className="text-sm text-gray-500">Asset Management</p>
                  </div>
                </div>
                
                <h5 className="font-semibold text-gray-900 mb-2">
                  High touch face-to-face interactions
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  Office in London and San Francisco
                </p>
                
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li>• Structure: Asset backed Security</li>
                  <li>• Available: EUR 100,000,000</li>
                  <li>• Minimum entry: EUR 120,000</li>
                </ul>
                
                <button className="btn-secondary w-full">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Platform