'use client'

import Script from 'next/script'

export default function GooglePageSpeed() {
  return (
    <Script
      id="google-pagespeed"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'page_load_time',
              'custom_parameter_2': 'first_contentful_paint',
              'custom_parameter_3': 'largest_contentful_paint'
            }
          });
        `,
      }}
    />
  )
}
