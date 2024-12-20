import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';

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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
      <div className="inline-block">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-purple-50 text-[#7C3AED] text-sm font-semibold mb-4 "
            >
              Solutions
            </motion.span>
          </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
        <h2
  className="text-5xl font-light text-gray-900 mb-6"
  style={{
    background: "linear-gradient(to right, #FFD700, #8A2BE2, #00CED1, #FF69B4)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}
>
  Innovative Solutions for Modern Hiring
</h2>
<p
  className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"

>
  Transform your technical hiring process with our AI-powered platform that combines
  accuracy, efficiency, and fairness. Revolutionize your recruitment journey with
  cutting-edge technology.
</p>
        </motion.div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              {...solution}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;