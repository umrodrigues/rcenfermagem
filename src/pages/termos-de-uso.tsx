
'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import TermsOfUse from '@/app/packages/components/using-terms/terms-of-use';

export default function TermosDeUso() {
  return (
    <ViewportProvider>
        <DefaultLayout>
          <Breadcrumb 
            title="Termos de Uso"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Termos de Uso', href: '/termos-de-uso' }
            ]}
          />
          <TermsOfUse />
        </DefaultLayout>
    </ViewportProvider>
  );
}
