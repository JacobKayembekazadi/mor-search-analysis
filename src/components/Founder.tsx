import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

const Founder: React.FC = () => {
  const testimonials = [
    {
      quote: "I have partnered with Tom on SaaS leadership hires, and he is now my go-to person... he understands the nuances of each search and delivers exceptional quality.",
      author: "Global Director of Human Resources",
      company: "Cloud, Enterprise"
    },
    {
      quote: "Highly recommend Tom for his exceptional work on our recent executive search project for the CRO and CEO roles.",
      author: "CEO/Founder",
      company: "EV Charging Solutions"
    },
    {
      quote: "Tom has a deep understanding of our business requirements and the market. He's professional, has a strong work ethic, and delivers top-tier candidates promptly.",
      author: "Director of Sales Enablement",
      company: "SaaS, Scale-Up"
    },
    {
      quote: "His market insights, especially across the UK and US, were invaluable. A true partner in our talent acquisition.",
      author: "Head of Talent",
      company: "SaaS, Scale-up"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const changeTestimonial = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    if (direction === 'prev') {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
    
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <AnimatedSection id="founder" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Leadership: Tom Pugh-Jones
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The expertise of Mor Search Ltd. is built on the founder's decade of specialized experience. 
            These testimonials provide social proof of his capabilities and are crucial for the new venture's credibility.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <Quote className="text-blue-400/30 w-16 h-16" />
            </div>
            
            <div className="p-12 pt-20 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center min-h-[200px] flex flex-col justify-center"
                >
                  <p className="text-2xl text-white leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <p className="text-blue-300 font-semibold text-lg">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-blue-400/80">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.button
              onClick={() => changeTestimonial('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              onClick={() => changeTestimonial('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
            
            <div className="flex justify-center space-x-2 pb-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Founder;