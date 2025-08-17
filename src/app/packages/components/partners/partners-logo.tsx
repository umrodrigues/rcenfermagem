'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './PartnerLogos.module.scss'
import { partners } from './__mocks__/partners.mock'

export default function PartnerLogos() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector(`.${styles.logoSection}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`${styles.logoSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossos Parceiros</h2>
          <p className={styles.subtitle}>Empresas que confiam em nossa tecnologia</p>
        </div>
        
        <div className={styles.logosGrid}>
          {partners.map((partner, index) => (
            <div 
              className={styles.logoCard} 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.logoWrapper}>
                <Image 
                  src={partner.src} 
                  alt={partner.alt} 
                  fill 
                  sizes="(max-width: 768px) 140px, 180px"
                  className={styles.logoImage}
                  quality={95}
                  priority={index < 4}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
                <div className={styles.overlay}>
                  <span className={styles.partnerName}>{partner.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
