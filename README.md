# Test Your Knowledge - Quiz Application

A pixel-perfect, interactive quiz application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed with accessibility (WCAG 2.1) and performance in mind.

## 🎨 Features

- ✨ **Pixel-Perfect Design** - Matches Figma specifications exactly
- 🎭 **Smooth Animations** - Powered by Framer Motion
- ♿ **Accessible** - WCAG 2.1 compliant with proper ARIA attributes
- 🚀 **Performance Optimized** - Built with Next.js 14+ App Router
- 📱 **Desktop First** - Optimized for desktop screens
- 🎨 **Custom Theming** - Tailwind CSS with design tokens
- 🔤 **Custom Typography** - Caveat Brush font for titles

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Caveat Brush (Google Fonts)

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add the cat paw GIF:**
   - Place your cat paw GIF file at: `public/assets/cat-paw.gif`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
theweddingcompany/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Quiz.tsx            # Main quiz component
│   ├── QuizHeader.tsx      # Title and subtitle
│   ├── QuizProgress.tsx    # Progress bar
│   ├── QuizQuestion.tsx    # Question and answers
│   ├── QuizNavigation.tsx  # Navigation buttons
│   └── CatPawMascot.tsx    # Cat paw mascot
├── lib/
│   ├── utils.ts            # Utility functions
│   └── quiz-data.ts        # Quiz questions data
├── types/
│   └── quiz.ts             # TypeScript types
├── public/
│   └── assets/
│       └── cat-paw.gif     # Cat paw animation
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎯 Design Specifications

### Colors
- Background Gradient: `#A8D5E8` → `#E8F5FA`
- Card Background: `#FFFFFF`
- Title Color: `#15313D` → `#2C5F6F` (gradient)
- Question Background: `#D4EEF7`
- Answer Background: `#F7FDFF`
- Progress Bar: `#2C5F6F`

### Typography
- **Title**: Caveat Brush, 64px
- **Subtitle**: Sans-serif, 18px
- **Question**: Sans-serif, 20px, semibold
- **Answers**: Sans-serif, 18px

### Spacing & Layout
- Card Border Radius: 32px
- Element Border Radius: 16px
- Card Padding: 80px (desktop)
- Shadow: Multi-layer for depth

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **ARIA Attributes**: Labels, roles, and states for screen readers
- **Keyboard Navigation**: Full keyboard support with visible focus states
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Screen Reader Text**: Hidden labels for context
- **Focus Management**: Proper focus indicators and tab order

## 🚀 Performance Optimizations

- Next.js Image optimization
- Framer Motion lazy animations
- Code splitting with dynamic imports
- CSS optimizations with Tailwind
- Production build minification
- Font optimization with next/font

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🔧 Configuration

### Adding More Questions

Edit `lib/quiz-data.ts`:

```typescript
export const quizData: QuizData = {
  title: 'Test Your Knowledge',
  subtitle: 'Answer all questions to see your results',
  questions: [
    {
      id: '1',
      question: 'Your question here?',
      options: ['Option 1', 'Option 2', 'Option 3'],
      correctAnswer: 'Option 2',
    },
    // Add more questions...
  ],
}
```

### Customizing Colors

Edit `tailwind.config.ts` to modify the design system colors.

## 🎨 Design System

The application uses a comprehensive design system with:
- Custom color palette matching Figma
- Typography scale with custom fonts
- Spacing system for consistent layout
- Shadow system for depth
- Animation presets for smooth transitions

## 📄 License

This project is built for The Wedding Company as a front-end development assignment.

## 🤝 Contributing

This is an assessment project. For questions or issues, please contact the repository owner.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion
