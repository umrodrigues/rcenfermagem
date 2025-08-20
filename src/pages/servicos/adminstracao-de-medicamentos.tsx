'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Administração de Medicamentos'

export const mockText = `Administração segura de medicamentos com acompanhamento profissional especializado.`

export const mockFeatures = [
  'Administração de medicamentos por via oral',
  'Injeções intramusculares e subcutâneas',
  'Administração intravenosa',
  'Monitoramento de reações adversas',
  'Orientação sobre horários e dosagens',
  'Acompanhamento da eficácia do tratamento',
  'Registro detalhado de todas as administrações',
  'Seguimento rigoroso da prescrição médica'
]

export const mockBenefits = [
  'Administração segura e responsável',
  'Acompanhamento profissional habilitado',
  'Cuidado, precisão e tranquilidade',
  'Atendimento no consultório ou domiciliar',
  'Protocolos atualizados e seguros',
  'Monitoramento contínuo da eficácia'
]

export default function AdministracaoDeMedicamentos() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
              title="Administração de Medicamentos"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Administração de Medicamentos', href: '' },
              ]}
            />

             <ServiceSection
              title={mockTitle}
              text={mockText}
              imageSrc="/images/backgrounds/banner1.jpeg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
