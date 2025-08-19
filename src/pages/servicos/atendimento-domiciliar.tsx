'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Atendimento Domiciliar'

export const mockText = `Oferecemos cuidados especializados no conforto do seu lar, com toda a segurança e profissionalismo que você merece.

Nossos serviços domiciliares incluem consulta de enfermagem domiciliar, procedimentos de enfermagem no lar, administração de medicamentos, tratamento de lesões e curativos especiais, monitoramento de sinais vitais, orientação familiar sobre cuidados, acompanhamento de pacientes crônicos e cuidados paliativos domiciliares.

Vamos até você, proporcionando conforto, privacidade e qualidade de vida. Nossos profissionais são especialistas e com experiência na enfermagem, preparados para atender suas necessidades específicas no ambiente familiar.`

export const mockFeatures = [
  'Consulta de enfermagem domiciliar',
  'Procedimentos de enfermagem no lar',
  'Administração de medicamentos',
  'Tratamento de lesões e curativos especiais',
  'Monitoramento de sinais vitais',
  'Orientação familiar sobre cuidados',
  'Acompanhamento de pacientes crônicos',
  'Cuidados paliativos domiciliares'
]

export const mockBenefits = [
  'Cuidados no conforto do seu lar',
  'Segurança e profissionalismo',
  'Conforto, privacidade e qualidade de vida',
  'Profissionais especialistas e experientes',
  'Atendimento personalizado no ambiente familiar',
  'Flexibilidade de horários'
]

export default function AtendimentoDomiciliar() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Atendimento Domiciliar"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Atendimento Domiciliar', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/atenddomici.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
