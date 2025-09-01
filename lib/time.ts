export function parseTimeAt(dateRef: Date, hhmm: string): Date {
  const [h, m] = hhmm.split(":").map(Number)
  const d = new Date(dateRef)
  d.setHours(h, m, 0, 0)
  return d
}

export function nextNDepartures(times: string[], now = new Date(), n = 2): Date[] {
  if (!times?.length) return []
  // Build candidates for today and next day to handle wrap
  const today = times.map((t) => parseTimeAt(now, t))
  const tmr = new Date(now)
  tmr.setDate(tmr.getDate() + 1)
  const tomorrow = times.map((t) => parseTimeAt(tmr, t))

  return [...today, ...tomorrow].filter((d) => d.getTime() > now.getTime()).slice(0, n)
}

export function formatHM(d: Date): string {
  const h = String(d.getHours()).padStart(2, "0")
  const m = String(d.getMinutes()).padStart(2, "0")
  return `${h}:${m}`
}

export function partsUntil(target: Date, now = new Date()) {
  const ms = Math.max(0, target.getTime() - now.getTime())
  const totalSec = Math.floor(ms / 1000)
  const hours = Math.floor(totalSec / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60
  return { hours, minutes, seconds, ms }
}
