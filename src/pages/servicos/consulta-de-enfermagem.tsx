
'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Consulta de Enfermagem'

export const mockText = `A consulta de enfermagem é um processo sistemático de avaliação, diagnóstico, planejamento, implementação e avaliação dos cuidados prestados ao paciente.

Oferecemos acompanhamento individualizado com avaliação completa, orientações personalizadas e plano de cuidados exclusivo. Atuamos com foco na prevenção, promoção da saúde, bem-estar e reabilitação.

Nossa consulta inclui uma avaliação completa do estado de saúde, orientações personalizadas baseadas nas necessidades individuais e um plano de cuidados exclusivo e detalhado.`

export const mockFeatures = [
  'Avaliação completa do estado de saúde',
  'Orientações personalizadas baseadas nas necessidades individuais',
  'Plano de cuidados exclusivo e detalhado',
  'Acompanhamento contínuo e monitoramento dos resultados',
  'Foco na prevenção e promoção da saúde',
  'Atendimento humanizado e acolhedor'
]

export const mockBenefits = [
  'Cuidado personalizado e individualizado',
  'Prevenção de complicações',
  'Melhoria da qualidade de vida',
  'Orientação especializada em enfermagem',
  'Acompanhamento contínuo',
  'Segurança e conforto no atendimento'
]

export default function ConsultaDeEnfermagem() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Consulta de Enfermagem"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Consulta de Enfermagem', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/consenf.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
