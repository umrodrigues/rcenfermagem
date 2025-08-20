'use client'

import Script from 'next/script'

export default function GoogleAnalyticsExceptionTracking() {
  return (
    <Script
      id="google-analytics-exception-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'exception_description',
              'custom_parameter_2': 'exception_fatal',
              'custom_parameter_3': 'exception_source',
              'custom_parameter_4': 'exception_line'
            }
          });
          
          function trackException(exceptionDescription, exceptionFatal, exceptionSource, exceptionLine) {
            gtag('event', 'exception', {
              'exception_description': exceptionDescription,
              'exception_fatal': exceptionFatal,
              'exception_source': exceptionSource,
              'exception_line': exceptionLine
            });
          }
          
          window.trackException = trackException;
          
          window.addEventListener('error', function(e) {
            trackException(e.message, false, e.filename, e.lineno);
          });
        `,
      }}
    />
  )
}
