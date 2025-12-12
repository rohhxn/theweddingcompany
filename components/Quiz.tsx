'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quizData } from '@/lib/quiz-data'
import { QuizState } from '@/types/quiz'
import QuizHeader from './QuizHeader'
import QuizProgress from './QuizProgress'
import QuizQuestion from './QuizQuestion'
import QuizNavigation from './QuizNavigation'
import CatPawMascot from './CatPawMascot'
import DecorativeVectors from './DecorativeVectors'
import QuizResults from './QuizResults'

export default function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    isCompleted: false,
    score: 0,
  })

  const currentQuestionData = quizData.questions[quizState.currentQuestion]
  const totalQuestions = quizData.questions.length
  const isLastQuestion = quizState.currentQuestion === totalQuestions - 1
  const isFirstQuestion = quizState.currentQuestion === 0
  const hasAnsweredCurrent = !!quizState.answers[currentQuestionData?.id]

  const handleAnswer = useCallback((questionId: string, answer: string) => {
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer,
      },
    }))
  }, [])

  const handleNext = useCallback(() => {
    if (!isLastQuestion) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }))
    } else {
      // Calculate score and complete quiz
      const score = Object.entries(quizState.answers).reduce((acc, [qId, answer]) => {
        const question = quizData.questions.find((q) => q.id === qId)
        return question?.correctAnswer === answer ? acc + 1 : acc
      }, 0)

      setQuizState((prev) => ({
        ...prev,
        isCompleted: true,
        score,
      }))
    }
  }, [isLastQuestion, quizState.answers])

  const handlePrevious = useCallback(() => {
    if (!isFirstQuestion) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }))
    }
  }, [isFirstQuestion])

  const handleRestart = useCallback(() => {
    setQuizState({
      currentQuestion: 0,
      answers: {},
      isCompleted: false,
      score: 0,
    })
  }, [])

  const progressPercentage = ((quizState.currentQuestion + 1) / totalQuestions) * 100

  // If quiz is completed, show results
  if (quizState.isCompleted) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center py-4 px-4 relative">
        {/* Decorative Vectors for results page */}
        <DecorativeVectors pageNumber={5} />

        <motion.div
          className="quiz-card max-h-[85vh] overflow-y-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="quiz-content">
            <QuizResults
              score={quizState.score}
              totalQuestions={totalQuestions}
              onRestart={handleRestart}
            />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-4 px-4 relative">
      {/* Decorative Vectors - Changes per page */}
      <AnimatePresence mode="wait">
        <DecorativeVectors key={quizState.currentQuestion} pageNumber={quizState.currentQuestion + 1} />
      </AnimatePresence>

      {/* Main Quiz Card with relative positioning for cat paw */}
      <motion.div
        className="quiz-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Cat Paw Mascot - Positioned relative to card, only on Q1 */}
        <CatPawMascot currentQuestion={quizState.currentQuestion} />

        {/* Inner Content Card - Light cyan background */}
        <div className="quiz-content overflow-y-auto">
          {/* Quiz Header */}
          <QuizHeader title={quizData.title} subtitle={quizData.subtitle} />

          {/* Progress Bar */}
          <QuizProgress
            current={quizState.currentQuestion + 1}
            total={totalQuestions}
          percentage={progressPercentage}
        />

        {/* Question and Answers */}
        <AnimatePresence mode="wait">
          {currentQuestionData && (
            <QuizQuestion
              key={currentQuestionData.id}
              question={currentQuestionData}
              questionNumber={quizState.currentQuestion + 1}
              selectedAnswer={quizState.answers[currentQuestionData.id]}
              onAnswer={handleAnswer}
            />
          )}
        </AnimatePresence>

        {/* Navigation */}
        <QuizNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={!isFirstQuestion}
          canGoNext={hasAnsweredCurrent}
          isLastQuestion={isLastQuestion}
        />
        </div>
      </motion.div>
    </div>
  )
}
