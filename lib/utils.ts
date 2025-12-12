import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx
 * Handles conditional classes and removes conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format number with leading zero
 */
export function formatQuestionNumber(num: number): string {
  return num.toString().padStart(2, '0')
}

/**
 * Calculate progress percentage
 */
export function calculateProgress(current: number, total: number): number {
  return Math.round((current / total) * 100)
}

/**
 * Validate answer selection
 */
export function isAnswerSelected(questionId: string, answerId: string, answers: Record<string, string>): boolean {
  return answers[questionId] === answerId
}
