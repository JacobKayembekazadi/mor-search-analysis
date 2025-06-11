import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Map, Lightbulb } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: 'Talent Search',
      description: 'Specializes in identifying and securing software sales and marketing professionals crucial for market penetration and product success.',
      color: 'from-blue-500 to-blue-600',
      glowColor: 'shadow-blue-500/25'
    },
    {
      icon: Users,
      title: 'Retained Search',
      description: 'A premium, exclusive service for filling key leadership and executive positions through a deep, strategic partnership.',
      color: 'from-purple-500 to-purple-600',
      glowColor: 'shadow-purple-500/25'
    },
    {
      icon: Map,
      title: 'Market Mapping',
      description: 'Strategic analysis of the talent landscape to pinpoint top professionals, identify trends, and uncover hidden talent pools.',
      color: 'from-indigo-500 to-indigo-600',
      glowColor: 'shadow-indigo-500/25'
    },
    {
      icon: Lightbulb,
      title: 'Talent Advisory',
      description: 'Consulting on recruitment strategy, employer branding, compensation, international hiring, and HR-tech solutions.',
      color: 'from-cyan-500 to-cyan-600',
      glowColor: 'shadow-cyan-500/25'
    }
  ];

  return (
    <AnimatedSection id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Service Offerings
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Mor Search provides a comprehensive suite of services designed to meet the talent needs 
            of scaling technology companies. Explore each service to understand our approach.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative h-80"
            >
              <motion.div
                className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} 
                  opacity-0 blur-xl transition-opacity duration-500
                  ${hoveredCard === index ? 'opacity-30' : 'opacity-0'}
                `}
                animate={{
                  scale: hoveredCard === index ? 1.05 : 1,
                }}
              />
              
              <GlassCard className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <motion.div
                    className={`
                      p-4 rounded-full bg-gradient-to-br ${service.color} 
                      w-16 h-16 flex items-center justify-center mb-6
                      ${hoveredCard === index ? service.glowColor : ''}
                    `}
                    animate={{
                      rotate: hoveredCard === index ? 360 : 0,
                      scale: hoveredCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-white w-8 h-8" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                </div>
                
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.p
                      className="text-blue-100 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                
                {hoveredCard !== index && (
                  <motion.div
                    className="text-blue-200/60 text-sm"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hoveredCard === index ? 0 : 1 }}
                  >
                    Hover to learn more
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;