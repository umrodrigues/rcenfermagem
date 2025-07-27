'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroBanner.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const bannerData = [
  {
    image: '/banner/banner1.jpeg',
    title: 'RC Enfermagem',
    subtitle: 'Bem-vindo a',
    description: 'Para você um espaço de acolhimento e humanização nos cuidados em saúde',
  },
  {
    image: '/banner/banner2.jpeg',
    title: 'Amor RC',
    subtitle: 'Atendimento Humanizado',
    description: 'Cuidamos de cada paciente como se fosse alguém da nossa família',
  },
];

export default function HeroBanner() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 10000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className={styles.bannerWrapper}>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {bannerData.map((slide, index) => (
          <div key={index} className={`keen-slider__slide ${styles.banner}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={styles.backgroundImage}
                priority
              />
              <div className={styles.overlay}></div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
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
