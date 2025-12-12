'use client'

import { motion } from 'framer-motion'

interface DecorativeVectorsProps {
  pageNumber: number
}

export default function DecorativeVectors({ pageNumber }: DecorativeVectorsProps) {
  // Different vector configurations for each page (4 questions + 2 results pages)
  const vectorConfigs = [
    // Page 1 - Question 1
    [
      { size: 912, top: -294, left: -134, blur: 440, color: '#86A5DF' },
      { size: 760, top: 394, left: -147, blur: 440, color: '#90E0EF' },
      { size: 933, top: -335, left: 704, blur: 440, color: '#00B4D8' },
    ],
    // Page 2 - Question 2
    [
      { size: 862, top: 162, left: 322, blur: 440, color: '#0077B6' },
      { size: 933, top: -335, left: 704, blur: 440, color: '#00B4D8' },
      { size: 760, top: 394, left: -147, blur: 440, color: '#90E0EF' },
    ],
    // Page 3 - Question 3
    [
      { size: 912, top: -294, left: -134, blur: 440, color: '#86A5DF' },
      { size: 862, top: 162, left: 322, blur: 440, color: '#0077B6' },
      { size: 760, top: 394, left: -147, blur: 440, color: '#90E0EF' },
    ],
    // Page 4 - Question 4
    [
      { size: 933, top: -335, left: 704, blur: 440, color: '#00B4D8' },
      { size: 760, top: 394, left: -147, blur: 440, color: '#90E0EF' },
      { size: 912, top: -294, left: -134, blur: 440, color: '#86A5DF' },
    ],
    // Page 5 - Results page 1
    [
      { size: 912, top: -294, left: -134, blur: 440, color: '#86A5DF' },
      { size: 862, top: 162, left: 322, blur: 440, color: '#0077B6' },
    ],
    // Page 6 - Results page 2 (final)
    [
      { size: 933, top: -335, left: 704, blur: 440, color: '#00B4D8' },
      { size: 912, top: -294, left: -134, blur: 440, color: '#86A5DF' },
    ],
  ]

  const vectors = vectorConfigs[pageNumber - 1] || vectorConfigs[0]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {vectors.map((vector, index) => (
        <motion.div
          key={`${pageNumber}-${index}`}
          className="absolute rounded-full"
          style={{
            width: `${vector.size}px`,
            height: `${vector.size}px`,
            top: `${vector.top}px`,
            left: `${vector.left}px`,
            background: vector.color,
            filter: `blur(${vector.blur}px)`,
            opacity: 0.3,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
