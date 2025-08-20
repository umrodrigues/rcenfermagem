'use client'

import Script from 'next/script'

export default function GoogleAnalyticsFunnels() {
  return (
    <Script
      id="google-analytics-funnels"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'funnel_name',
              'custom_parameter_2': 'funnel_step',
              'custom_parameter_3': 'funnel_position',
              'custom_parameter_4': 'funnel_completion'
            }
          });
          
          function trackFunnelStep(funnelName, funnelStep, funnelPosition) {
            gtag('event', 'funnel_step', {
              'funnel_name': funnelName,
              'funnel_step': funnelStep,
              'funnel_position': funnelPosition
            });
          }
          
          window.trackFunnelStep = trackFunnelStep;
        `,
      }}
    />
  )
}
