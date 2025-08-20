'use client'

import Script from 'next/script'

export default function GoogleAnalyticsRetentionRateTracking() {
  return (
    <Script
      id="google-analytics-retention-rate-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'retention_rate',
              'custom_parameter_2': 'retention_period',
              'custom_parameter_3': 'retention_cohort',
              'custom_parameter_4': 'retention_segment'
            }
          });
          
          function trackRetentionRate(retentionRate, retentionPeriod, retentionCohort, retentionSegment) {
            gtag('event', 'retention_rate', {
              'retention_rate': retentionRate,
              'retention_period': retentionPeriod,
              'retention_cohort': retentionCohort,
              'retention_segment': retentionSegment
            });
          }
          
          window.trackRetentionRate = trackRetentionRate;
        `,
      }}
    />
  )
}
