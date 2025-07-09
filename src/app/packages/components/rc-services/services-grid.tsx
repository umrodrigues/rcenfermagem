'use client';

import { servicesMock } from './__mocks__/service.mock';
import styles from './ServicesGrid.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesGrid() {
  return (
    <section className={styles.gridSection}>
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
            </div>
            <div className={styles.label}>{item.titulo}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
