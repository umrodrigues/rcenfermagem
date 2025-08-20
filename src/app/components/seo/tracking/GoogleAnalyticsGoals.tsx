'use client'

import Script from 'next/script'

export default function GoogleAnalyticsGoals() {
  return (
    <Script
      id="google-analytics-goals"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'goal_id',
              'custom_parameter_2': 'goal_name',
              'custom_parameter_3': 'goal_value',
              'custom_parameter_4': 'goal_completion'
            }
          });
          
          function trackGoal(goalId, goalName, goalValue) {
            gtag('event', 'goal_completion', {
              'goal_id': goalId,
              'goal_name': goalName,
              'value': goalValue
            });
          }
          
          window.trackGoal = trackGoal;
        `,
      }}
    />
  )
}
