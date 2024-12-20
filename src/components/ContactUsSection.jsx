import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@example.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Banglore, India',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM - 6PM',
    },
  ];

  return (
    <motion.section
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-purple-200 mix-blend-multiply blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-pink-200 mix-blend-multiply blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's Start a
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Conversation </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more? We're here to help you make the right choice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 relative"
          >
            {/* Decorative gradient borders */}
            <div className="absolute -left-2 -top-2 -z-10 w-full h-full rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 opacity-50" />
            <div className="absolute -right-2 -bottom-2 -z-10 w-full h-full rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 opacity-50" />
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Doe"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-300 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                    <item.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUsSection;