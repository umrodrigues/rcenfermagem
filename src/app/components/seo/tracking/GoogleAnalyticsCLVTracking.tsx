'use client'

import Script from 'next/script'

export default function GoogleAnalyticsCLVTracking() {
  return (
    <Script
      id="google-analytics-clv-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'clv_value',
              'custom_parameter_2': 'clv_period',
              'custom_parameter_3': 'clv_source',
              'custom_parameter_4': 'clv_campaign'
            }
          });
          
          function trackCLV(clvValue, clvPeriod, clvSource, clvCampaign) {
            gtag('event', 'customer_lifetime_value', {
              'clv_value': clvValue,
              'clv_period': clvPeriod,
              'clv_source': clvSource,
              'clv_campaign': clvCampaign
            });
          }
          
          window.trackCLV = trackCLV;
        `,
      }}
    />
  )
}
