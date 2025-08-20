'use client'

import Script from 'next/script'

export default function GoogleAnalyticsFormTracking() {
  return (
    <Script
      id="google-analytics-form-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'form_name',
              'custom_parameter_2': 'form_step',
              'custom_parameter_3': 'form_field',
              'custom_parameter_4': 'form_completion'
            }
          });
          
          function trackForm(formName, formStep, formField, formCompletion) {
            gtag('event', 'form_interaction', {
              'form_name': formName,
              'form_step': formStep,
              'form_field': formField,
              'form_completion': formCompletion
            });
          }
          
          window.trackForm = trackForm;
        `,
      }}
    />
  )
}
