
'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import AboutUs from '@/app/packages/components/about-us/about-us';

export default function QuemSomos() {
  return (
    <ViewportProvider>
        <DefaultLayout>
          <Breadcrumb 
            title="Quem Somos"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Quem Somos', href: '/quem-somos' }
            ]}
          />
          <AboutUs />
        </DefaultLayout>
    </ViewportProvider>
  );
}
