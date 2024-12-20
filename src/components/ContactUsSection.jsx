import { motion } from 'framer-motion';

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
      opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <motion.section
      className="relative py-16 bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? We're here to help.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>

            <div className="col-span-2 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUsSection;
