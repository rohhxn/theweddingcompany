import { QuizData } from '@/types/quiz'

export const quizData: QuizData = {
  title: 'Test Your Knowledge',
  subtitle: 'Answer all questions to see your results',
  questions: [
    {
      id: '1',
      question: 'What sound does a cat make?',
      options: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink'],
      correctAnswer: 'Meow-Meow',
    },
    {
      id: '2',
      question: 'What would you probably find in your fridge?',
      options: ['Shoes', 'Ice Cream', 'Books'],
      correctAnswer: 'Ice Cream',
    },
    {
      id: '3',
      question: 'What color are bananas?',
      options: ['Blue', 'Yellow', 'Red'],
      correctAnswer: 'Yellow',
    },
    {
      id: '4',
      question: 'How many stars are in the sky?',
      options: ['Two', 'Infinite', 'One Hundred'],
      correctAnswer: 'Infinite',
    },
  ],
}
