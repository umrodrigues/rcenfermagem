'use client'

import Script from 'next/script'

export default function GooglePageSpeedAPI() {
  return (
    <Script
      id="google-pagespeed-api"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'first_contentful_paint',
              'custom_parameter_2': 'speed_index',
              'custom_parameter_3': 'largest_contentful_paint',
              'custom_parameter_4': 'time_to_interactive',
              'custom_parameter_5': 'total_blocking_time',
              'custom_parameter_6': 'cumulative_layout_shift'
            }
          });
        `,
      }}
    />
  )
}
