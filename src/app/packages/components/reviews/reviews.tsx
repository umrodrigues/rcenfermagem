'use client';

import { useState, useEffect } from 'react';
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

  const toggleExpand = (idx: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    layout === 'slider'
      ? {
          loop: true,
          slides: { perView: 1, spacing: 8 },
          breakpoints: {
            '(min-width: 768px)': {
              slides: { perView: 2, spacing: 12 },
            },
            '(min-width: 1024px)': {
              slides: { perView: 3, spacing: 16 },
            },
          },
          slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
          },
        }
      : undefined
  );

  useEffect(() => {
    if (layout !== 'slider' || !slider.current) return;
    const interval = setInterval(() => {
      slider.current!.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [slider, layout]);

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>Depoimentos</h2>

      <div
        ref={layout === 'slider' ? sliderRef : undefined}
        className={layout === 'slider' ? 'keen-slider' : styles.gridContainer}
      >
        {reviewsMock.map((item, idx) => {
          const isExpanded = expandedIndexes.includes(idx);
          return (
            <div
              key={idx}
              className={layout === 'slider' ? 'keen-slider__slide' : styles.gridItem}
            >
              <div
                className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => toggleExpand(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(idx);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <span className={styles.quote}>“</span>
                <p className={styles.text}>{item.texto}</p>
                <h4 className={styles.name}>{item.nome}</h4>
              </div>
            </div>
          );
        })}
      </div>

      {layout === 'slider' && (
        <div className={styles.dots}>
          {reviewsMock.length > 1 &&
            Array.from({
              length: slider.current ? slider.current.track.details.slides.length : 0,
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
        </div>
      )}
    </section>
  );
}
