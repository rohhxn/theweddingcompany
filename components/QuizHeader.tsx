'use client';

import { motion } from 'framer-motion';

interface QuizHeaderProps {
  title: string;
  subtitle: string;
}

export default function QuizHeader({ title, subtitle }: QuizHeaderProps) {
  return (
    <motion.div
      className="text-center mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Title with "Test" in italic serif, rest in serif */}
      <h1 className="quiz-title mb-2">
        <span style={{ fontStyle: 'italic' }}>Test</span> Your Knowledge
      </h1>
      <p className="quiz-subtitle">{subtitle}</p>
    </motion.div>
  );
}
