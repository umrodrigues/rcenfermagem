'use client'

import Script from 'next/script'

export default function GoogleAnalyticsUserTiming() {
  return (
    <Script
      id="google-analytics-user-timing"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'user_timing_category',
              'custom_parameter_2': 'user_timing_var',
              'custom_parameter_3': 'user_timing_value',
              'custom_parameter_4': 'user_timing_label'
            }
          });
          
          function trackUserTiming(userTimingCategory, userTimingVar, userTimingValue, userTimingLabel) {
            gtag('event', 'user_timing', {
              'user_timing_category': userTimingCategory,
              'user_timing_var': userTimingVar,
              'user_timing_value': userTimingValue,
              'user_timing_label': userTimingLabel
            });
          }
          
          window.trackUserTiming = trackUserTiming;
        `,
      }}
    />
  )
}
