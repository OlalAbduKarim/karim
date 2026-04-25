import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon, CloseIcon } from './icons/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark-blue/90 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative z-10 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              aria-label="Close project details" 
              className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors md:top-6 md:right-6"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            <div className="md:w-5/12 h-64 md:h-auto relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent md:hidden"></div>
            </div>

            <div className="md:w-7/12 p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <h2 id="project-modal-title" className="text-3xl font-bold text-dark-blue dark:text-white font-inter mb-4 leading-tight">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-accent-teal/10 dark:bg-accent-teal/20 text-accent-teal dark:text-teal-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {project.problem && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-teal mb-2">The Problem</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.problem}</p>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-teal mb-2">My Approach</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.approach}</p>
                  </div>
                )}
                {project.outcome && (
                  <div className="bg-accent-teal/5 p-6 rounded-2xl border border-accent-teal/10">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-teal mb-2 font-mono">The Outcome</h4>
                    <p className="text-dark-blue dark:text-white font-medium leading-relaxed">{project.outcome}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-6 mt-10 pt-8 border-t border-gray-100 dark:border-gray-700">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-dark-blue dark:text-white hover:text-accent-teal transition-colors font-semibold"
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-dark-blue dark:text-white hover:text-accent-teal transition-colors font-semibold"
                  >
                    <GithubIcon className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
