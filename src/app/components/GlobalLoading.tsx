'use client'

import { useLoadingStore } from '../stores/loadingStore'
import { motion, AnimatePresence } from 'framer-motion'
import { ParticleBackground } from './ParticleBackground'
import { WaveEffect } from './WaveEffect'
import { AnimatedText } from './AnimatedText'
import { useEffect, useState } from 'react'

export function GlobalLoading() {
  const { isLoading } = useLoadingStore()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    if (isLoading) {
      document.body.classList.add('loading')
    } else {
      document.body.classList.remove('loading')
    }

    return () => {
      document.body.classList.remove('loading')
    }
  }, [isLoading, isClient])

  if (!isClient) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(0, 138, 61, 0.95), rgba(0, 0, 0, 0.9))',
            backdropFilter: 'blur(8px)',
            width: '100vw',
            height: '100vh'
          }}
        >
          <ParticleBackground />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              padding: '40px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              zIndex: 10
            }}
          >
            <WaveEffect />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={{
                  width: '80px',
                  height: '80px',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '3px solid #00ff88',
                  borderRadius: '50%',
                  position: 'relative'
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{
                  width: '60px',
                  height: '60px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRight: '2px solid #00ccff',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '10px',
                  left: '10px'
                }}
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  width: '20px',
                  height: '20px',
                  background: '#ff6b6b',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '30px',
                  left: '30px',
                  boxShadow: '0 0 20px rgba(255, 107, 107, 0.6)'
                }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%'
              }}
            >
              <AnimatedText />
              
              <motion.div
                animate={{ 
                  width: [0, 100, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #00ff88, #00ccff, #ff6b6b)',
                  borderRadius: '2px',
                  width: '100px'
                }}
              />
            </motion.div>
            
            <motion.div
              animate={{ 
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center'
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#00ff88',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(255, 136, 0.6)'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
