'use client'

import Script from 'next/script'

export default function GoogleAnalyticsEngagementTracking() {
  return (
    <Script
      id="google-analytics-engagement-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'engagement_time',
              'custom_parameter_2': 'engagement_score',
              'custom_parameter_3': 'engagement_actions',
              'custom_parameter_4': 'engagement_duration'
            }
          });
          
          function trackEngagement(engagementTime, engagementScore, engagementActions, engagementDuration) {
            gtag('event', 'user_engagement', {
              'engagement_time': engagementTime,
              'engagement_score': engagementScore,
              'engagement_actions': engagementActions,
              'engagement_duration': engagementDuration
            });
          }
          
          window.trackEngagement = trackEngagement;
        `,
      }}
    />
  )
}
