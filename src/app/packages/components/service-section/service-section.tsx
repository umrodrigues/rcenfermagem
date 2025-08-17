'use client'

import Image from 'next/image'
import Link from 'next/link'
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
          <div className={styles.content}>
            <div className={styles.text}>
              <p>{text}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link href="/contato" className={styles.contactButton}>
                <div className={styles.buttonContent}>
                  <span className={styles.buttonQuestion}>TEM INTERESSE?</span>
                  <span className={styles.buttonAction}>FALE CONOSCO</span>
                </div>
                <svg className={styles.buttonIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
