'use client'

import Script from 'next/script'

export default function GoogleAnalyticsCampaignTracking() {
  return (
    <Script
      id="google-analytics-campaign-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'campaign_source',
              'custom_parameter_2': 'campaign_medium',
              'custom_parameter_3': 'campaign_name',
              'custom_parameter_4': 'campaign_term',
              'custom_parameter_5': 'campaign_content'
            }
          });
          
          function trackCampaign(campaignSource, campaignMedium, campaignName, campaignTerm, campaignContent) {
            gtag('config', 'G-XXXXXXXXXX', {
              'campaign_source': campaignSource,
              'campaign_medium': campaignMedium,
              'campaign_name': campaignName,
              'campaign_term': campaignTerm,
              'campaign_content': campaignContent
            });
          }
          
          window.trackCampaign = trackCampaign;
        `,
      }}
    />
  )
}
