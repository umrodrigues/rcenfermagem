'use client';

import { servicesMock } from './__mocks__/service.mock';
import styles from './ServicesGrid.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaHeartbeat } from 'react-icons/fa';

export default function ServicesGrid() {
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
        {servicesMock.map((item) => (
          <Link href={item.link} key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.imagem}
                alt={item.titulo}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={item.id <= 3}
              />
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
        ))}
      </div>
    </section>
  );
}
