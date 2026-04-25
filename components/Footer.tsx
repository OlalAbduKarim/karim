
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded text-white font-bold font-mono text-xs">
              OK
            </div>
            <span className="text-white font-bold font-inter tracking-tighter">Olal Abdu Karim</span>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">
            <a href="#about" className="hover:text-accent-teal transition-colors">Strategy</a>
            <a href="#skills" className="hover:text-accent-teal transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-accent-teal transition-colors">Currency</a>
          </div>

          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Olal Abdu Karim. <span className="hidden sm:inline">Built for Strategic Impact.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
