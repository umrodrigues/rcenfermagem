'use client';

import { servicesMock } from './__mocks__/service.mock';
import styles from './ServicesGrid.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaHeartbeat } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function ServicesGrid() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({})

  const tratamentoLesoesImages = [
    '/images/services/procenf.jpg',
    '/images/services/tratlesao1.jpg',
    '/images/services/tratlesao2.jpg'
  ]
  
  const rcEducacaoImages = [
    '/images/services/cursosetreinamentos.jpg',
    '/images/services/rceduc1.jpg',
    '/images/services/rceduc2.jpg'
  ]

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = []
    
    servicesMock.forEach((item) => {
      if (item.id === 3 || item.id === 8) {
        const interval = setInterval(() => {
          setCurrentImageIndexes(prev => {
            const images = item.id === 3 ? tratamentoLesoesImages : rcEducacaoImages
            return {
              ...prev,
              [item.id]: (prev[item.id] || 0 + 1) % images.length
            }
          })
        }, 5000)
        intervals.push(interval)
      }
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [])

  return (
    <section className={styles.gridSection}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <FaHeartbeat className={styles.titleIcon} />
          <h2 className={styles.title}>Nossos Serviços</h2>
        </div>
        <p className={styles.subtitle}>
          Cuidado especializado e humanizado para você e sua família
        </p>
        <div className={styles.titleUnderline}></div>
      </div>
      
      <div className={styles.grid}>
        {servicesMock.map((item) => {
          const isTratamentoLesoes = item.id === 3
          const isRcEducacao = item.id === 8
          const carouselImages = isTratamentoLesoes ? tratamentoLesoesImages : 
                               isRcEducacao ? rcEducacaoImages : null
          const currentIndex = currentImageIndexes[item.id] || 0

          return (
            <Link href={item.link} key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {carouselImages ? (
                  <>
                    {carouselImages.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`${item.titulo} - Imagem ${index + 1}`}
                        fill
                        className={`${styles.image} ${index === currentIndex ? styles.imageVisible : ''}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={item.id <= 3}
                      />
                    ))}
                    <div className={styles.imageIndicators}>
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
                          onClick={(e) => {
                            e.preventDefault()
                            setCurrentImageIndexes(prev => ({ ...prev, [item.id]: index }))
                          }}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    className={`${styles.image} ${styles.imageVisible}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.id <= 3}
                  />
                )}
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.viewMore}>Ver mais</span>
                    <FaArrowRight className={styles.overlayIcon} />
                  </div>
                </div>
                <div className={styles.imageGradient}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{item.titulo}</h3>
                <p className={styles.serviceDescription}>
                  {item.descricao}
                </p>
                <div className={styles.cardFooter}>
                  <span className={styles.serviceType}>Serviço Especializado</span>
                  <div className={styles.arrowIcon}>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  );
}
