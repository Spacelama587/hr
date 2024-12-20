import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="relative py-10 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <img src="/PramitiHR_Vertical_jpg.jpg" alt="Logo" className="h-10" />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 hover:text-purple-600 transition"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <Facebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <Twitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <Instagram />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Pramiti HR. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
