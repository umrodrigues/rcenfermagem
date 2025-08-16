
'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServicesGrid from '@/app/packages/components/rc-services/services-grid';

export default function Servicos() {
  return (
    <ViewportProvider>
        <DefaultLayout>
          <Breadcrumb 
            title="Serviços"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Serviços', href: '/servicos' }
            ]}
          />
          <ServicesGrid />
        </DefaultLayout>
    </ViewportProvider>
  );
}
