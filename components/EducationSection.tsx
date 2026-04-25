import React from 'react';
import { motion } from 'motion/react';
import { EducationItem } from '../types';

const educationData: EducationItem[] = [
    {
        degree: 'Bachelor of Statistics',
        institution: 'Makerere University',
        period: 'Graduated 2025'
    },
     {
        degree: 'Google Data Analytics Professional Certificate',
        institution: 'Coursera',
        period: 'Completed 2022'
    }
];

const EducationCard: React.FC<EducationItem & { index: number }> = ({ degree, institution, period, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
        <div>
            <h3 className="text-xl font-bold font-inter text-dark-blue dark:text-white leading-tight">{degree}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-semibold mt-1">{institution}</p>
        </div>
        <p className="text-accent-teal font-mono text-xs font-bold uppercase tracking-widest bg-accent-teal/5 px-4 py-2 rounded-full border border-accent-teal/10">
            {period}
        </p>
    </motion.div>
);

const EducationSection: React.FC = () => {
    return (
        <section id="education" className="py-24 bg-white dark:bg-gray-900" aria-labelledby="education-heading">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <h2 id="education-heading" className="text-4xl md:text-5xl font-bold mb-6 font-inter text-dark-blue dark:text-white">Academic Foundation</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Rigorous statistical training meeting modern technical certifications.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    {educationData.map((item, index) => (
                        <EducationCard key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
