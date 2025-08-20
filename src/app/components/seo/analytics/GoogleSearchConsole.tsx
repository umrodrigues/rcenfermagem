'use client'

import Script from 'next/script'

export default function GoogleSearchConsole() {
  return (
    <Script
      id="google-search-console"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'search_term',
              'custom_parameter_2': 'landing_page',
              'custom_parameter_3': 'search_position'
            }
          });
        `,
      }}
    />
  )
}
