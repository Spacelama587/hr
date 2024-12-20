import { motion } from 'framer-motion';

const FeaturesCard = ({ icon, title, description, color, index }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02 }}
      className={`${color} rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white mb-6">
        {icon}
      </div>
      <div className="relative">
        <span className="absolute -left-6 top-1 text-4xl font-bold text-black/5">
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-[#7C3AED] to-[#FF4D8F] bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
