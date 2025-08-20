'use client'

import Script from 'next/script'

export default function GoogleAnalyticsEcommerce() {
  return (
    <Script
      id="google-analytics-ecommerce"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'transaction_id',
              'custom_parameter_2': 'transaction_value',
              'custom_parameter_3': 'transaction_tax',
              'custom_parameter_4': 'transaction_shipping',
              'custom_parameter_5': 'transaction_currency'
            }
          });
          
          function trackPurchase(transactionId, transactionValue, transactionTax, transactionShipping, transactionCurrency) {
            gtag('event', 'purchase', {
              'transaction_id': transactionId,
              'value': transactionValue,
              'tax': transactionTax,
              'shipping': transactionShipping,
              'currency': transactionCurrency
            });
          }
          
          window.trackPurchase = trackPurchase;
        `,
      }}
    />
  )
}
