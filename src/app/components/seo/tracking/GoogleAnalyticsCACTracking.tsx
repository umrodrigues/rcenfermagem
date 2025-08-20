'use client'

import Script from 'next/script'

export default function GoogleAnalyticsCACTracking() {
  return (
    <Script
      id="google-analytics-cac-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'cac_value',
              'custom_parameter_2': 'cac_period',
              'custom_parameter_3': 'cac_source',
              'custom_parameter_4': 'cac_campaign'
            }
          });
          
          function trackCAC(cacValue, cacPeriod, cacSource, cacCampaign) {
            gtag('event', 'customer_acquisition_cost', {
              'cac_value': cacValue,
              'cac_period': cacPeriod,
              'cac_source': cacSource,
              'cac_campaign': cacCampaign
            });
          }
          
          window.trackCAC = trackCAC;
        `,
      }}
    />
  )
}
