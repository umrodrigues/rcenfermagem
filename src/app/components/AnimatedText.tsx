'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const loadingTexts = [
  'Carregando...',
  'Preparando...',
  'Organizando...',
  'Quase pronto...',
  'Finalizando...'
]

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ height: '30px', display: 'flex', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: '600',
            margin: 0,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            textAlign: 'center'
          }}
        >
          {loadingTexts[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
