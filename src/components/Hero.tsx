import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Mor Search Ltd.
          </motion.h1>
          
          <motion.div
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Interactive Strategic Analysis
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Dive deep into the comprehensive analysis of a specialized executive search firm. 
              Explore the company's foundation, services, leadership, and the critical business 
              context surrounding its creation through an immersive, interactive experience.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/70 w-8 h-8" />
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;