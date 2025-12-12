export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: string
}

export interface QuizData {
  title: string
  subtitle: string
  questions: Question[]
}

export interface UserAnswer {
  questionId: string
  selectedAnswer: string
}

export interface QuizState {
  currentQuestion: number
  answers: Record<string, string>
  isCompleted: boolean
  score: number
}
