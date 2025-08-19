'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Tratamento de Lesões de Difícil Cicatrização'

export const mockText = `Essa é nossa especialidade! Oferecemos recursos modernos e eficazes para o tratamento de diferentes tipos de lesões, promovendo recuperação mais rápida, segura e melhores resultados clínicos.

Utilizamos avaliação clínica criteriosa e prescrição dos melhores protocolos, incluindo laserterapia, ozonioterapia, aplicação de matriz de fibrina, curativo a vácuo (terapia por pressão negativa), bota de Unna e coberturas tecnológicas.

Cada procedimento é executado com técnica apurada, cuidado individualizado e seguindo rigorosamente os protocolos atualizados, garantindo conforto, segurança e tranquilidade ao paciente.`

export const mockFeatures = [
  'Laserterapia: estimula regeneração celular e acelera cicatrização',
  'Ozonioterapia: ação antimicrobiana e anti-inflamatória',
  'Aplicação de Matriz de Fibrina: promove regeneração tecidual',
  'Curativo a Vácuo: indicado para feridas crônicas',
  'Bota de Unna: eficaz no tratamento de úlceras venosas',
  'Coberturas tecnológicas: melhores coberturas disponíveis',
  'Avaliação clínica criteriosa',
  'Protocolos atualizados e eficazes'
]

export const mockBenefits = [
  'Recuperação mais rápida e segura',
  'Melhores resultados clínicos',
  'Tratamento de lesões complexas',
  'Técnica apurada e cuidado individualizado',
  'Protocolos atualizados e seguros',
  'Conforto e tranquilidade durante o tratamento'
]

export default function TratamentoDeLesoes() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Tratamento de Lesões"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Tratamento de Lesões', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/images/services/procenf.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
