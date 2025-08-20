'use client'

import Script from 'next/script'

export default function GoogleAnalyticsSocialInteractions() {
  return (
    <Script
      id="google-analytics-social-interactions"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'social_network',
              'custom_parameter_2': 'social_action',
              'custom_parameter_3': 'social_target',
              'custom_parameter_4': 'social_page'
            }
          });
          
          function trackSocialInteraction(socialNetwork, socialAction, socialTarget, socialPage) {
            gtag('event', 'social_interaction', {
              'social_network': socialNetwork,
              'social_action': socialAction,
              'social_target': socialTarget,
              'social_page': socialPage
            });
          }
          
          window.trackSocialInteraction = trackSocialInteraction;
        `,
      }}
    />
  )
}
