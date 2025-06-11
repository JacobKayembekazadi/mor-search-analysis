import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Building } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

const ICP: React.FC = () => {
  return (
    <AnimatedSection id="icp" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Ideal Customer Profile & Market
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            This section defines the specific clients Mor Search aims to serve and provides context 
            on the competitive environment it operates within.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-10 h-full">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mr-4">
                  <Target className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-semibold text-white">Ideal Customer Profile</h3>
              </div>
              
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Mor Search explicitly targets senior decision-makers within scaling technology companies:
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Users, label: 'Roles', value: 'CEOs, First-Time Founders, and Senior Leaders' },
                  { icon: Building, label: 'Industries', value: 'Software and Cleantech sectors' },
                  { icon: TrendingUp, label: 'Need', value: 'Requirement to build or expand their Go-To-Market (GTM) teams' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                      <item.icon className="text-blue-400 w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold text-lg">{item.label}:</span>
                      <p className="text-white/90 mt-1 leading-relaxed">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-10 h-full">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mr-4">
                  <Users className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-semibold text-white">Competitive Landscape</h3>
              </div>
              
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                The report indicates a highly competitive and fragmented market. Mor Search Ltd. competes against:
              </p>
              
              <div className="space-y-6">
                {[
                  'Large, global retained search firms with extensive resources',
                  'Established, technology-focused boutique search firms',
                  'A wide network of independent specialist recruiters'
                ].map((competitor, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-3 flex-shrink-0" />
                    <p className="text-white/90 leading-relaxed">{competitor}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ICP;