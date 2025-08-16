
'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import PrivacyPolicy from '@/app/packages/components/privacy-policy/privacy-policy';

export default function PoliticaDePrivacidade() {
  return (
    <ViewportProvider>
        <DefaultLayout>
          <Breadcrumb 
            title="Política de Privacidade"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Política de Privacidade', href: '/politica-de-privacidade' }
            ]}
          />
          <PrivacyPolicy />
        </DefaultLayout>
    </ViewportProvider>
  );
}
