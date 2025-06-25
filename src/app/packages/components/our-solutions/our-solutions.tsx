'use client';

import styles from './OurSolutions.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const solucoes = [
  {
    id: 1,
    titulo: 'Consulta de Enfermagem',
    imagem: '/teste1.jpeg',
    link: '/solucoes/consulta-enfermagem',
  },
  {
    id: 2,
    titulo: 'Curativos Avançados',
    imagem: '/teste1.jpeg',
    link: '/solucoes/curativos',
  },
  {
    id: 3,
    titulo: 'Acompanhamento Domiciliar',
    imagem: '/teste1.jpeg',
    link: '/solucoes/acompanhamento',
  },
  {
    id: 4,
    titulo: 'Terapia Assistida',
    imagem: '/teste1.jpeg',
    link: '/solucoes/terapia',
  },
  {
    id: 5,
    titulo: 'Atendimento 24h',
    imagem: '/teste1.jpeg',
    link: '/solucoes/atendimento',
  },
];

export default function OurSolutions() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(`.${styles.card}`);
      const cardWidth = card?.clientWidth || 0;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth - 32 : cardWidth + 32,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nossas Soluções</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.arrowLeft} onClick={() => scroll('left')}>‹</button>

        <div ref={carouselRef} className={styles.carousel}>
          {solucoes.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imagem}
                  alt={item.titulo}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardFooter}>
                <h3 className={styles.cardTitle}>{item.titulo}</h3>
                <Link href={item.link} className={styles.link}>Ver mais</Link>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.arrowRight} onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  );
}
