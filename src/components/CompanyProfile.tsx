import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

const CompanyProfile: React.FC = () => {
  const profileData = [
    {
      icon: Building2,
      title: 'Corporate Identity',
      items: [
        { label: 'Name', value: 'Mor Search Ltd.' },
        { label: 'Number', value: '15423937' },
        { label: 'Incorporated', value: 'January 18, 2024' }
      ]
    },
    {
      icon: MapPin,
      title: 'Location & Founder',
      items: [
        { label: 'Address', value: 'Pentire House, Newquay, Cornwall, UK' },
        { label: 'Founder', value: 'Tom Pugh-Jones' }
      ]
    },
    {
      icon: Target,
      title: 'Business Purpose',
      items: [
        { 
          label: 'Mission', 
          value: 'Identifying and building Go-To-Market (GTM) leadership and teams for global technology companies.' 
        }
      ]
    }
  ];

  return (
    <AnimatedSection id="profile" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Company Profile
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Mor Search Ltd. is a new entrant in the executive search market, incorporated in early 2024. 
            This section details its core corporate identity, purpose, and foundational elements.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {profileData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                    <item.icon className="text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                </div>
                <div className="space-y-4">
                  {item.items.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      <span className="text-blue-300 font-medium">{detail.label}:</span>
                      <p className="text-white/90 mt-1">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GlassCard className="p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">The "Mor - Pledge"</h3>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                A commitment to donate 1% of company profits to ocean conservation charities. 
                The name "Mor" is Cornish for "sea," linking the pledge to the company's coastal Cornwall roots 
                and providing a key brand differentiator.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default CompanyProfile;