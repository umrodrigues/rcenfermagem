'use client'

import Script from 'next/script'

export default function GoogleMobileFriendly() {
  return (
    <Script
      id="google-mobile-friendly"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'mobile_friendly',
              'custom_parameter_2': 'viewport_width',
              'custom_parameter_3': 'touch_elements'
            }
          });
        `,
      }}
    />
  )
}
