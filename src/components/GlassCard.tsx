import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  hover = true 
}) => {
  return (
    <motion.div
      className={`
        backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
        shadow-2xl shadow-blue-500/10 relative overflow-hidden
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
      } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GlassCard;