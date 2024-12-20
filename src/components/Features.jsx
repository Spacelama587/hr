import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, PieChart, Shield, Users, VideoIcon } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Smart Analytics",
    description: "Leverage advanced algorithms and machine learning to gain deeper insights into your business metrics and performance indicators.",
    color: "bg-purple-100",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Streamline your workflow with automated scheduling and intelligent time tracking features.",
    color: "bg-pink-100",
  },
  {
    icon: VideoIcon,
    title: "Video Conferencing",
    description: "Connect with your team through high-quality video calls with built-in collaboration tools.",
    color: "bg-blue-100",
  },
  {
    icon: PieChart,
    title: "Performance Metrics",
    description: "Track and visualize key performance indicators with interactive dashboards and reports.",
    color: "bg-amber-100",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Foster teamwork with integrated tools for sharing, commenting, and real-time collaboration.",
    color: "bg-pink-100",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Protect your data with enterprise-grade security features and compliance standards.",
    color: "bg-blue-100",
  },
];

const FeatureCard = ({ icon: Icon, title, description, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`${color} rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white mb-6">
        <Icon className="w-8 h-8 text-purple-600" />
      </div>
      <div className="relative">
        <span className="absolute -left-6 top-1 text-4xl font-bold text-black/5">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-4">
              Features
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-light text-gray-900 mb-6"
          >
            Transform Your Workflow with
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Powerful Features</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover tools designed to enhance productivity and streamline your daily operations.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mx-auto mb-24 max-w-5xl"
        >
          <div className="aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
            <img
              src="/Untitled2.png"
              alt="Platform Dashboard"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-4 -top-4 -z-10 w-full h-full rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 opacity-50" />
          <div className="absolute -right-4 -bottom-4 -z-10 w-full h-full rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;