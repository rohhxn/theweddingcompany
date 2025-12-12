import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors from Figma
        'quiz-bg-start': '#A8D5E8',
        'quiz-bg-end': '#E8F5FA',
        'quiz-card-bg': '#FFFFFF',
        'quiz-title': '#15313D',
        'quiz-text': '#2D3748',
        'quiz-question-bg': '#D4EEF7',
        'quiz-answer-bg': '#F7FDFF',
        'quiz-answer-hover': '#E8F5FA',
        'quiz-answer-selected': '#D4EEF7',
        'quiz-progress': '#2C5F6F',
        'quiz-border': '#E2E8F0',
        'quiz-shadow': 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'caveat': ['Caveat Brush', 'cursive'],
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'quiz-title': ['64px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'quiz-subtitle': ['18px', { lineHeight: '1.5' }],
        'quiz-question': ['20px', { lineHeight: '1.6', fontWeight: '600' }],
        'quiz-answer': ['18px', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'quiz-card': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'quiz-element': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'quiz-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'quiz-card': '32px',
        'quiz-element': '16px',
        'quiz-button': '12px',
      },
      spacing: {
        'quiz-padding': '80px',
        'quiz-gap': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
