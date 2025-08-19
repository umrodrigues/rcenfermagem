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

export const mockText = `A laserterapia é uma técnica avançada e não invasiva que utiliza a energia luminosa do laser para promover a regeneração tecidual, acelerar a cicatrização e tratar diversos problemas de pele.

Nossa equipe é especializada em laserterapia aplicada ao tratamento de lesões, utilizando equipamentos de última geração e protocolos cientificamente comprovados. O tratamento é personalizado para cada paciente, considerando o tipo de lesão, localização e características individuais.

A laserterapia oferece resultados eficazes no tratamento de úlceras venosas, úlceras por pressão, feridas cirúrgicas, queimaduras, lesões de difícil cicatrização e problemas dermatológicos. O procedimento é seguro, indolor e pode ser realizado no consultório ou no domicílio do paciente.`

export const mockFeatures = [
  'Avaliação completa da lesão antes do tratamento',
  'Protocolos personalizados baseados no tipo de lesão',
  'Aplicação de laser de baixa intensidade (LLLT)',
  'Tratamento de úlceras venosas e por pressão',
  'Aceleração da cicatrização de feridas cirúrgicas',
  'Tratamento de queimaduras e lesões térmicas',
  'Terapia para lesões de difícil cicatrização',
  'Acompanhamento contínuo dos resultados',
  'Documentação fotográfica do progresso',
  'Orientações sobre cuidados pós-tratamento'
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
              imageSrc="/grasi2.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
