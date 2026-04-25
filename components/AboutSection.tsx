import React from 'react';
import { motion } from 'motion/react';

const StatCard: React.FC<{ value: string; label: string; index: number }> = ({ value, label, index }) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
    >
        <p className="text-3xl font-bold text-accent-teal font-inter mb-1">{value}</p>
        <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">{label}</p>
    </motion.div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 overflow-hidden" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-2xl">
              <img
                src="/pfp.png"
                alt="Olal Abdu Karim"
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-all duration-700"
              />
            </div>
            {/* Decal Background Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-dark-blue/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12"
          >
            <span className="text-accent-teal font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">The Mission</span>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-8 font-inter text-dark-blue dark:text-white leading-tight">
              Bridging statistical precision with <span className="text-accent-teal italic">infrastructure resilience.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
              <p>
                My professional journey is defined by a central paradox: how to make massive, chaotic data sets behave reliably while ensuring the systems that house them remain impenetrable. As an IT Specialist and Data Scientist with a background in Statistics from <strong>Makerere University</strong>, I don't just find patterns—I build the shields that protect them.
              </p>
              <p>
                I specialize in translating technical vulnerabilities into business risks and data trends into strategic maneuvers. Whether it's reducing transaction fraud through predictive modeling or architecting security policies for regional institutions, my goal is always the same: <strong>measurable results.</strong>
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard value="2.5+" label="Years Industry" index={0} />
                <StatCard value="B.Stat" label="Academic Foundation" index={1} />
                <StatCard value="12+" label="Key Projects" index={2} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
