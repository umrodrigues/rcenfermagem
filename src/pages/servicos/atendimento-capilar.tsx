'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Atendimento Capilar'

export const mockText = `O atendimento capilar especializado oferece cuidados personalizados para o couro cabeludo e cabelos, com foco na saúde e bem-estar capilar.

Nossos profissionais especializados realizam avaliação completa do couro cabeludo, identificam problemas específicos e desenvolvem tratamentos personalizados para cada caso. Utilizamos técnicas avançadas e produtos de qualidade para garantir resultados eficazes.

Nosso atendimento inclui avaliação dermatológica do couro cabeludo, identificação de problemas como queda de cabelo, caspa, seborreia, tratamento de lesões capilares, orientações sobre cuidados diários e acompanhamento contínuo para manutenção dos resultados.`

export const mockFeatures = [
  'Avaliação dermatológica completa do couro cabeludo',
  'Identificação de problemas capilares específicos',
  'Tratamento personalizado para cada caso',
  'Aplicação de medicamentos e produtos especializados',
  'Tratamento de lesões e problemas do couro cabeludo',
  'Orientações sobre cuidados diários',
  'Acompanhamento contínuo dos resultados',
  'Prevenção de problemas capilares futuros'
]

export const mockBenefits = [
  'Cuidados especializados e personalizados',
  'Tratamento eficaz de problemas capilares',
  'Melhoria da saúde do couro cabeludo',
  'Prevenção de queda de cabelo',
  'Orientações profissionais sobre cuidados',
  'Acompanhamento contínuo dos resultados',
  'Uso de produtos e técnicas avançadas',
  'Bem-estar e autoestima melhorados'
]

export default function AtendimentoCapilar() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Atendimento Capilar"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Atendimento Capilar', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/images/banner1.jpeg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
