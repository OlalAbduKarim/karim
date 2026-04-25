import React from 'react';
import { motion } from 'motion/react';
import { Experience } from '../types';

const experienceData: Experience[] = [
    {
        role: 'IT Specialist & Data Analyst',
        company: 'Stelar Tech International',
        period: 'Jan 2022 - Present',
        description: [
            'Architected a data-driven risk management framework, resulting in a 25% year-over-year reduction in security incidents.',
            'Optimized data extraction processes for financial reporting, cutting manual processing time by 40%.',
            'Implemented automated vulnerability scanning and incident response protocols, achieving 99.9% system uptime.',
            'Leveraged predictive modeling to identify high-risk financial patterns, preventing over $50k in potential transaction losses.',
        ]
    },
    {
        role: 'Data Analyst',
        company: 'Confidential Law Firm',
        period: '2021 - 2022',
        description: [
            'Improved decision-making efficiency by 30% through the development of interactive data dashboards for legal case trends.',
            'Streamlined resource allocation by identifying bottleneck case types using historical performance data.',
            'Presented complex statistical findings to senior partners, translating raw data into actionable business intelligence.',
        ]
    }
];

const ExperienceCard: React.FC<Experience & { index: number }> = ({ role, company, period, description, index }) => (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
    >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
                <h3 className="text-2xl font-bold font-inter text-dark-blue dark:text-white leading-tight">{role}</h3>
                <p className="text-accent-teal font-semibold mt-1 tracking-wide uppercase text-xs">{company}</p>
            </div>
            <span className="inline-block text-gray-500 dark:text-gray-400 font-mono text-[10px] bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700">
                {period}
            </span>
        </div>
        <ul className="space-y-4">
            {description.map((item, id) => (
                <li key={id} className="flex items-start group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal/40 mt-2 mr-3 group-hover:bg-accent-teal transition-colors"></span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item}</p>
                </li>
            ))}
        </ul>
    </motion.div>
);

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800/30" aria-labelledby="experience-heading">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-6 font-inter text-dark-blue dark:text-white">Proven Track Record</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        A history of delivering measurable impact, from financial security to administrative intelligence.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto space-y-12">
                    {experienceData.map((exp, index) => (
                        <ExperienceCard key={index} index={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
