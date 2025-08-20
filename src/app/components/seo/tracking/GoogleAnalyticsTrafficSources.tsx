'use client'

import Script from 'next/script'

export default function GoogleAnalyticsTrafficSources() {
  return (
    <Script
      id="google-analytics-traffic-sources"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'traffic_source',
              'custom_parameter_2': 'traffic_medium',
              'custom_parameter_3': 'traffic_campaign',
              'custom_parameter_4': 'traffic_keyword'
            }
          });
          
          function trackTrafficSource(trafficSource, trafficMedium, trafficCampaign, trafficKeyword) {
            gtag('config', 'G-XXXXXXXXXX', {
              'traffic_source': trafficSource,
              'traffic_medium': trafficMedium,
              'traffic_campaign': trafficCampaign,
              'traffic_keyword': trafficKeyword
            });
          }
          
          window.trackTrafficSource = trackTrafficSource;
        `,
      }}
    />
  )
}
