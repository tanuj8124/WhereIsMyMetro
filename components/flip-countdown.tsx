"use client"

import { useEffect, useMemo, useState } from "react"
import { partsUntil } from "@/lib/time"
import { cn } from "@/lib/utils"

function Tile({ value }: { value: string }) {
  // Two halves for a simple flip feel
  return (
    <div className="relative w-14 h-18 sm:w-16 sm:h-20 rounded-md overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] bg-gray-900 text-white">
      <div className="absolute inset-0 grid grid-rows-2">
        <div className="flex items-end justify-center text-3xl font-semibold bg-gray-800 leading-none border-b border-black/40">
          {value}
        </div>
        <div className="flex items-start justify-center text-3xl font-semibold bg-gray-900 leading-none">{value}</div>
      </div>
    </div>
  )
}

function Segment({ num, label, showColon = true }: { num: number; label: string; showColon?: boolean }) {
  const s = num.toString().padStart(2, "0")
  return (
    <div className="flex items-center gap-1">
      <Tile value={s[0]} />
      <Tile value={s[1]} />
      {showColon && (
        <span aria-hidden className="mx-2 text-2xl font-bold text-gray-400">
          :
        </span>
      )}
      <span className="sr-only">{label}</span>
    </div>
  )
}

export function FlipCountdown({ target, className }: { target: Date; className?: string }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const remain = useMemo(() => partsUntil(target, now), [target, now])

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl p-3 ring-1 ring-teal-600/30 bg-teal-600/10",
        className,
      )}
    >
      <Segment num={remain.hours} label="hours" />
      <Segment num={remain.minutes} label="minutes" />
      <Segment num={remain.seconds} label="seconds" showColon={false} />
    </div>
  )
}
