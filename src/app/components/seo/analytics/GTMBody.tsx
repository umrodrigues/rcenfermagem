'use client'

import { useEffect } from 'react'

export default function GTMBody() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WD5BFB65'

  useEffect(() => {
    console.log('[GTM BODY DEBUG] NoScript iframe configurado para:', GTM_ID)
  }, [GTM_ID])

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
