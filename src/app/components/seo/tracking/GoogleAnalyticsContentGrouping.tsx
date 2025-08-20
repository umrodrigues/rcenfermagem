'use client'

import Script from 'next/script'

export default function GoogleAnalyticsContentGrouping() {
  return (
    <Script
      id="google-analytics-content-grouping"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'content_group_1',
              'custom_parameter_2': 'content_group_2',
              'custom_parameter_3': 'content_group_3',
              'custom_parameter_4': 'content_group_4',
              'custom_parameter_5': 'content_group_5'
            }
          });
          
          function setContentGroup(groupIndex, groupName) {
            gtag('config', 'G-XXXXXXXXXX', {
              'custom_map': {
                ['custom_parameter_' + groupIndex]: groupName
              }
            });
          }
          
          window.setContentGroup = setContentGroup;
        `,
      }}
    />
  )
}
