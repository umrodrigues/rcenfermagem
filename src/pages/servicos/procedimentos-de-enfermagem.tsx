'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';
import { useLoadingStore } from '../../app/stores/loadingStore';

export const mockTitle = 'Procedimentos de enfermagem'

export const mockText = `Os procedimentos de enfermagem são técnicas e métodos utilizados pelos profissionais de enfermagem para prestar cuidados aos pacientes. Esses procedimentos incluem desde técnicas básicas como aferição de sinais vitais, até procedimentos mais complexos como curativos, administração de medicamentos, sondagens e outros cuidados especializados.`

export default function ProcedimentosDeEnfermagem() {
  const { setLoading } = useLoadingStore()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
            items={[
                { name: 'Inicio', url: '/' },
                { name: 'Serviços', url: '/servicos' },
                { name: 'Procedimentos de enfermagem', url: '' },
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
