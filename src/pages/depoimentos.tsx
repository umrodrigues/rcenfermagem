
'use client'

import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import Reviews from '@/app/packages/components/reviews/reviews';

export default function Depoimentos() {
  return (
    <ViewportProvider>
        <DefaultLayout>
          <Breadcrumb 
            title="Depoimentos"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Depoimentos', href: '/depoimentos' }
            ]}
          />
          <Reviews layout="grid" />
        </DefaultLayout>
    </ViewportProvider>
  );
}
