'use client'

import Script from 'next/script'

export default function GoogleAnalyticsSiteSearch() {
  return (
    <Script
      id="google-analytics-site-search"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'search_term',
              'custom_parameter_2': 'search_results',
              'custom_parameter_3': 'search_category',
              'custom_parameter_4': 'search_position'
            }
          });
          
          function trackSiteSearch(searchTerm, searchResults, searchCategory, searchPosition) {
            gtag('event', 'site_search', {
              'search_term': searchTerm,
              'search_results': searchResults,
              'search_category': searchCategory,
              'search_position': searchPosition
            });
          }
          
          window.trackSiteSearch = trackSiteSearch;
        `,
      }}
    />
  )
}
