'use client'

import Script from 'next/script'

export default function GoogleAnalyticsProfitTracking() {
  return (
    <Script
      id="google-analytics-profit-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'profit_value',
              'custom_parameter_2': 'profit_margin',
              'custom_parameter_3': 'profit_source',
              'custom_parameter_4': 'profit_campaign'
            }
          });
          
          function trackProfit(profitValue, profitMargin, profitSource, profitCampaign) {
            gtag('event', 'profit_tracking', {
              'profit_value': profitValue,
              'profit_margin': profitMargin,
              'profit_source': profitSource,
              'profit_campaign': profitCampaign
            });
          }
          
          window.trackProfit = trackProfit;
        `,
      }}
    />
  )
}
