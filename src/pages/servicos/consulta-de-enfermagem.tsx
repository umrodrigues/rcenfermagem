
'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Consulta de enfermagem'

export const mockText = `A consulta de enfermagem é um processo sistemático de avaliação, diagnóstico, planejamento, implementação e avaliação dos cuidados prestados ao paciente. Este serviço inclui uma avaliação completa do estado de saúde, orientações personalizadas e acompanhamento contínuo.`

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
              imageSrc="/imgblog1.jpeg" 
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
