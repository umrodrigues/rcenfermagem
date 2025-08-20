'use client'

import Script from 'next/script'

interface StructuredDataProps {
  type: 'organization' | 'medical-clinic' | 'service' | 'article' | 'breadcrumb'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "RC Enfermagem Para Você",
          "alternateName": "RC Enfermagem",
          "description": "Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização. Consulta de enfermagem, procedimentos, atendimento domiciliar, teleconsulta, laserterapia e mais.",
          "url": "https://rcenfermagemparavoce.com.br",
          "logo": "https://rcenfermagemparavoce.com.br/logo.png",
          "image": "https://rcenfermagemparavoce.com.br/images/backgrounds/fundo1.jpeg",
          "telephone": ["+55-51-98416-3243", "+55-51-99782-2982"],
          "email": "contato@rcenfermagemparavoce.com.br",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Ramiro Barcelos, 630/1310",
            "addressLocality": "Porto Alegre",
            "addressRegion": "RS",
            "postalCode": "90035-001",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -30.0346,
            "longitude": -51.2177
          },
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
          "currenciesAccepted": "BRL",
          "medicalSpecialty": [
            "Enfermagem",
            "Consulta de Enfermagem",
            "Atendimento Domiciliar",
            "Laserterapia",
            "Ozonioterapia",
            "Consultoria em Amamentação"
          ],
          "availableService": [
            {
              "@type": "MedicalService",
              "name": "Consulta de Enfermagem",
              "description": "Avaliação completa e personalizada com foco na prevenção, promoção da saúde e bem-estar."
            },
            {
              "@type": "MedicalService",
              "name": "Atendimento Domiciliar",
              "description": "Cuidados especializados no conforto do seu lar, com toda a segurança e profissionalismo."
            },
            {
              "@type": "MedicalService",
              "name": "Laserterapia",
              "description": "Tratamento avançado com laser para lesões, feridas e problemas de pele com tecnologia de ponta."
            },
            {
              "@type": "MedicalService",
              "name": "Ozonioterapia",
              "description": "Tratamento com ozônio para diversas condições de saúde."
            },
            {
              "@type": "MedicalService",
              "name": "Consultoria em Amamentação",
              "description": "Apoio especializado para mães durante o processo de amamentação."
            }
          ],
          "employee": [
            {
              "@type": "Person",
              "name": "Grasiele Costa Rodrigues",
              "jobTitle": "Enfermeira",
              "description": "Mestranda em enfermagem pela UFCSPA, especialista em urgência, emergência e trauma, auditoria em saúde, DRG e enfermagem dermatológica."
            },
            {
              "@type": "Person",
              "name": "Lucio Rodrigo Lucca de Camargo",
              "jobTitle": "Enfermeiro",
              "description": "Mestre em Reabilitação e Inclusão, especialista em Auditoria em Saúde."
            }
          ],
          "sameAs": [
            "https://www.facebook.com/rcenfermagemparavoce",
            "https://www.instagram.com/rcenfermagemparavoce",
            "https://www.linkedin.com/company/rc-enfermagem-para-voce"
          ],
          "foundingDate": "2019",
          "areaServed": {
            "@type": "City",
            "name": "Porto Alegre"
          }
        }
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalService",
          "name": data.title,
          "description": data.description,
          "provider": {
            "@type": "MedicalClinic",
            "name": "RC Enfermagem Para Você",
            "url": "https://rcenfermagemparavoce.com.br"
          },
          "medicalSpecialty": "Enfermagem",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `https://rcenfermagemparavoce.com.br/servicos/${data.slug}`
          }
        }
      
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.href
          }))
        }
      
      default:
        return data
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}
