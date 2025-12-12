'use client';

import { motion } from 'framer-motion';

interface QuizProgressProps {
  current: number;
  total: number;
  percentage: number;
}

export default function QuizProgress({ current, total, percentage }: QuizProgressProps) {
  return (
    <div className="mb-4">
      {/* Segmented Progress Bar - 4 segments */}
      <div 
        className="progress-segments" 
        role="progressbar" 
        aria-valuenow={percentage} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        {Array.from({ length: total }).map((_, index) => (
          <motion.div
            key={index}
            className={`progress-segment ${index < current ? 'active' : ''}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          />
        ))}
      </div>
      
      {/* Screen reader text */}
      <span className="sr-only">
        Question {current} of {total}
      </span>
    </div>
  );
}
