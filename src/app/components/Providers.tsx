'use client'

import { useEffect } from 'react'
import { GlobalLoading } from './GlobalLoading'
import { useLoading } from '../hooks/useLoading'
import { useLoadingStore } from '../stores/loadingStore'

export function Providers({ children }: { children: React.ReactNode }) {
  const { setLoading } = useLoadingStore()
  useLoading()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <>
      {children}
      <GlobalLoading />
    </>
  )
}
