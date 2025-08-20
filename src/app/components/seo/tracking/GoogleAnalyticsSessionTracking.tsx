'use client'

import Script from 'next/script'

export default function GoogleAnalyticsSessionTracking() {
  return (
    <Script
      id="google-analytics-session-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'session_id',
              'custom_parameter_2': 'session_start',
              'custom_parameter_3': 'session_duration',
              'custom_parameter_4': 'session_pages'
            }
          });
          
          function trackSession(sessionId, sessionStart, sessionDuration, sessionPages) {
            gtag('event', 'session_start', {
              'session_id': sessionId,
              'session_start': sessionStart,
              'session_duration': sessionDuration,
              'session_pages': sessionPages
            });
          }
          
          window.trackSession = trackSession;
        `,
      }}
    />
  )
}
