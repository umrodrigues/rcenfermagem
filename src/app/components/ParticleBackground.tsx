'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ParticleBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isClient) {
    return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} />
  }

  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {particles.map((i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `hsl(${Math.random() * 60 + 120}, 70%, 60%)`,
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  )
}
