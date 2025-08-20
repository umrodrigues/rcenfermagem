'use client'

import Script from 'next/script'

export default function GoogleAnalyticsDemographics() {
  return (
    <Script
      id="google-analytics-demographics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'age_group',
              'custom_parameter_2': 'gender',
              'custom_parameter_3': 'interests',
              'custom_parameter_4': 'affinity_category'
            }
          });
          
          function setDemographics(ageGroup, gender, interests) {
            gtag('config', 'G-XXXXXXXXXX', {
              'custom_map': {
                'custom_parameter_1': ageGroup,
                'custom_parameter_2': gender,
                'custom_parameter_3': interests
              }
            });
          }
          
          window.setDemographics = setDemographics;
        `,
      }}
    />
  )
}
