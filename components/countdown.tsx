"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { partsUntil } from "@/lib/time"
import { cn } from "@/lib/utils"

function Seg({
  value,
  sr,
  className,
}: {
  value: number
  sr: string
  className?: string
}) {
  const [blink, setBlink] = useState(false)
  const prev = useRef<number>(value)

  // When value changes, briefly highlight the segment
  useEffect(() => {
    if (prev.current !== value) {
      setBlink(true)
      const t = setTimeout(() => setBlink(false), 180)
      prev.current = value
      return () => clearTimeout(t)
    }
  }, [value])

  const text = value.toString().padStart(2, "0")

  return (
    <div
      className={cn(
        "relative rounded-md ring-1 ring-gray-300 bg-gray-900 text-white px-3 py-2 shadow-sm",
        "font-mono tabular-nums leading-none text-2xl sm:text-3xl",
        blink ? "ring-amber-400/60 shadow-[0_0_0_3px_rgba(245,158,11,0.15)]" : "",
        className,
      )}
      aria-label={sr}
    >
      <span className="block transition-opacity duration-150">{text}</span>
    </div>
  )
}

export function Countdown({
  target,
  className,
}: {
  target: Date
  className?: string
}) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const remain = useMemo(() => partsUntil(target, now), [target, now])

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl p-3",
        "ring-1 ring-teal-600/30 bg-teal-600/10",
        className,
      )}
      role="timer"
      aria-live="polite"
    >
      <Seg value={remain.hours} sr="hours remaining" />
      <span aria-hidden className="text-gray-400 font-semibold">
        :
      </span>
      <Seg value={remain.minutes} sr="minutes remaining" />
      <span aria-hidden className="text-gray-400 font-semibold">
        :
      </span>
      <Seg value={remain.seconds} sr="seconds remaining" />
    </div>
  )
}
