'use client'

import Script from 'next/script'

export default function GoogleAnalyticsRemarketing() {
  return (
    <Script
      id="google-analytics-remarketing"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'audience_list',
              'custom_parameter_2': 'remarketing_list',
              'custom_parameter_3': 'user_segment',
              'custom_parameter_4': 'interest_category'
            }
          });
          
          function setRemarketingAudience(audienceList) {
            gtag('config', 'G-XXXXXXXXXX', {
              'custom_map': {
                'custom_parameter_1': audienceList
              }
            });
          }
          
          window.setRemarketingAudience = setRemarketingAudience;
        `,
      }}
    />
  )
}
