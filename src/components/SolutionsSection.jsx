
import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import { Sparkles, Star } from 'lucide-react';

const solutions = [
  {
    title: 'AI-Powered Assessments',
    description: 'Evaluate candidates efficiently with our advanced AI algorithms that provide detailed insights into technical skills and problem-solving abilities. Save time and make better hiring decisions with data-driven insights.',
    imagePlaceholder: '/aic.png'
  },
  {
    title: 'Real-time Code Analysis',
    description: 'Get instant feedback on code quality, performance, and best practices while candidates complete their coding challenges. Ensure your team gets only the most qualified talent.',
    imagePlaceholder: '/cr.png'
  },
  {
    title: 'Behavioral Analysis',
    description: 'Understand candidate behavior patterns and soft skills through AI-driven video interview analysis. Dive deeper into personality traits for a holistic assessment.',
    imagePlaceholder: '/beh.png'
  }
];

function SolutionsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f0e7ff_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#ffe7f9_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f9f5ff_0%,_transparent_40%)]" />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ scale: 0, x: "100%", y: "100%" }}
            animate={{
              scale: [1, 1.2, 1],
              x: ["100%", "-100%"],
              y: ["100%", "-100%"],
            }}
            transition={{
              duration: 20,
              delay: i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Enhanced badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center"
          >
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-100/80 to-pink-100/80 text-purple-600 text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Solutions
                <Star className="w-4 h-4" />
              </span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-50 blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 mb-24"
          >
            {/* Enhanced title with animated gradient */}
            <h2 className="text-6xl font-light text-gray-900 mb-8 relative">
              <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Innovative Solutions
              </span>
              <br />
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                for Modern Hiring
              </span>
              {/* Decorative orbs */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -left-8 -top-8 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply blur-xl opacity-70"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -right-8 -bottom-8 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply blur-xl opacity-70"
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your technical hiring process with our AI-powered platform that combines
              accuracy, efficiency, and fairness. Revolutionize your recruitment journey with
              cutting-edge technology.
            </p>
          </motion.div>

          {/* Enhanced solution cards container */}
          <div className="relative space-y-40">
            {/* Animated gradient line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4), transparent)"
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <SolutionCard
                  {...solution}
                  isReversed={index % 2 !== 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 -right-16 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          delay: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 -left-16 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
    </section>
  );
}

export default SolutionsSection;