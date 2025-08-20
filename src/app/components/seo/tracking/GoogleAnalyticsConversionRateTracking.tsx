'use client'

import Script from 'next/script'

export default function GoogleAnalyticsConversionRateTracking() {
  return (
    <Script
      id="google-analytics-conversion-rate-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'conversion_rate',
              'custom_parameter_2': 'conversion_value',
              'custom_parameter_3': 'conversion_goal',
              'custom_parameter_4': 'conversion_funnel'
            }
          });
          
          function trackConversionRate(conversionRate, conversionValue, conversionGoal, conversionFunnel) {
            gtag('event', 'conversion_rate', {
              'conversion_rate': conversionRate,
              'conversion_value': conversionValue,
              'conversion_goal': conversionGoal,
              'conversion_funnel': conversionFunnel
            });
          }
          
          window.trackConversionRate = trackConversionRate;
        `,
      }}
    />
  )
}
