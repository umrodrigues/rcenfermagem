'use client'

import Script from 'next/script'

export default function GoogleAnalyticsRevenueTracking() {
  return (
    <Script
      id="google-analytics-revenue-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'revenue_value',
              'custom_parameter_2': 'revenue_currency',
              'custom_parameter_3': 'revenue_source',
              'custom_parameter_4': 'revenue_campaign'
            }
          });
          
          function trackRevenue(revenueValue, revenueCurrency, revenueSource, revenueCampaign) {
            gtag('event', 'revenue_tracking', {
              'revenue_value': revenueValue,
              'revenue_currency': revenueCurrency,
              'revenue_source': revenueSource,
              'revenue_campaign': revenueCampaign
            });
          }
          
          window.trackRevenue = trackRevenue;
        `,
      }}
    />
  )
}
