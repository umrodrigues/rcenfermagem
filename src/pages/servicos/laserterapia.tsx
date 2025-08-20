'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Laserterapia'

export const mockText = `Técnica avançada com laser para regeneração tecidual e aceleração da cicatrização.`

export const mockFeatures = [
  'Avaliação completa da lesão antes do tratamento',
  'Protocolos personalizados baseados no tipo de lesão',
  'Aplicação de laser de baixa intensidade',
  'Tratamento de úlceras venosas e por pressão',
  'Tratamento de queimaduras',
  'Terapia para lesões de difícil cicatrização',
  'Acompanhamento contínuo dos resultados',
  'Documentação fotográfica do progresso',
  'Orientações sobre cuidados pós-tratamento',
  'Tratamento de lesão por pressão'
]

export const mockBenefits = [
  'Aceleração significativa do processo de cicatrização',
  'Redução da dor e inflamação',
  'Melhoria da circulação sanguínea local',
  'Estímulo da regeneração celular',
  'Tratamento não invasivo e indolor',
  'Resultados comprovados cientificamente',
  'Aplicação segura e controlada',
  'Redução do risco de infecções',
  'Melhoria da qualidade da cicatriz',
  'Tratamento personalizado para cada caso'
]

export default function Laserterapia() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Laserterapia"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Laserterapia', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/images/services/grasi2.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
