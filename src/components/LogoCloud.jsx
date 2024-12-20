import React from 'react';
import { motion } from 'framer-motion';

const LogoCloud = () => {
  const logos = [
    {
      name: 'Vercel',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
    },
    {
      name: 'Nextjs',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
    },
    {
      name: 'Prime',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
    },
    {
      name: 'Trustpilot',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
    },
    {
      name: 'Webflow',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
    },
    {
      name: 'Airbnb',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
    },
    {
      name: 'Tina',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
    },
    {
      name: 'Stackoverflow',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
    },
    {
      name: 'mistral',
      url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
    },
  ];

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies using our platform to transform their HR operations
          </p>
        </div>

        {/* Logo Cloud */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex w-full"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
            }}
          >
            {/* First set of logos */}
            <div className="flex animate-logo-cloud gap-8">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="w-32 h-16 flex items-center justify-center px-4 flex-shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex animate-logo-cloud gap-8">
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="w-32 h-16 flex items-center justify-center px-4 flex-shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;