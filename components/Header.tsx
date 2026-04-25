import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MoonIcon, SunIcon } from './icons/Icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void; isActive: boolean }> = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive ? 'text-accent-teal' : 'text-gray-600 dark:text-gray-300 hover:text-accent-teal'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {children}
    {isActive && (
      <motion.div
        layoutId="nav-underline"
        className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent-teal"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { href: '#about', text: 'Strategy' },
    { href: '#skills', text: 'Capabilities' },
    { href: '#experience', text: 'Impact' },
    { href: '#projects', text: 'Currency' },
    { href: '#education', text: 'Foundation' },
    { href: '#contact', text: 'Connect' },
  ];
  
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const allLinks = [{ href: '#home', text: 'Home' }, ...navLinks];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100;
      
      let currentSectionId = '';

      for (const link of allLinks) {
          const section = document.querySelector(link.href) as HTMLElement;
          if (section && section.offsetTop <= scrollPosition) {
              currentSectionId = section.id;
          }
      }
      
      if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight) {
        currentSectionId = 'contact';
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (hash: string) => {
    setIsOpen(false);
    setActiveSection(hash.substring(1));
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 border-gray-100 dark:border-gray-800' 
        : 'bg-transparent py-6 border-transparent'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={() => handleLinkClick('#home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-dark-blue dark:bg-white flex items-center justify-center rounded-lg group-hover:bg-accent-teal dark:group-hover:bg-accent-teal transition-colors duration-300">
                <span className="text-white dark:text-dark-blue font-bold text-xl font-mono">OK</span>
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-dark-blue dark:text-white text-lg font-bold font-inter tracking-tighter">Olal Abdu Karim</span>
                <span className="text-[10px] text-accent-teal font-mono uppercase tracking-widest mt-0.5">Strategic Intelligence</span>
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                href={link.href} 
                onClick={() => handleLinkClick(link.href)} 
                isActive={activeSection === link.href.substring(1)}
              >
                {link.text}
              </NavLink>
            ))}
             <button
              onClick={toggleTheme}
              className="ml-6 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-accent-teal transition-colors focus:outline-none bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-accent-teal focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-blue dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-white dark:bg-gray-900 absolute top-full left-0 right-0 border-b border-gray-100 dark:border-gray-800 shadow-xl"
              >
                <div className="px-6 py-8 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`text-2xl font-bold font-inter tracking-tighter ${
                        activeSection === link.href.substring(1) ? 'text-accent-teal' : 'text-dark-blue dark:text-white'
                      }`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;