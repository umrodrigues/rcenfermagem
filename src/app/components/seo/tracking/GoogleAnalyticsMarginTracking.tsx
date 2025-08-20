'use client'

import Script from 'next/script'

export default function GoogleAnalyticsMarginTracking() {
  return (
    <Script
      id="google-analytics-margin-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'margin_value',
              'custom_parameter_2': 'margin_percentage',
              'custom_parameter_3': 'margin_type',
              'custom_parameter_4': 'margin_campaign'
            }
          });
          
          function trackMargin(marginValue, marginPercentage, marginType, marginCampaign) {
            gtag('event', 'margin_tracking', {
              'margin_value': marginValue,
              'margin_percentage': marginPercentage,
              'margin_type': marginType,
              'margin_campaign': marginCampaign
            });
          }
          
          window.trackMargin = trackMargin;
        `,
      }}
    />
  )
}
