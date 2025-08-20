'use client'

import Script from 'next/script'

export default function GoogleAnalyticsBounceRateTracking() {
  return (
    <Script
      id="google-analytics-bounce-rate-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'bounce_rate',
              'custom_parameter_2': 'session_duration',
              'custom_parameter_3': 'pages_per_session',
              'custom_parameter_4': 'exit_rate'
            }
          });
          
          function trackBounceRate(bounceRate, sessionDuration, pagesPerSession, exitRate) {
            gtag('event', 'bounce_rate', {
              'bounce_rate': bounceRate,
              'session_duration': sessionDuration,
              'pages_per_session': pagesPerSession,
              'exit_rate': exitRate
            });
          }
          
          window.trackBounceRate = trackBounceRate;
        `,
      }}
    />
  )
}
