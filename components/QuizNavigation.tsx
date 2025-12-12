'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface QuizNavigationProps {
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
  isLastQuestion: boolean
}

export default function QuizNavigation({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
}: QuizNavigationProps) {
  return (
    <motion.div
      className="flex justify-end items-center gap-4 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* Previous Button */}
      <motion.button
        className={cn('nav-button', !canGoPrevious && 'opacity-50')}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous question"
        whileHover={canGoPrevious ? { scale: 1.1 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-quiz-text"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Next/Submit Button */}
      {isLastQuestion ? (
        // Submit Button for last question
        <motion.button
          className={cn(
            'px-8 py-3 rounded-quiz-button bg-quiz-answer-selected text-quiz-text font-medium',
            'shadow-quiz-element transition-all duration-300',
            !canGoNext && 'opacity-50 cursor-not-allowed',
            canGoNext && 'hover:shadow-quiz-hover hover:scale-105'
          )}
          onClick={onNext}
          disabled={!canGoNext}
          aria-label="Submit quiz"
          whileHover={canGoNext ? { scale: 1.05 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
        >
          Submit
        </motion.button>
      ) : (
        // Next Arrow for other questions
        <motion.button
          className={cn('nav-button', !canGoNext && 'opacity-50')}
          onClick={onNext}
          disabled={!canGoNext}
          aria-label="Next question"
          whileHover={canGoNext ? { scale: 1.1 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-quiz-text"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </motion.div>
  )
}
