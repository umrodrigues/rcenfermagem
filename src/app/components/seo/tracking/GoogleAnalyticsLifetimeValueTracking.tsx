'use client'

import Script from 'next/script'

export default function GoogleAnalyticsLifetimeValueTracking() {
  return (
    <Script
      id="google-analytics-lifetime-value-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'ltv_value',
              'custom_parameter_2': 'ltv_period',
              'custom_parameter_3': 'ltv_source',
              'custom_parameter_4': 'ltv_campaign'
            }
          });
          
          function trackLifetimeValue(ltvValue, ltvPeriod, ltvSource, ltvCampaign) {
            gtag('event', 'lifetime_value', {
              'ltv_value': ltvValue,
              'ltv_period': ltvPeriod,
              'ltv_source': ltvSource,
              'ltv_campaign': ltvCampaign
            });
          }
          
          window.trackLifetimeValue = trackLifetimeValue;
        `,
      }}
    />
  )
}
