'use client'

import { useEffect } from 'react'
import { GlobalLoading } from './GlobalLoading'
import { useLoading } from '../hooks/useLoading'
import { useLoadingStore } from '../stores/loadingStore'

export function Providers({ children }: { children: React.ReactNode }) {
  const { setLoading } = useLoadingStore()
  useLoading()

  useEffect(() => {
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
  }, [setLoading])

  return (
    <>
      {children}
      <GlobalLoading />
    </>
  )
}
