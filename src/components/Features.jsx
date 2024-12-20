import { motion } from 'framer-motion';
import FeaturesCard from './FeaturesCard';
import { Brain, Clock, PieChart, Shield, Users, VideoIcon } from 'lucide-react';

export const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Advanced algorithms analyze candidate responses in real-time, providing deep insights into skills and potential.",
    color: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Time-Efficient Screening",
    description:
      "Automate initial interviews to save countless hours while maintaining a personal touch in your hiring process.",
    color: "bg-pink-50",
  },
  {
    icon: VideoIcon,
    title: "Video Interviews",
    description:
      "Conduct seamless video interviews with AI-assisted question generation and response analysis.",
    color: "bg-[#E0FBFC]",
  },
  {
    icon: PieChart,
    title: "Data-Driven Insights",
    description:
      "Get comprehensive analytics and candidate scorecards to make informed hiring decisions.",
    color: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Collaborative Hiring",
    description:
      "Share candidate interviews and feedback with team members for better decision making.",
    color: "bg-pink-50",
  },
  {
    icon: Shield,
    title: "Bias Reduction",
    description:
      "Ensure fair evaluation with AI-powered bias detection and standardized interview processes.",
    color: "bg-[#E0FBFC]",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-purple-50 text-[#7C3AED] text-sm font-semibold mb-4"
            >
              Features
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light text-gray-900 mb-6 leading-tight"
          >
            Revolutionize Your
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#FF4D8F] bg-clip-text text-transparent"> Hiring Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Streamline recruitment with our AI-powered interview platform that transforms how you evaluate and select candidates.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mx-auto mb-24 max-w-5xl"
        >
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2940&auto=format&fit=crop"
              alt="AI Interview Platform Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -left-4 -top-4 -z-10 w-full h-full rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 opacity-50"></div>
          <div className="absolute -right-4 -bottom-4 -z-10 w-full h-full rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 opacity-50"></div>
        </motion.div>
    
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeaturesCard
              key={index}
              icon={<feature.icon className="w-8 h-8 text-[#7C3AED]" />}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}