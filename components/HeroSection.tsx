import React from 'react';
import { motion } from 'motion/react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-dark-blue overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 via-dark-blue/40 to-dark-blue"></div>
        
        <div className="relative z-10 p-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block text-accent-teal font-mono text-sm uppercase tracking-widest mb-6 px-4 py-1 border border-accent-teal/30 rounded-full bg-accent-teal/5">
                IT Specialist & Data Scientist
              </span>
              <h1 id="hero-heading" className="text-5xl md:text-8xl font-bold mb-8 font-inter tracking-tighter leading-none">
                Turning complex data into <span className="text-accent-teal italic">strategic decisions</span>
              </h1>
              <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
                Empowering businesses and institutions through statistical precision and robust cybersecurity frameworks. I bridge the gap between data intelligence and infrastructure resilience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                    href="#projects"
                    className="w-full sm:w-auto bg-accent-teal text-white font-semibold py-4 px-10 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform active:scale-95 shadow-lg shadow-accent-teal/20"
                >
                    View My Work
                </a>
                <a
                    href="#contact"
                    className="w-full sm:w-auto bg-transparent border border-gray-500 text-white font-semibold py-4 px-10 rounded-lg hover:bg-white hover:text-dark-blue transition-all duration-300 transform active:scale-95"
                >
                    Let's Talk
                </a>
              </div>
            </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
    </section>
  );
};

export default HeroSection;
