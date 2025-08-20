'use client'

import Script from 'next/script'

export default function GoogleAnalyticsCustomMetrics() {
  return (
    <Script
      id="google-analytics-custom-metrics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'custom_metric_1',
              'custom_parameter_2': 'custom_metric_2',
              'custom_parameter_3': 'custom_metric_3',
              'custom_parameter_4': 'custom_metric_4',
              'custom_parameter_5': 'custom_metric_5'
            }
          });
          
          function setCustomMetric(metricIndex, metricValue) {
            gtag('config', 'G-XXXXXXXXXX', {
              'custom_map': {
                ['custom_parameter_' + metricIndex]: metricValue
              }
            });
          }
          
          window.setCustomMetric = setCustomMetric;
        `,
      }}
    />
  )
}
