import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#profile', label: 'Profile' },
    { href: '#services', label: 'Services' },
    { href: '#founder', label: 'Founder' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#icp', label: 'ICP & Market' },
    { href: '#analysis', label: 'Analysis' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-slate-900/80 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Mor Search Analysis
        </motion.a>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`nav-link relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.href.substring(1) 
                  ? 'text-blue-400 bg-blue-500/20' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>
      
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden backdrop-blur-xl bg-slate-900/95 border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-blue-400 bg-blue-500/20' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;