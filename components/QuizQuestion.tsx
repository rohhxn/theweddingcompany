'use client'

import { motion } from 'framer-motion'
import { Question } from '@/types/quiz'
import { cn } from '@/lib/utils'

interface QuizQuestionProps {
  question: Question
  questionNumber: number
  selectedAnswer: string | undefined
  onAnswer: (questionId: string, answer: string) => void
}

export default function QuizQuestion({
  question,
  questionNumber,
  selectedAnswer,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Question */}
      <motion.div
        className="question-box"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="font-semibold">{questionNumber}. </span>
        {question.question}
      </motion.div>

      {/* Answer Options */}
      <div className="space-y-3" role="radiogroup" aria-labelledby={`question-${question.id}`}>
        {question.options.map((option, index) => (
          <motion.button
            key={option}
            className={cn(
              'answer-option w-full text-left',
              selectedAnswer === option && 'selected'
            )}
            onClick={() => onAnswer(question.id, option)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            role="radio"
            aria-checked={selectedAnswer === option}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onAnswer(question.id, option)
              }
            }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
