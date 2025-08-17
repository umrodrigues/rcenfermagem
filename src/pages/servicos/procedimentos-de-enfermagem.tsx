'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Procedimentos de enfermagem'

export const mockText = `Os procedimentos de enfermagem são técnicas especializadas realizadas por profissionais qualificados para promover, manter e restaurar a saúde do paciente. Estes procedimentos incluem curativos, coleta de exames, monitoramento de sinais vitais e outros cuidados técnicos.`

export default function ProcedimentosDeEnfermagem() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Procedimentos de Enfermagem"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Procedimentos de Enfermagem', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/imgblog3.jpeg" 
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
