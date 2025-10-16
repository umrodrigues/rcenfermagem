'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function GTMHead() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WD5BFB65'

  useEffect(() => {
    console.log('[GTM DEBUG] GTM_ID:', GTM_ID)
    console.log('[GTM DEBUG] GTM Script carregando...')
  }, [GTM_ID])

  return (
    <Script
      id="gtm-head"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('[GTM DEBUG] ✅ GTM Script carregado com sucesso!')
        console.log('[GTM DEBUG] dataLayer:', typeof window !== 'undefined' ? (window as any).dataLayer : 'undefined')
      }}
      onError={(e) => {
        console.error('[GTM DEBUG] ❌ Erro ao carregar GTM:', e)
      }}
      dangerouslySetInnerHTML={{
        __html: `
          console.log('[GTM DEBUG] Executando script GTM inline...');
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          j.onload=function(){console.log('[GTM DEBUG] ✅ GTM.js externo carregado!')};
          j.onerror=function(){console.error('[GTM DEBUG] ❌ Erro ao carregar gtm.js externo')};
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  )
}
