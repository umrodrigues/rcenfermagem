'use client'

import Script from 'next/script'

export default function GoogleAnalyticsUserTracking() {
  return (
    <Script
      id="google-analytics-user-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'user_id',
              'custom_parameter_2': 'user_type',
              'custom_parameter_3': 'user_segment',
              'custom_parameter_4': 'user_behavior'
            }
          });
          
          function trackUser(userId, userType, userSegment, userBehavior) {
            gtag('config', 'G-XXXXXXXXXX', {
              'user_id': userId,
              'custom_map': {
                'custom_parameter_2': userType,
                'custom_parameter_3': userSegment,
                'custom_parameter_4': userBehavior
              }
            });
          }
          
          window.trackUser = trackUser;
        `,
      }}
    />
  )
}
