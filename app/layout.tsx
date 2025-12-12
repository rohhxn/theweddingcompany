import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test Your Knowledge - The Wedding Company',
  description: 'Interactive quiz application with pixel-perfect design',
  keywords: ['quiz', 'knowledge test', 'interactive', 'wedding company'],
  authors: [{ name: 'The Wedding Company' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#A8D5E8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Caveat+Brush&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
