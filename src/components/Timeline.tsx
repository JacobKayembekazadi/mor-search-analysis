import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import type { ModalContent } from '../hooks/useModal';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

interface TimelineProps {
  onEventClick: (content: ModalContent) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onEventClick }) => {
  const chartRef = useRef<ChartJS>(null);

  const eventDetails: Record<string, ModalContent> = {
    'Progress People': {
      title: 'Progress People Rebranded',
      date: 'July 2016',
      content: 'Tom Pugh-Jones is noted as a co-founder of Progress People, a rebranded recruitment agency focusing on mid to senior executive search. This marks an early point in his claimed decade of recruitment experience.'
    },
    'Pentire Group Launch': {
      title: 'Pentire Group Ltd. Launched',
      date: 'March 2020',
      content: 'Co-founded by Tom Pugh-Jones, this venture had a dual focus: tech recruitment (mirroring Mor Search\'s niche) and coastal real estate investment.'
    },
    'Pentire House Opening': {
      title: 'Pentire House Co-working Space Opens',
      date: 'April 2021',
      content: 'A real estate project by Pentire Group Ltd., this redeveloped building became the operational hub and registered address for both Pentire Group and later, Mor Search Ltd.'
    },
    'Mor Search Inc.': {
      title: 'Mor Search Ltd. Incorporated',
      date: 'January 18, 2024',
      content: 'A new entity is formed, focusing solely on tech GTM recruitment, founded by Tom Pugh-Jones and operating from Pentire House.'
    },
    'Pentire Group Liq.': {
      title: 'Pentire Group Ltd. Enters Liquidation',
      date: 'February 12, 2024',
      content: 'Less than a month after Mor Search\'s incorporation, liquidators were appointed for Pentire Group Ltd. This close timing suggests a strategic restructuring, or a "phoenix" activity.'
    }
  };

  const timelineData = {
    datasets: [{
      label: 'Key Events',
      data: [
        { x: new Date('2016-07-01'), y: 0, event: 'Progress People' },
        { x: new Date('2020-03-01'), y: 0, event: 'Pentire Group Launch' },
        { x: new Date('2021-04-01'), y: 0, event: 'Pentire House Opening' },
        { x: new Date('2024-01-18'), y: 0, event: 'Mor Search Inc.' },
        { x: new Date('2024-02-12'), y: 0, event: 'Pentire Group Liq.' }
      ],
      backgroundColor: '#60a5fa',
      borderColor: '#3b82f6',
      pointRadius: 12,
      pointHoverRadius: 18,
      pointBorderWidth: 3,
      pointBorderColor: '#ffffff',
      pointHoverBorderColor: '#60a5fa',
      pointHoverBackgroundColor: '#1e40af',
    }],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    onClick: (event: any, elements: any[]) => {
      if (elements.length > 0) {
        const dataPoint = timelineData.datasets[elements[0].datasetIndex].data[elements[0].index];
        const details = eventDetails[dataPoint.event];
        if (details) {
          onEventClick(details);
        }
      }
    },
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'year' as const,
        },
        position: 'bottom' as const,
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 14,
            weight: '500',
          }
        }
      },
      y: {
        display: false,
        min: -1,
        max: 1
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#60a5fa',
        bodyColor: '#e2e8f0',
        borderColor: '#3b82f6',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return context.raw.event;
          },
          title: function() {
            return 'Click to learn more';
          }
        }
      }
    }
  };

  return (
    <AnimatedSection id="timeline" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Founder's Venture Timeline
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            This interactive timeline visualizes the chronology of Tom Pugh-Jones's key business ventures. 
            Click on the points to understand the evolution from Progress People to the dual-focus Pentire Group, 
            and the subsequent strategic restructuring that led to the formation of Mor Search Ltd.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <GlassCard className="p-8">
            <div className="relative w-full h-96">
              <Chart
                ref={chartRef}
                type="scatter"
                data={timelineData}
                options={options}
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-blue-200/80 text-sm">
                💡 Click on any point to explore the details of each milestone
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Timeline;