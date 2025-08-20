'use client'

import Script from 'next/script'

export default function GoogleRichResults() {
  return (
    <Script
      id="google-rich-results"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'rich_results',
              'custom_parameter_2': 'structured_data',
              'custom_parameter_3': 'enhanced_snippets'
            }
          });
        `,
      }}
    />
  )
}
