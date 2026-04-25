import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../types';

const skillsData: { category: string; skills: string[] }[] = [
  {
    category: 'Data Analysis & Visualization',
    skills: [
      'Statistical Modeling',
      'Data Storytelling',
      'Exploratory Data Analysis',
      'Advanced Visualization (D3, Seaborn)',
      'Large-scale Census Analysis',
    ],
  },
  {
    category: 'Machine Learning & Predictive Modeling',
    skills: [
      'Neural Networks (CNN, RNN)',
      'Classification & Clustering',
      'Regression Models',
      'Model Evaluation & Tuning',
      'Fraud Detection Algorithms',
    ],
  },
  {
    category: 'Business Intelligence & Dashboards',
    skills: [
      'Strategic Decision Support',
      'Interactive Power BI/Tableau Dashboards',
      'Real-time Performance Monitoring',
      'KPI Trackers & Automated Reporting',
      'Stakeholder Insight Delivery',
    ],
  },
  {
    category: 'Digital & Technical Solutions',
    skills: [
      'Python & R Programming',
      'SQL & Database Management',
      'Cybersecurity Frameworks (NIST, ISO)',
      'Security Risk Assessment',
      'Cloud Architecture Awareness',
    ],
  },
];

const SkillCard: React.FC<{ category: string; skills: string[]; index: number }> = ({ category, skills, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:shadow-gray-700/50 transition-all duration-300"
  >
    <div className="w-12 h-1 bg-accent-teal mb-6 rounded-full"></div>
    <h3 className="text-xl font-bold text-dark-blue dark:text-white mb-6 font-inter leading-tight">{category}</h3>
    <ul className="space-y-3">
      {skills.map((skill) => (
        <li key={skill} className="flex items-start">
          <span className="text-accent-teal mr-2 mt-1">•</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {skill}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800/50" aria-labelledby="skills-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-6 font-inter text-dark-blue dark:text-white">Structured Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A focused approach to problem-solving, bridging the gap between raw technical expertise and high-level strategic intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <SkillCard key={group.category} category={group.category} skills={group.skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
