'use client'

import Script from 'next/script'

export default function GoogleAnalyticsTiming() {
  return (
    <Script
      id="google-analytics-timing"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'timing_category',
              'custom_parameter_2': 'timing_var',
              'custom_parameter_3': 'timing_value',
              'custom_parameter_4': 'timing_label'
            }
          });
          
          function trackTiming(timingCategory, timingVar, timingValue, timingLabel) {
            gtag('event', 'timing_complete', {
              'timing_category': timingCategory,
              'timing_var': timingVar,
              'timing_value': timingValue,
              'timing_label': timingLabel
            });
          }
          
          window.trackTiming = trackTiming;
        `,
      }}
    />
  )
}
