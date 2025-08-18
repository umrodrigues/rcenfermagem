'use client';

import styles from './OurSolutions.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect, useCallback } from 'react';
import { servicesMock } from '../rc-services/__mocks__/service.mock';
import { FaArrowLeft, FaArrowRight, FaHeartbeat } from 'react-icons/fa';

export default function OurSolutions() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(`.${styles.card}`);
      const cardWidth = card?.clientWidth || 0;
      const gap = window.innerWidth <= 768 ? 24 : 32;
      const scrollAmount = index * (cardWidth + gap);
      
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (carouselRef.current && !isScrolling) {
      setIsScrolling(true);
      const card = carouselRef.current.querySelector(`.${styles.card}`);
      const cardWidth = card?.clientWidth || 0;
      const gap = window.innerWidth <= 768 ? 24 : 32;
      const scrollAmount = cardWidth + gap;
      
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      setTimeout(() => setIsScrolling(false), 500);
    }
  }, [isScrolling]);

  const handleScroll = useCallback(() => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const card = carouselRef.current.querySelector(`.${styles.card}`);
      const cardWidth = card?.clientWidth || 0;
      const gap = window.innerWidth <= 768 ? 24 : 32;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(newIndex);
    }
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (!isMobile && !isScrolling) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % servicesMock.length;
        scrollToIndex(nextIndex);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [currentIndex, isMobile, isScrolling, scrollToIndex]);

  // Garantir que o carrossel seja inicializado corretamente
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <FaHeartbeat className={styles.titleIcon} />
            <h2 className={styles.title}>Nossas Soluções</h2>
          </div>
          <p className={styles.subtitle}>
            Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          {!isMobile && (
            <button 
              className={`${styles.arrow} ${styles.arrowLeft}`} 
              onClick={() => scroll('left')}
              aria-label="Anterior"
              disabled={isScrolling || currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
          )}

          <div ref={carouselRef} className={styles.carousel}>
            {servicesMock.map((item, index) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    width={400}
                    height={300}
                    className={styles.image}
                    priority={index < 3}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.titulo}</h3>
                  <p className={styles.cardDescription}>{item.descricao}</p>
                  <Link href={item.link} className={styles.link}>
                    <span>Saiba mais</span>
                    <FaArrowRight className={styles.linkIcon} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <button 
              className={`${styles.arrow} ${styles.arrowRight}`} 
              onClick={() => scroll('right')}
              aria-label="Próximo"
              disabled={isScrolling || currentIndex === servicesMock.length - 1}
            >
              <FaArrowRight />
            </button>
          )}
        </div>

        {!isMobile && (
          <div className={styles.indicators}>
            {servicesMock.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
