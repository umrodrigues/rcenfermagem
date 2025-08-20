'use client'

import Script from 'next/script'

export default function GoogleAnalyticsClickTracking() {
  return (
    <Script
      id="google-analytics-click-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'click_element',
              'custom_parameter_2': 'click_text',
              'custom_parameter_3': 'click_url',
              'custom_parameter_4': 'click_position'
            }
          });
          
          function trackClick(clickElement, clickText, clickUrl, clickPosition) {
            gtag('event', 'click', {
              'click_element': clickElement,
              'click_text': clickText,
              'click_url': clickUrl,
              'click_position': clickPosition
            });
          }
          
          window.trackClick = trackClick;
        `,
      }}
    />
  )
}
