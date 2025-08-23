'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Reviews.module.scss';
import { reviewsMock } from './__mocks__/reviews.mock';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaHeart, FaUser } from 'react-icons/fa';

interface ReviewsProps {
  layout?: 'slider' | 'grid';
}

export default function Reviews({ layout = 'slider' }: ReviewsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [sliderReady, setSliderReady] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [textOverflows, setTextOverflows] = useState<boolean[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleExpand = (idx: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const checkTextOverflow = () => {
    const newTextOverflows = textRefs.current.map((ref) => {
      if (!ref) return false;
      return ref.scrollHeight > ref.clientHeight;
    });
    setTextOverflows(newTextOverflows);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkTextOverflow();
    }, 100);
    
    window.addEventListener('resize', checkTextOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkTextOverflow);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    layout === 'slider'
      ? {
          loop: true,
          slides: { perView: 1, spacing: 16 },
          breakpoints: {
            '(min-width: 768px)': {
              slides: { perView: 2, spacing: 20 },
            },
            '(min-width: 1024px)': {
              slides: { perView: 3, spacing: 24 },
            },
            '(min-width: 1440px)': {
              slides: { perView: 4, spacing: 20 },
            },
            '(min-width: 1920px)': {
              slides: { perView: 4, spacing: 16 },
            },
          },
          slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
          },
          created() {
            setSliderReady(true);
          },
        }
      : undefined
  );

  useEffect(() => {
    if (layout !== 'slider' || !slider.current) return;
    const interval = setInterval(() => {
      slider.current!.next();
    }, 6000);
    return () => clearInterval(interval);
  }, [slider, layout]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95,
      rotateX: -5
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut" as const
      }
    })
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.headerContainer}>
        <motion.div 
          className={styles.titleContainer}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Depoimentos</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Histórias reais de transformação e cuidado
        </motion.p>
      </div>

      <div
        ref={layout === 'slider' ? sliderRef : undefined}
        className={layout === 'slider' ? 'keen-slider' : styles.gridContainer}
      >
        {reviewsMock.map((item, idx) => {
          const isExpanded = expandedIndexes.includes(idx);
          const isHovered = hoveredIndex === idx;
          const shouldShowExpand = textOverflows[idx];
          const isVisible = visibleCards.includes(idx);
          
          return (
            <div
              key={idx}
              className={layout === 'slider' ? 'keen-slider__slide' : styles.gridItem}
              data-index={idx}
            >
              <motion.div
                className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${isHovered ? styles.hovered : ''}`}
                onClick={() => shouldShowExpand && toggleExpand(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                role={shouldShowExpand ? "button" : undefined}
                tabIndex={shouldShowExpand ? 0 : undefined}
                onKeyDown={shouldShowExpand ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(idx);
                  }
                } : undefined}
                aria-expanded={shouldShowExpand ? isExpanded : undefined}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover="hover"
                layout
              >
                <div className={styles.cardHeader}>
                  <motion.div 
                    className={styles.quoteContainer}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
                  >
                    <FaQuoteLeft className={styles.quoteIcon} />
                  </motion.div>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className={styles.star}
                        custom={i}
                        variants={starVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                      >
                        <FaStar />
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.contentContainer}>
                  <p 
                    ref={(el) => {
                      textRefs.current[idx] = el;
                    }}
                    className={styles.text}
                  >
                    {item.texto}
                  </p>
                </div>
                
                <motion.div 
                  className={styles.cardFooter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className={styles.avatar}>
                    <FaUser className={styles.avatarIcon} />
                    <span className={styles.avatarInitial}>{item.nome.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.name}>{item.nome}</h4>
                    <span className={styles.patientType}>
                      <FaHeart className={styles.heartIcon} />
                      Paciente Satisfeito
                    </span>
                  </div>
                </motion.div>
                
                {shouldShowExpand && (
                  <motion.div 
                    className={styles.expandIndicator}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <span className={styles.expandIcon}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </motion.div>
                )}

                <div className={styles.cardGlow}></div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {layout === 'slider' && sliderReady && (
        <motion.div 
          className={styles.navigation}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className={styles.dots}>
            {reviewsMock.length > 1 &&
              Array.from({
                length: slider.current?.track.details.slides.length || 0,
              }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => slider.current?.moveToIdx(idx)}
                  className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
                  aria-label={`Ir para slide ${idx + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
          </div>
          
          <div className={styles.controls}>
            <motion.button
              onClick={() => slider.current?.prev()}
              className={styles.controlButton}
              aria-label="Slide anterior"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button
              onClick={() => slider.current?.next()}
              className={styles.controlButton}
              aria-label="Próximo slide"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
