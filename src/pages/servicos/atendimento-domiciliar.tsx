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

export const mockText = `Cuidados especializados no conforto do seu lar com segurança e profissionalismo.`

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
              imageSrc="/images/services/atenddomici.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
