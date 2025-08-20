'use client'

import Script from 'next/script'

export default function GoogleSearchConsoleAPI() {
  return (
    <Script
      id="google-search-console-api"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'search_queries',
              'custom_parameter_2': 'click_through_rate',
              'custom_parameter_3': 'average_position',
              'custom_parameter_4': 'impressions',
              'custom_parameter_5': 'clicks'
            }
          });
        `,
      }}
    />
  )
}
