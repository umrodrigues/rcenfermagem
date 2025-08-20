'use client'

import Script from 'next/script'

export default function GoogleMyBusiness() {
  return (
    <Script
      id="google-my-business"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.gapi = window.gapi || {};
          window.gapi.load = window.gapi.load || function(){};
          window.gapi.load('client', function() {
            window.gapi.client.init({
              'apiKey': 'YOUR_GOOGLE_API_KEY',
              'clientId': 'YOUR_GOOGLE_CLIENT_ID',
              'scope': 'https://www.googleapis.com/auth/plus.business.manage'
            });
          });
        `,
      }}
    />
  )
}
