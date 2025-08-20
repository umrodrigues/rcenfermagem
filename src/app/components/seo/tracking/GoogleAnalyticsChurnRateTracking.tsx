'use client'

import Script from 'next/script'

export default function GoogleAnalyticsChurnRateTracking() {
  return (
    <Script
      id="google-analytics-churn-rate-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'churn_rate',
              'custom_parameter_2': 'churn_period',
              'custom_parameter_3': 'churn_reason',
              'custom_parameter_4': 'churn_segment'
            }
          });
          
          function trackChurnRate(churnRate, churnPeriod, churnReason, churnSegment) {
            gtag('event', 'churn_rate', {
              'churn_rate': churnRate,
              'churn_period': churnPeriod,
              'churn_reason': churnReason,
              'churn_segment': churnSegment
            });
          }
          
          window.trackChurnRate = trackChurnRate;
        `,
      }}
    />
  )
}
