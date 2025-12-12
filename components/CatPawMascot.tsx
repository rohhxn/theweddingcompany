'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CatPawMascotProps {
  showOnlyOnFirstQuestion?: boolean;
  currentQuestion?: number;
}

const CatPawMascot: React.FC<CatPawMascotProps> = ({ 
  showOnlyOnFirstQuestion = true, 
  currentQuestion = 0 
}) => {
  // Only show on first question (index 0)
  if (showOnlyOnFirstQuestion && currentQuestion !== 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="cat-paw-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        {/* Hand-drawn Speech Bubble SVG */}
        <div className="speech-bubble-svg">
          <svg
            width="170"
            height="80"
            viewBox="0 0 170 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(2.56deg)' }}
          >
            {/* Main bubble path - hand-drawn irregular shape */}
            <path
              d="M10 12C10 6 13 2 18 2H152C157 2 160 6 160 12V48C160 54 157 58 152 58H105L95 68L88 58H18C13 58 10 54 10 48V12Z"
              fill="white"
              stroke="#77C7E3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: 'url(#roughen)',
              }}
            />
            
            {/* Roughen filter for hand-drawn effect */}
            <defs>
              <filter id="roughen">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
          
          {/* Text overlay positioned absolutely */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -60%)',
              width: '100%',
            }}
          >
            <p className="speech-bubble-text">Best of Luck !</p>
          </div>
        </div>

        {/* Cat Paw Image */}
        <img
          src="/assets/cat-paw.gif"
          alt="Cat paw waving"
          className="cat-paw-image"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default CatPawMascot;

