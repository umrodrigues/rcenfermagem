'use client'

import Script from 'next/script'

export default function GoogleAnalyticsUserProperties() {
  return (
    <Script
      id="google-analytics-user-properties"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'user_properties': {
              'user_type': 'new_visitor',
              'user_location': 'Porto Alegre, RS',
              'user_device': 'desktop',
              'user_browser': 'chrome',
              'user_os': 'windows'
            }
          });
        `,
      }}
    />
  )
}
