import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Zap, Monitor, DollarSign } from 'lucide-react'

const FocusAreas = () => {
  const areas = [
    {
      icon: Building2,
      title: "Green Buildings",
      description: "Energy-positive buildings that produce more energy than they consume, transforming the construction industry."
    },
    {
      icon: Zap,
      title: "Green Energy",
      description: "Renewable energy solutions and smart grid technologies for sustainable power generation and distribution."
    },
    {
      icon: Monitor,
      title: "Green Compute",
      description: "Sustainable computing infrastructure and data centers powered by renewable energy sources."
    },
    {
      icon: DollarSign,
      title: "Green Finance",
      description: "Transparent financial instruments that fund environmentally beneficial projects with full traceability."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            THE MIRIS X PLATFORM
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Sustainable Investment
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MIRIS X is our custom built sustainable investment platform. It tracks how funds are used in sustainable projects by monitoring the whole supply chain. Not only does it monitor project finances and progress but also impact.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
            Each project has a carbon budget and all activities around the project are tracked against this benchmark. It's a fully transparent view on where investor money is going and how it's contributing to sustainable assets that grow in value.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Try Demo
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-primary-600 h-12 flex items-center px-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-white font-medium">MIRIS Invest Dashboard</span>
                </div>
              </div>
              <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-primary-700 font-medium">Interactive Investment Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FocusAreas