'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Administração de medicamentos'

export const mockText = `A administração de medicamentos é um procedimento fundamental na enfermagem que envolve a aplicação segura e correta de medicamentos prescritos. Este serviço inclui desde a verificação da prescrição médica até a aplicação por diferentes vias (oral, intramuscular, intravenosa, subcutânea, etc.).`

export default function AdministracaoDeMedicamentos() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
            items={[
                { name: 'Inicio', url: '/' },
                { name: 'Serviços', url: '/servicos' },
                { name: 'Administração de medicamentos', url: '' },
            ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/imgblog4.jpeg" 
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
