'use client'

import Script from 'next/script'

export default function GoogleAnalyticsROITracking() {
  return (
    <Script
      id="google-analytics-roi-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'roi_value',
              'custom_parameter_2': 'roi_percentage',
              'custom_parameter_3': 'roi_campaign',
              'custom_parameter_4': 'roi_source'
            }
          });
          
          function trackROI(roiValue, roiPercentage, roiCampaign, roiSource) {
            gtag('event', 'roi_tracking', {
              'roi_value': roiValue,
              'roi_percentage': roiPercentage,
              'roi_campaign': roiCampaign,
              'roi_source': roiSource
            });
          }
          
          window.trackROI = trackROI;
        `,
      }}
    />
  )
}
