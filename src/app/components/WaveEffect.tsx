'use client'

import { motion } from 'framer-motion'

export function WaveEffect() {
  return (
    <div style={{ 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '2px solid rgba(0, 255, 136, 0.3)',
            borderRadius: '50%',
            zIndex: 1
          }}
        />
      ))}
    </div>
  )
}
