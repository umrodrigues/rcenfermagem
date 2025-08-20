'use client'

import Script from 'next/script'

export default function GoogleAnalyticsScrollTracking() {
  return (
    <Script
      id="google-analytics-scroll-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'scroll_depth',
              'custom_parameter_2': 'scroll_percent',
              'custom_parameter_3': 'scroll_section',
              'custom_parameter_4': 'scroll_time'
            }
          });
          
          function trackScroll(scrollDepth, scrollPercent, scrollSection, scrollTime) {
            gtag('event', 'scroll', {
              'scroll_depth': scrollDepth,
              'scroll_percent': scrollPercent,
              'scroll_section': scrollSection,
              'scroll_time': scrollTime
            });
          }
          
          window.trackScroll = trackScroll;
        `,
      }}
    />
  )
}
