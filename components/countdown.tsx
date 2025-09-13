"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  target: Date
}

export function Countdown({ target }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<string>("")

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      if (difference > 0) {
        const minutes = Math.floor(difference / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft(`${minutes}m ${seconds}s`)
      } else {
        setTimeLeft("Departed")
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [target])

  return <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{timeLeft}</div>
}
