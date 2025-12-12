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
            width="110"
            height="50"
            viewBox="0 0 110 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(2.56deg)' }}
          >
            {/* Main bubble path - hand-drawn irregular shape */}
            <path
              d="M8 10C8 5 10 2 14 2H96C100 2 102 5 102 10V36C102 41 100 44 96 44H68L60 50L54 44H14C10 44 8 41 8 36V10Z"
              fill="white"
              stroke="#77C7E3"
              strokeWidth="2"
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

