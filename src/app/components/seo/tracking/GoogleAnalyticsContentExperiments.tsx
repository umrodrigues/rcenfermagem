'use client'

import Script from 'next/script'

export default function GoogleAnalyticsContentExperiments() {
  return (
    <Script
      id="google-analytics-content-experiments"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'experiment_id',
              'custom_parameter_2': 'experiment_variant',
              'custom_parameter_3': 'experiment_name',
              'custom_parameter_4': 'experiment_value'
            }
          });
          
          function trackExperiment(experimentId, experimentVariant, experimentName, experimentValue) {
            gtag('event', 'experiment_view', {
              'experiment_id': experimentId,
              'experiment_variant': experimentVariant,
              'experiment_name': experimentName,
              'value': experimentValue
            });
          }
          
          window.trackExperiment = trackExperiment;
        `,
      }}
    />
  )
}
