'use client'

import Script from 'next/script'

export default function GoogleAnalyticsVideoTracking() {
  return (
    <Script
      id="google-analytics-video-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            'send_page_view': true,
            'custom_map': {
              'custom_parameter_1': 'video_title',
              'custom_parameter_2': 'video_duration',
              'custom_parameter_3': 'video_percent',
              'custom_parameter_4': 'video_action'
            }
          });
          
          function trackVideo(videoTitle, videoDuration, videoPercent, videoAction) {
            gtag('event', 'video_interaction', {
              'video_title': videoTitle,
              'video_duration': videoDuration,
              'video_percent': videoPercent,
              'video_action': videoAction
            });
          }
          
          window.trackVideo = trackVideo;
        `,
      }}
    />
  )
}
