'use client'

import Script from 'next/script'

export default function GoogleDataStudio() {
  return (
    <Script
      id="google-data-studio"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'page_type',
              'custom_parameter_2': 'user_type',
              'custom_parameter_3': 'service_category'
            }
          });
        `,
      }}
    />
  )
}
