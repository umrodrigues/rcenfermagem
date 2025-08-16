'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Atendimento domiciliar'

export const mockText = `O atendimento domiciliar é um serviço especializado que leva cuidados de enfermagem diretamente à residência do paciente. Este serviço oferece conforto, praticidade e atenção personalizada, permitindo que o paciente receba os cuidados necessários no ambiente familiar.`

export default function AtendimentoDomiciliar() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
            items={[
                { name: 'Inicio', url: '/' },
                { name: 'Serviços', url: '/servicos' },
                { name: 'Atendimento domiciliar', url: '' },
            ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/imgblog2.jpeg" 
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
