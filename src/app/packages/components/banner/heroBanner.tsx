'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroBanner.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { bannerDataMock } from './__mocks__/banners.mock';
import { useLoadingStore } from '../../../stores/loadingStore';

export default function HeroBanner() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showImages, setShowImages] = useState(false);
  const { isLoading: globalLoading, setLoading } = useLoadingStore();
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (imagesLoaded >= bannerDataMock.length) {
      const timer = setTimeout(() => {
        setShowImages(true);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        instanceRef.current?.next();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [instanceRef, isLoading]);

  useEffect(() => {
    if (!isLoading && globalLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading, globalLoading, setLoading]);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <section className={styles.bannerWrapper}>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {bannerDataMock.map((slide, index) => (
          <div key={index} className={`keen-slider__slide ${styles.banner}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={`${styles.backgroundImage} ${showImages ? styles.imageVisible : ''}`}
                priority={index === 0}
                onLoad={handleImageLoad}
              />
              <div className={styles.overlay}></div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
                transition={{ duration: 0.8, delay: isLoading ? 0 : 0.3 }}
                className={styles.content}
              >
                {slide.subtitle && <h2>{slide.subtitle}</h2>}
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link href="/quem-somos" passHref>
                  <button className={styles.button}>Saiba Mais</button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
        <button className={`${styles.arrow} ${styles.left}`} onClick={() => instanceRef.current?.prev()}>
          <FaChevronLeft />
        </button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={() => instanceRef.current?.next()}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
