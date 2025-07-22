import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Clock, BarChart3 } from 'lucide-react'

const Investments = () => {
  const exclusiveFeatures = [
    "Investment is only used for green projects, following a strict framework",
    "Investment impact is tracked, we show you where your money was spent on a specific project",
    "Bond is 3 years long and returns 7% per annum, monthly compounded",
    "Interest accrues in real time. Gains can be seen every second"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Exclusive Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              EXCLUSIVE TO MIRIS X
            </h2>
            
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">GB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Greenbond</h3>
                <p className="text-gray-600">Sustainable Investment Solution</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {exclusiveFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="btn-primary text-lg px-8 py-4">
                Learn More About Greenbond
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-primary-600 h-12 flex items-center px-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-white font-medium">Greenbond Dashboard</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Investment Overview */}
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Your Investment</span>
                      <TrendingUp className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-primary-600">€25,000</div>
                    <div className="text-sm text-gray-600">+7% annual return</div>
                  </div>

                  {/* Real-time Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Clock className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Real-time</div>
                      <div className="text-sm text-gray-600">Interest Growth</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <BarChart3 className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Impact</div>
                      <div className="text-sm text-gray-600">Tracking</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Project Progress</span>
                      <span className="text-gray-900 font-medium">73%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            A little bit more about MIRIS X
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Making green real estate investments safe, traceable, liquid and efficient through smart contracts that allow the tracking of cash flow in sustainable projects
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Investments