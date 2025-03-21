'use client'

import { useEffect, useState } from 'react'

export function LiveTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: Date) => {
    const hours = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, '0')
    const seconds = time.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div className="font-mono text-sm text-neutral-600 dark:text-neutral-400 mt-8">
      {formatTime(time)}
    </div>
  )
}
