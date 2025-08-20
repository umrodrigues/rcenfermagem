'use client'

import Script from 'next/script'

export default function GoogleURLInspection() {
  return (
    <Script
      id="google-url-inspection"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'url_status',
              'custom_parameter_2': 'indexing_status',
              'custom_parameter_3': 'mobile_usability'
            }
          });
        `,
      }}
    />
  )
}
