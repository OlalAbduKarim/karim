import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const projectsData: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    title: 'Loan Default Prediction Engine',
    description: 'Advanced neural network model designed to mitigate financial risk for lending institutions.',
    problem: 'Financial institutions faced significant losses due to unvetted loans and high default rates among borrowers.',
    approach: 'Developed a deep learning model using CNN and RNN architectures to analyze historical credit data and identify high-risk profiles.',
    outcome: 'Improved risk identification accuracy by 22% and reduced estimated loan default rates by 15% through precision vetting.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    title: 'Corruption & Economic Growth Model',
    description: 'Quantitative analysis mapping the direct impact of corruption variables on national GDP growth.',
    problem: 'Policy makers lacked quantifiable data on how institutional corruption specifically stalls economic momentum.',
    approach: 'Conducted multi-variate regression analysis and longitudinal statistical modeling on 10+ years of economic data.',
    outcome: 'Provided concrete data-backed policy recommendations used for regional economic stability planning.',
    technologies: ['R', 'STATA', 'Statistical Modeling', 'econometrics'],
  },
  {
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
    title: 'Legal Intelligence Dashboard',
    description: 'Bespoke BI solution for a top-tier law firm to track case trends and resource allocation.',
    problem: 'The firm struggled with disjointed case reporting, leading to inefficient resource allocation and missed case trends.',
    approach: 'Engineered a centralized data warehouse and an interactive dashboard for real-time case analytics.',
    outcome: 'Improved decision-making efficiency for partners by 30%, enabling data-driven case prioritization.',
    technologies: ['Power BI', 'SQL', 'Excel VBA', 'Data Warehousing'],
  },
  {
    image: 'https://images.unsplash.com/photo-1474487059418-f21b3f3ca66d?q=80&w=1000&auto=format&fit=crop',
    title: 'Railway Performance Monitor',
    description: 'Performance tracking system for national railway operations to optimize scheduling.',
    problem: 'Lack of real-time visibility into transit metrics caused frequent scheduling conflicts and operational delays.',
    approach: 'Implemented an automated visualization suite that pulls live transit data to monitor delay patterns.',
    outcome: 'Enhanced scheduling accuracy and provided operational heads with immediate visibility into bottleneck sources.',
    technologies: ['D3.js', 'Python', 'Web Scraping', 'API Integration'],
  },
];

const ProjectCard: React.FC<{ project: Project; index: number; onCardClick: (project: Project) => void }> = ({ project, index, onCardClick }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-accent-teal/50 transition-all duration-500 cursor-pointer"
        onClick={() => onCardClick(project)}
    >
        <div className="aspect-[16/10] overflow-hidden">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" 
            />
        </div>
        <div className="p-8">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-inter text-dark-blue dark:text-white leading-tight group-hover:text-accent-teal transition-colors">
                    {project.title}
                </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                 {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const ProjectsSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <section id="projects" className="py-24 bg-white dark:bg-gray-900" aria-labelledby="projects-heading">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-16">
                        <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-6 font-inter text-dark-blue dark:text-white">Applied Currency</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Theoretical knowledge is a baseline. These projects represent real-world problems solved through strategic data application.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} index={index} project={project} onCardClick={setSelectedProject} />
                        ))}
                    </div>
                </div>
            </section>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
};

export default ProjectsSection;
