'use client'

import Script from 'next/script'

export default function GoogleAnalyticsCustomEvents() {
  return (
    <Script
      id="google-analytics-custom-events"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'event_category',
              'custom_parameter_2': 'event_action',
              'custom_parameter_3': 'event_label',
              'custom_parameter_4': 'event_value'
            }
          });
          
          function trackCustomEvent(eventName, parameters) {
            gtag('event', eventName, parameters);
          }
          
          window.trackCustomEvent = trackCustomEvent;
        `,
      }}
    />
  )
}
