'use client'

import { useEffect, useState } from 'react'
import { GlobalLoading } from './GlobalLoading'
import { useLoading } from '../hooks/useLoading'
import { useLoadingStore } from '../stores/loadingStore'

export function Providers({ children }: { children: React.ReactNode }) {
  const { setLoading } = useLoadingStore()
  const [isClient, setIsClient] = useState(false)
  useLoading()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false)
      }, 1800)
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLoad)
      return () => document.removeEventListener('DOMContentLoaded', handleLoad)
    } else {
      handleLoad()
    }
  }, [setLoading, isClient])

  return (
    <>
      {children}
      {isClient && <GlobalLoading />}
    </>
  )
}
