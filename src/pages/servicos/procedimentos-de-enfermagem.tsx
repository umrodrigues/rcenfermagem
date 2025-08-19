'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Procedimentos de Enfermagem'

export const mockText = `Realizamos todos os procedimentos de enfermagem que são de responsabilidade técnica e legal do enfermeiro, com segurança, ética e competência.

Nossos procedimentos incluem sondagens nasoenteral e nasogástrica, sondagem vesical de alívio e de demora, retirada de pontos, salinização de cateter PICC, troca de curativos de acesso venoso central, administração de medicamentos por via oral, injetável, subcutânea, intravenosa e outras, curativos especiais e tratamento de lesões, monitoramento de sinais vitais e coleta de exames laboratoriais.

Cada procedimento é executado com técnica apurada, cuidado individualizado e seguindo rigorosamente os protocolos atualizados, garantindo conforto, segurança e tranquilidade ao paciente.`

export const mockFeatures = [
  'Sondagens nasoenteral e nasogástrica',
  'Sondagem vesical de alívio e de demora',
  'Retirada de pontos',
  'Salinização de cateter PICC',
  'Troca de curativos de acesso venoso central',
  'Administração de medicamentos por diferentes vias',
  'Curativos especiais e tratamento de lesões',
  'Monitoramento de sinais vitais',
  'Coleta de exames laboratoriais'
]

export const mockBenefits = [
  'Execução com técnica apurada e protocolos atualizados',
  'Cuidado individualizado para cada paciente',
  'Segurança e ética em todos os procedimentos',
  'Conforto e tranquilidade durante o atendimento',
  'Profissionais especialistas e experientes',
  'Atendimento no consultório ou domiciliar'
]

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
              imageSrc="/images/services/consultaenf2.jpg"
              features={mockFeatures}
              benefits={mockBenefits}
            />
        </DefaultLayout>
    </ViewportProvider>
  );
}
