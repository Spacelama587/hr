import { motion } from 'framer-motion';
function SolutionCard({ title, description, isReversed, imagePlaceholder }) {
    return (
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="flex-1">
          <div className="h-64 md:h-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={imagePlaceholder}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
  
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 md:text-7xl">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#e91e63', color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-black rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    );
  }
  
  export default SolutionCard;