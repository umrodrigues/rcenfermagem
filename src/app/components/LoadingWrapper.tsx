'use client'

import { useEffect } from 'react'
import { useLoadingStore } from '../stores/loadingStore'

interface LoadingWrapperProps {
  children: React.ReactNode
  duration?: number
}

export function LoadingWrapper({ children, duration = 500 }: LoadingWrapperProps) {
  const { setLoading } = useLoadingStore()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [setLoading, duration])

  return <>{children}</>
}
