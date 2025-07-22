import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Scale, FileText, AlertTriangle } from 'lucide-react'

const Security = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-primary-600" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Security
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
          >
            A safe and secure organisation
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Every investment has risk, but we protect your money through asset security and strict governance. We also have an objectively vetted framework that ensures that your money is only used for planet friendly projects.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Learn More
          </motion.button>
        </div>

        {/* Legal Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
              <Scale className="w-6 h-6 text-gray-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">The Legal Stuff</h4>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              World Events outside of our control may impact our plans and performance, having an effect on the value and returns of projects. Like all investments, there is risk involved, Tax rules may change and eligibility rules apply.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're okay with second opinions. If you're not sure this investment is right for you, please consult an independent financial advisor.
            </p>
          </div>

          <div className="flex items-center mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
            <p className="text-sm text-yellow-800">
              <strong>Risk Warning:</strong> All investments carry risk and may lose value. Past performance is not a guarantee of future results.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Have questions about our security measures or investment process? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-primary-100">
                <FileText className="w-5 h-5 mr-2" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center text-primary-100">
                <FileText className="w-5 h-5 mr-2" />
                <span>Twitter</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Oslo</h4>
            <div className="space-y-2 text-gray-600">
              <p>Dronning Eufemias</p>
              <p>Gate 16</p>
              <p>0190</p>
              <p>Oslo</p>
            </div>
            <div className="mt-4 space-y-1 text-gray-600">
              <p>info@miris.no</p>
              <p>+47 355 25 550</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Cape Town</h4>
            <div className="space-y-2 text-gray-600">
              <p>7 Bree Street</p>
              <p>Cape Town</p>
              <p>8001</p>
              <p>South Africa</p>
            </div>
            <div className="mt-4 space-y-1 text-gray-600">
              <p>info@mirisx.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Security