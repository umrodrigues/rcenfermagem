'use client'

import Script from 'next/script'

export default function GoogleAnalyticsCustomDimensions() {
  return (
    <Script
      id="google-analytics-custom-dimensions"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'custom_dimension_1',
              'custom_parameter_2': 'custom_dimension_2',
              'custom_parameter_3': 'custom_dimension_3',
              'custom_parameter_4': 'custom_dimension_4',
              'custom_parameter_5': 'custom_dimension_5'
            }
          });
          
          function setCustomDimension(dimensionIndex, dimensionValue) {
            gtag('config', 'G-XXXXXXXXXX', {
              'custom_map': {
                ['custom_parameter_' + dimensionIndex]: dimensionValue
              }
            });
          }
          
          window.setCustomDimension = setCustomDimension;
        `,
      }}
    />
  )
}
