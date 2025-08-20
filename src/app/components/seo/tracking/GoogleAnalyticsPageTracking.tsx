'use client'

import Script from 'next/script'

export default function GoogleAnalyticsPageTracking() {
  return (
    <Script
      id="google-analytics-page-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'page_title',
              'custom_parameter_2': 'page_location',
              'custom_parameter_3': 'page_path',
              'custom_parameter_4': 'page_referrer'
            }
          });
          
          function trackPageView(pageTitle, pageLocation, pagePath, pageReferrer) {
            gtag('config', 'G-XXXXXXXXXX', {
              'page_title': pageTitle,
              'page_location': pageLocation,
              'page_path': pagePath,
              'page_referrer': pageReferrer
            });
          }
          
          window.trackPageView = trackPageView;
        `,
      }}
    />
  )
}
