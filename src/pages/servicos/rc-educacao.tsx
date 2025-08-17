'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'RC Educação: Ciência, Prática e Excelência em Cada Aula'

export const mockText = `Acreditamos que o conhecimento transforma. Por isso, unimos ciência, inovação e prática para formar profissionais capacitados, confiantes e preparados para atuar com excelência.

Oferecemos os melhores cursos da região, com metodologia dinâmica e professores experientes, referência em empreendedorismo. Nossos cursos incluem Feridas Sob Controle, Coberturas e Desbridamento, Terapia por Pressão Negativa, Sutura para Enfermeiros, Tapping na Prática, Laserpuntura e Laserterapia e LED na Prevenção e Tratamento de Lesões.

No RC Educação, o estudo é contínuo e a evolução certa. Invista em você, na ciência e seja referência no que faz.`

export const mockFeatures = [
  'Feridas Sob Controle: da Avaliação ao Tratamento',
  'Coberturas e Desbridamento',
  'Terapia por Pressão Negativa',
  'Sutura para Enfermeiros',
  'Tapping na Prática',
  'Laserpuntura',
  'Laserterapia e LED na Prevenção e Tratamento de Lesões',
  'Mentorias Estratégicas e individuais',
  'Vivência no Consultório de Enfermagem'
]

export const mockBenefits = [
  'Metodologia dinâmica e professores experientes',
  'Formação de profissionais capacitados e confiantes',
  'Referência em empreendedorismo na enfermagem',
  'Estudo contínuo e evolução certa',
  'Orientação prática para empreendedorismo',
  'Aprendizado de gestão, marketing e precificação'
]

export default function RcEducacao() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="RC Educação"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'RC Educação', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/images/fundo1.jpeg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
