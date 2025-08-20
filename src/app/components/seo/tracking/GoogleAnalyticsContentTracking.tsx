'use client'

import Script from 'next/script'

export default function GoogleAnalyticsContentTracking() {
  return (
    <Script
      id="google-analytics-content-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'content_title',
              'custom_parameter_2': 'content_category',
              'custom_parameter_3': 'content_type',
              'custom_parameter_4': 'content_author'
            }
          });
          
          function trackContent(contentTitle, contentCategory, contentType, contentAuthor) {
            gtag('event', 'content_view', {
              'content_title': contentTitle,
              'content_category': contentCategory,
              'content_type': contentType,
              'content_author': contentAuthor
            });
          }
          
          window.trackContent = trackContent;
        `,
      }}
    />
  )
}
