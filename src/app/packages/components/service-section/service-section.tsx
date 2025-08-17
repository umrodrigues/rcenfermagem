'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './ServiceSection.module.scss'
import { FaHeartbeat, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'

type ServiceSectionProps = {
  title: string
  text: string
  imageSrc: string
  imageAlt?: string
  features?: string[]
  benefits?: string[]
}

export default function ServiceSection({ 
  title, 
  text, 
  imageSrc, 
  imageAlt = 'Imagem do serviço',
  features = [],
  benefits = []
}: ServiceSectionProps) {
  // Função para renderizar o texto com quebras de linha
  const renderText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <p key={index} style={{ marginBottom: line.trim() === '' ? '1rem' : '0.5rem' }}>
        {line}
      </p>
    ));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <FaHeartbeat className={styles.titleIcon} />
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className={styles.image}
                priority
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.description}>
              {renderText(text)}
            </div>

            {features.length > 0 && (
              <div className={styles.features}>
                <h3 className={styles.featuresTitle}>O que incluímos:</h3>
                <ul className={styles.featuresList}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {benefits.length > 0 && (
              <div className={styles.benefits}>
                <h3 className={styles.benefitsTitle}>Benefícios:</h3>
                <ul className={styles.benefitsList}>
                  {benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefitItem}>
                      <FaHeartbeat className={styles.benefitIcon} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>Interessado neste serviço?</h3>
            <p className={styles.contactDescription}>
              Entre em contato conosco e descubra como podemos ajudar você
            </p>
          </div>
          
          <div className={styles.contactButtons}>
            <Link href="/contato" className={styles.contactButton}>
              <div className={styles.buttonContent}>
                <span className={styles.buttonQuestion}>TEM INTERESSE?</span>
                <span className={styles.buttonAction}>FALE CONOSCO</span>
              </div>
              <FaPhone className={styles.buttonIcon} />
            </Link>
            
            <Link href="https://wa.me/5511999999999" className={styles.whatsappButton}>
              <div className={styles.buttonContent}>
                <span className={styles.buttonQuestion}>ATENDIMENTO RÁPIDO</span>
                <span className={styles.buttonAction}>WHATSAPP</span>
              </div>
              <FaWhatsapp className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
