'use client'

import { useEffect, useState } from 'react'
import { useLoadingStore } from '../stores/loadingStore'
import { usePathname } from 'next/navigation'

export function useLoading() {
  const { setLoading } = useLoadingStore()
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    if (pathname !== '/') {
      setLoading(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [pathname, setLoading, isClient])

  return { setLoading }
}
