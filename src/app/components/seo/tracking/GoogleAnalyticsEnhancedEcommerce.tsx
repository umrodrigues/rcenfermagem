'use client'

import Script from 'next/script'

export default function GoogleAnalyticsEnhancedEcommerce() {
  return (
    <Script
      id="google-analytics-enhanced-ecommerce"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'service_category',
              'custom_parameter_2': 'service_name',
              'custom_parameter_3': 'service_price',
              'custom_parameter_4': 'service_quantity',
              'custom_parameter_5': 'service_brand'
            }
          });
        `,
      }}
    />
  )
}
