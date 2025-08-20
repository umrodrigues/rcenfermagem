'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Teleconsulta'

export const mockText = `Atendimento remoto com qualidade e profissionalismo através de tecnologia avançada.`

export const mockFeatures = [
  'Avaliação inicial completa via videoconferência',
  'Orientações sobre cuidados de saúde personalizadas',
  'Monitoramento de sinais vitais quando necessário',
  'Prescrição de cuidados e tratamentos',
  'Acompanhamento contínuo através de plataformas seguras',
  'Agendamento flexível e atendimento 24/7',
  'Documentação completa do atendimento',
  'Suporte técnico durante a consulta'
]

export const mockBenefits = [
  'Comodidade e conforto sem sair de casa',
  'Economia de tempo e deslocamento',
  'Atendimento seguro e confidencial',
  'Flexibilidade de horários',
  'Redução de exposição a riscos',
  'Acesso facilitado a especialistas',
  'Continuidade dos cuidados de saúde',
  'Tecnologia avançada e plataformas seguras'
]

export default function Teleconsulta() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Teleconsulta"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Teleconsulta', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/images/services/teleconsulta.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
