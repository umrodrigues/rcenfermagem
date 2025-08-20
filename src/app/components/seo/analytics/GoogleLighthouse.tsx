'use client'

import Script from 'next/script'

export default function GoogleLighthouse() {
  return (
    <Script
      id="google-lighthouse"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'performance_score',
              'custom_parameter_2': 'accessibility_score',
              'custom_parameter_3': 'best_practices_score',
              'custom_parameter_4': 'seo_score'
            }
          });
        `,
      }}
    />
  )
}
