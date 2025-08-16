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

export const mockTitle = 'Atendimento domiciliar'

export const mockText = `O atendimento domiciliar é um serviço de enfermagem que oferece cuidados profissionais no conforto da casa do paciente. Este tipo de atendimento é ideal para pessoas que têm dificuldade de locomoção, idosos, pacientes em recuperação pós-cirúrgica ou que necessitam de cuidados contínuos.`

export default function AtendimentoDomiciliar() {
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
                { name: 'Atendimento domiciliar', url: '' },
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
