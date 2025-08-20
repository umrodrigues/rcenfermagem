'use client'

import Script from 'next/script'

export default function GoogleCoreWebVitals() {
  return (
    <Script
      id="google-core-web-vitals"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'largest_contentful_paint',
              'custom_parameter_2': 'first_input_delay',
              'custom_parameter_3': 'cumulative_layout_shift'
            }
          });
        `,
      }}
    />
  )
}
