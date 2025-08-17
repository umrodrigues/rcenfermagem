'use client';

import { servicesMock } from './__mocks__/service.mock';
import styles from './ServicesGrid.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Nossos Serviços</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <p className={styles.subtitle}>
          Cuidado especializado e humanizado para você e sua família
        </p>
      </div>
      
      <div className={styles.grid}>
        {servicesMock.map((item) => (
          <Link href={item.link} key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.imagem}
                alt={item.titulo}
                width={600}
                height={400}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.viewMore}>Ver mais</span>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>{item.titulo}</h3>
              <p className={styles.serviceDescription}>
                Cuidado especializado e personalizado para suas necessidades.
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.serviceType}>Serviço</span>
                <div className={styles.arrowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
