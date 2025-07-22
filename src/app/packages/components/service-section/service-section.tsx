'use client'

import Image from 'next/image'
import styles from './ServiceSection.module.scss'

type ServiceSectionProps = {
  title: string
  text: string
  imageSrc: string
  imageAlt?: string
}

export default function ServiceSection({ title, text, imageSrc, imageAlt = 'Imagem do serviço' }: ServiceSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
