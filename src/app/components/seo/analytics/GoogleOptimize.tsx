'use client'

import Script from 'next/script'

export default function GoogleOptimize() {
  const OPTIMIZE_ID = process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID || 'OPT-XXXXXXXX'

  return (
    <Script
      id="google-optimize"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(i,s,o,g,r,a,m){i['GoogleOptimizeObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.googleoptimize.com/optimize.js?id=${OPTIMIZE_ID}');
        `,
      }}
    />
  )
}
