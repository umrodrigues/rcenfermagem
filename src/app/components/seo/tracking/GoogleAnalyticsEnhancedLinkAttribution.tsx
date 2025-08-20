'use client'

import Script from 'next/script'

export default function GoogleAnalyticsEnhancedLinkAttribution() {
  return (
    <Script
      id="google-analytics-enhanced-link-attribution"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'link_id',
              'custom_parameter_2': 'link_text',
              'custom_parameter_3': 'link_url',
              'custom_parameter_4': 'link_position'
            }
          });
          
          function trackLinkClick(linkId, linkText, linkUrl, linkPosition) {
            gtag('event', 'link_click', {
              'link_id': linkId,
              'link_text': linkText,
              'link_url': linkUrl,
              'link_position': linkPosition
            });
          }
          
          window.trackLinkClick = trackLinkClick;
        `,
      }}
    />
  )
}
