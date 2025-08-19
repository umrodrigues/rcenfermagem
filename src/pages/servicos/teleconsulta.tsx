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

export const mockText = `A teleconsulta de enfermagem é uma modalidade inovadora que permite o atendimento remoto com toda a qualidade e profissionalismo dos nossos serviços.

Oferecemos consultas online com avaliação completa, orientações personalizadas e acompanhamento contínuo, proporcionando comodidade e segurança sem sair de casa. Utilizamos tecnologia avançada para garantir uma experiência de atendimento excepcional.

Nossa teleconsulta inclui avaliação inicial, orientações sobre cuidados de saúde, monitoramento de sinais vitais quando necessário, prescrição de cuidados e acompanhamento contínuo através de plataformas seguras e confiáveis.`

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
              imageSrc="/teleconsulta.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
