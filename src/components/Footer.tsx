import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="relative py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Interactive Report
            </h3>
            <p className="text-white/80 mb-2">
              © 2024 Interactive Report. All data derived from public sources.
            </p>
            <p className="text-blue-200/60 text-sm max-w-2xl mx-auto leading-relaxed">
              This is a synthesized, interactive representation of an analytical report and not an official publication by Mor Search Ltd.
              Created with React, Three.js, and Framer Motion for an immersive analytical experience.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-8 flex justify-center space-x-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="#home"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>Back to Top</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;