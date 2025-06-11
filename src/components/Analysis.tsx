import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, TrendingUp, AlertCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

const Analysis: React.FC = () => {
  const strengths = [
    {
      title: "Founder's Specialized Experience",
      description: "A decade in GTM recruitment for software and cleantech.",
      icon: TrendingUp
    },
    {
      title: "Clear Niche Focus",
      description: "Differentiates from generalist firms, allowing for deeper expertise.",
      icon: CheckCircle
    },
    {
      title: "Comprehensive Service Suite",
      description: "Holistic talent acquisition and advisory services.",
      icon: CheckCircle
    },
    {
      title: "Fresh Start Opportunity",
      description: "New entity can build its brand without legacy constraints.",
      icon: CheckCircle
    }
  ];

  const challenges = [
    {
      title: "Perception & Due Diligence Risk",
      description: "The \"phoenix\" perception arising from Pentire Group's liquidation shortly after Mor Search's incorporation may raise questions from sophisticated clients.",
      icon: AlertTriangle
    },
    {
      title: "Intense Market Competition",
      description: "Faces rivals from large global firms, established boutiques, and independent specialists.",
      icon: AlertCircle
    },
    {
      title: "Key-Person Risk & Scalability",
      description: "Initial value is heavily tied to the founder, making the business model difficult to scale.",
      icon: AlertTriangle
    },
    {
      title: "Building Corporate Brand",
      description: "Must convert founder's personal brand into corporate brand equity from scratch.",
      icon: AlertCircle
    },
    {
      title: "Nascent Company Status",
      description: "No corporate track record or financial history, making it hard to compete for large retained searches.",
      icon: AlertTriangle
    }
  ];

  return (
    <AnimatedSection id="analysis" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Strategic Analysis
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            While leveraging significant founder experience, Mor Search Ltd. also faces considerable business risks 
            and challenges related to its recent inception and the history of its preceding ventures.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5" />
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mr-4">
                    <CheckCircle className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white">Strengths</h3>
                </div>
                
                <div className="space-y-6">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-2 rounded-lg bg-green-500/20 mt-1 flex-shrink-0">
                        <strength.icon className="text-green-400 w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-green-300 font-semibold text-lg mb-2">{strength.title}</h4>
                        <p className="text-white/90 leading-relaxed">{strength.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/5" />
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="p-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mr-4">
                    <AlertTriangle className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white">Challenges & Key Risks</h3>
                </div>
                
                <div className="space-y-6">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-2 rounded-lg bg-red-500/20 mt-1 flex-shrink-0">
                        <challenge.icon className="text-red-400 w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-red-300 font-semibold text-lg mb-2">{challenge.title}</h4>
                        <p className="text-white/90 leading-relaxed">{challenge.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Analysis;