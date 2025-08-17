'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Reviews.module.scss';
import { reviewsMock } from './__mocks__/reviews.mock';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.css';

interface ReviewsProps {
  layout?: 'slider' | 'grid';
}

export default function Reviews({ layout = 'slider' }: ReviewsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [sliderReady, setSliderReady] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [textOverflows, setTextOverflows] = useState<boolean[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleExpand = (idx: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const checkTextOverflow = () => {
    const newTextOverflows = textRefs.current.map((ref) => {
      if (!ref) return false;
      // Verifica se o texto está sendo cortado (scrollHeight > clientHeight)
      return ref.scrollHeight > ref.clientHeight;
    });
    setTextOverflows(newTextOverflows);
  };

  useEffect(() => {
    // Aguarda um pouco para garantir que o DOM foi renderizado
    const timer = setTimeout(() => {
      checkTextOverflow();
    }, 100);
    
    window.addEventListener('resize', checkTextOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkTextOverflow);
    };
  }, []);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    layout === 'slider'
      ? {
          loop: true,
          slides: { perView: 1, spacing: 24 },
          breakpoints: {
            '(min-width: 768px)': {
              slides: { perView: 2, spacing: 32 },
            },
            '(min-width: 1024px)': {
              slides: { perView: 3, spacing: 40 },
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

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Depoimentos</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <p className={styles.subtitle}>
          Histórias reais de transformação e cuidado
        </p>
      </div>

      <div
        ref={layout === 'slider' ? sliderRef : undefined}
        className={layout === 'slider' ? 'keen-slider' : styles.gridContainer}
      >
        {reviewsMock.map((item, idx) => {
          const isExpanded = expandedIndexes.includes(idx);
          const isHovered = hoveredIndex === idx;
          const shouldShowExpand = textOverflows[idx];
          
          return (
            <div
              key={idx}
              className={layout === 'slider' ? 'keen-slider__slide' : styles.gridItem}
            >
              <div
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
              >
                <div className={styles.cardHeader}>
                  <div className={styles.quoteContainer}>
                    <span className={styles.quote}>"</span>
                  </div>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
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
                
                <div className={styles.cardFooter}>
                  <div className={styles.avatar}>
                    {item.nome.charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.name}>{item.nome}</h4>
                    <span className={styles.patientType}>Paciente</span>
                  </div>
                </div>
                
                {shouldShowExpand && (
                  <div className={styles.expandIndicator}>
                    <span className={styles.expandIcon}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {layout === 'slider' && sliderReady && (
        <div className={styles.navigation}>
          <div className={styles.dots}>
            {reviewsMock.length > 1 &&
              Array.from({
                length: slider.current?.track.details.slides.length || 0,
              }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => slider.current?.moveToIdx(idx)}
                  className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
          </div>
          
          <div className={styles.controls}>
            <button
              onClick={() => slider.current?.prev()}
              className={styles.controlButton}
              aria-label="Slide anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => slider.current?.next()}
              className={styles.controlButton}
              aria-label="Próximo slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
