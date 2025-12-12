'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizResults({ score, totalQuestions, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Create animated value that counts from 0 to final percentage
  const motionValue = useSpring(0, { 
    duration: 1800,
    bounce: 0 
  });
  
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    motionValue.set(percentage);
  }, [motionValue, percentage]);

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center py-12"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* "Keep Learning!" Badge */}
      <motion.div
        className="px-6 py-2 bg-white rounded-full shadow-sm mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <span className="text-sm font-medium text-gray-700">Keep Learning!</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-serif italic text-[#15313D] mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Your Final score is
      </motion.h2>

      {/* Animated Score */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
      >
        <div className="flex items-start justify-center">
          <motion.span
            className="text-[120px] md:text-[140px] font-bold leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #15313D 0%, #2C5F6F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {rounded}
          </motion.span>
          <motion.span
            className="text-5xl md:text-6xl font-bold mt-4 ml-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #15313D 0%, #2C5F6F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            %
          </motion.span>
        </div>
      </motion.div>

      {/* Start Again Button */}
      <motion.button
        onClick={onRestart}
        className="px-8 py-3 bg-[#D4EEF7] hover:bg-[#C5E5F4] text-[#15313D] font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Again
      </motion.button>
    </motion.div>
  );
}
