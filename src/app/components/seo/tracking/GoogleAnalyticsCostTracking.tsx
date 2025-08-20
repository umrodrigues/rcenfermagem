'use client'

import Script from 'next/script'

export default function GoogleAnalyticsCostTracking() {
  return (
    <Script
      id="google-analytics-cost-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'cost_value',
              'custom_parameter_2': 'cost_currency',
              'custom_parameter_3': 'cost_campaign',
              'custom_parameter_4': 'cost_source'
            }
          });
          
          function trackCost(costValue, costCurrency, costCampaign, costSource) {
            gtag('event', 'cost_tracking', {
              'cost_value': costValue,
              'cost_currency': costCurrency,
              'cost_campaign': costCampaign,
              'cost_source': costSource
            });
          }
          
          window.trackCost = trackCost;
        `,
      }}
    />
  )
}
