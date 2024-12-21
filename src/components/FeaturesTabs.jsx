import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: 'AI Matching',
    description: 'Match candidates with positions using advanced machine learning algorithms that analyze skills, experience, and cultural fit scores.',
    image: '/Untitled2.png',
  },
  {
    title: 'Smart Analytics',
    description: 'Get real-time insights into your hiring pipeline with detailed analytics, custom reports, and predictive hiring metrics.',
    image: '/2799912.jpg',
  },
  {
    title: 'Automated Screening',
    description: 'Save time with automated candidate screening that uses AI to evaluate resumes and identify top candidates instantly.',
    image: '/20943798.jpg',
  },
  {
    title: 'Team Collaboration',
    description: 'Enable seamless collaboration with shared candidate profiles, structured feedback forms, and integrated team communications.',
    image: '/Wavy_Bus-03_Single-06.jpg',
  },
];

const FeaturesTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [tabOrientation, setTabOrientation] = useState('horizontal');
  
    useEffect(() => {
      const lgMediaQuery = window.matchMedia('(min-width: 1024px)');
  
      function onMediaQueryChange({ matches }) {
        setTabOrientation(matches ? 'vertical' : 'horizontal');
      }
  
      onMediaQueryChange(lgMediaQuery);
      lgMediaQuery.addEventListener('change', onMediaQueryChange);
  
      return () => {
        lgMediaQuery.removeEventListener('change', onMediaQueryChange);
      };
    }, []);
  
    const handleKeyDown = (e, index) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % features.length);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + features.length) % features.length);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          setSelectedIndex(index);
          break;
      }
    };
  
    return (
      <section
        id="features"
        aria-label="Features for hiring platform"
        className="relative overflow-hidden bg-gradient-to-b from-purple-600 to-pink-500 pb-28 pt-20 sm:py-32"
      >
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>
  
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Transform your hiring process.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg tracking-tight text-purple-100"
            >
              Streamline recruitment with AI-powered tools and analytics that help you make better hiring decisions.
            </motion.p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
              <div
                role="tablist"
                aria-orientation={tabOrientation}
                className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
              >
                {features.map((feature, featureIndex) => (
                  <div
                    key={feature.title}
                    className={`group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 transition-all duration-200 ${
                      selectedIndex === featureIndex
                        ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                        : 'hover:bg-white/10 lg:hover:bg-white/5'
                    }`}
                  >
                    <h3>
                      <button
                        role="tab"
                        aria-selected={selectedIndex === featureIndex}
                        aria-controls={`panel-${featureIndex}`}
                        id={`tab-${featureIndex}`}
                        tabIndex={selectedIndex === featureIndex ? 0 : -1}
                        className={`relative font-display text-lg [&:not(:focus-visible)]:focus:outline-none ${
                          selectedIndex === featureIndex
                            ? 'text-purple-600 lg:text-white'
                            : 'text-purple-100 hover:text-white lg:text-white'
                        }`}
                        onClick={() => setSelectedIndex(featureIndex)}
                        onKeyDown={(e) => handleKeyDown(e, featureIndex)}
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        {feature.title}
                      </button>
                    </h3>
                    <p
                      className={`mt-2 hidden text-sm lg:block ${
                        selectedIndex === featureIndex
                          ? 'text-white'
                          : 'text-purple-100 group-hover:text-white'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {features.map((feature, featureIndex) => (
                  featureIndex === selectedIndex && (
                    <motion.div
                      key={feature.title}
                      role="tabpanel"
                      id={`panel-${featureIndex}`}
                      aria-labelledby={`tab-${featureIndex}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                          {feature.description}
                        </p>
                      </div>
                      <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-purple-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                        <img
                          className="w-full"
                          src={feature.image}
                          alt={feature.title}
                          width={800}
                          height={600}
                        />
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesTabs;