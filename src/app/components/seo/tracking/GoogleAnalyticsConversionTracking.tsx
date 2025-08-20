'use client'

import Script from 'next/script'

export default function GoogleAnalyticsConversionTracking() {
  return (
    <Script
      id="google-analytics-conversion-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'conversion_id',
              'custom_parameter_2': 'conversion_label',
              'custom_parameter_3': 'conversion_value',
              'custom_parameter_4': 'conversion_currency'
            }
          });
          
          function trackConversion(conversionId, conversionLabel, conversionValue, conversionCurrency) {
            gtag('event', 'conversion', {
              'send_to': 'AW-' + conversionId + '/' + conversionLabel,
              'value': conversionValue,
              'currency': conversionCurrency
            });
          }
          
          window.trackConversion = trackConversion;
        `,
      }}
    />
  )
}
