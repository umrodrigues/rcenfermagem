'use client'

import { useEffect } from 'react'
import { useLoadingStore } from '../stores/loadingStore'
import { usePathname } from 'next/navigation'

export function useLoading() {
  const { setLoading } = useLoadingStore()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') {
      setLoading(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [pathname, setLoading])

  return { setLoading }
}
