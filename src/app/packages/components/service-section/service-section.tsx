'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from './ServiceSection.module.scss'
import { FaCheckCircle, FaStar, FaHeartbeat } from 'react-icons/fa'

interface ServiceSectionProps {
  title: string
  text: string
  imageSrc: string
  features: string[]
  benefits: string[]
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string[]
}

export default function ServiceSection({
  title,
  text,
  imageSrc,
  features,
  benefits,
  metaTitle,
  metaDescription,
  metaKeywords = []
}: ServiceSectionProps) {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const isTratamentoLesoes = title.toLowerCase().includes('tratamento de lesões')
  const isRcEducacao = title.toLowerCase().includes('rc educação')
  
  const tratamentoLesoesImages = [
    '/images/services/procenf.jpg',
    '/images/services/tratlesao1.jpg',
    '/images/services/tratlesao2.jpg'
  ]
  
  const rcEducacaoImages = [
    '/images/services/cursosetreinamentos.jpg',
    '/images/services/rceduc1.jpg',
    '/images/services/rceduc2.jpg'
  ]
  
  const carouselImages = isTratamentoLesoes ? tratamentoLesoesImages : 
                        isRcEducacao ? rcEducacaoImages : [imageSrc]

  useEffect(() => {
    if (isTratamentoLesoes || isRcEducacao) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isTratamentoLesoes, isRcEducacao, carouselImages.length])
  
  const defaultMetaTitle = `${title} - RC Enfermagem Para Você | Serviços Especializados em Enfermagem`
  const defaultMetaDescription = `${text} Oferecemos ${title.toLowerCase()} com qualidade, segurança e humanização. Atendimento em Porto Alegre e região.`
  const defaultKeywords = [
    title.toLowerCase(),
    'enfermagem',
    'saúde',
    'Porto Alegre',
    'RC Enfermagem Para Você',
    ...metaKeywords
  ]

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = metaTitle || defaultMetaTitle
      
      const metaDescriptionEl = document.querySelector('meta[name="description"]')
      if (metaDescriptionEl) {
        metaDescriptionEl.setAttribute('content', metaDescription || defaultMetaDescription)
      }
      
      const metaKeywordsEl = document.querySelector('meta[name="keywords"]')
      if (metaKeywordsEl) {
        metaKeywordsEl.setAttribute('content', defaultKeywords.join(', '))
      }
      
      const canonicalEl = document.querySelector('link[rel="canonical"]')
      if (canonicalEl) {
        canonicalEl.setAttribute('href', `https://rcenfermagemparavoce.com.br/servicos/${title.toLowerCase().replace(/\s+/g, '-')}`)
      }
    }
  }, [title, metaTitle, metaDescription, defaultMetaDescription, defaultKeywords])

  return (
    <>
      <Head>
        <title>{metaTitle || defaultMetaTitle}</title>
        <meta name="description" content={metaDescription || defaultMetaDescription} />
        <meta name="keywords" content={defaultKeywords.join(', ')} />
        <link rel="canonical" href={`https://rcenfermagemparavoce.com.br/servicos/${title.toLowerCase().replace(/\s+/g, '-')}`} />
        
        <meta property="og:title" content={metaTitle || defaultMetaTitle} />
        <meta property="og:description" content={metaDescription || defaultMetaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://rcenfermagemparavoce.com.br/servicos/${title.toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:image" content={imageSrc} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle || defaultMetaTitle} />
        <meta name="twitter:description" content={metaDescription || defaultMetaDescription} />
        <meta name="twitter:image" content={imageSrc} />
      </Head>

      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.titleContainer}>
              <FaHeartbeat className={styles.titleIcon} />
              <h1 className={styles.title}>{title}</h1>
            </div>
            <p className={styles.subtitle}>{text}</p>
          </div>

          <div className={styles.content}>
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                {(isTratamentoLesoes || isRcEducacao) ? (
                  <>
                    {carouselImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${title} - Imagem ${index + 1}`}
                        className={`${styles.image} ${index === currentImageIndex ? styles.imageVisible : ''}`}
                        loading="lazy"
                      />
                    ))}
                    <div className={styles.imageIndicators}>
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          className={`${styles.indicator} ${currentImageIndex === index ? styles.active : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <img
                    src={imageSrc}
                    alt={`${title} - RC Enfermagem`}
                    className={`${styles.image} ${styles.imageVisible}`}
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>
                  <FaCheckCircle className={styles.sectionIcon} />
                  O que oferecemos
                </h2>
                <ul className={styles.featuresList}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.benefitsSection}>
                <h2 className={styles.sectionTitle}>
                  <FaStar className={styles.sectionIcon} />
                  Benefícios
                </h2>
                <ul className={styles.benefitsList}>
                  {benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefitItem}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
