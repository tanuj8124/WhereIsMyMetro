export function nextNDepartures(times: string[], n = 2): Date[] {
  const now = new Date()
  const currentTime = now.getHours() * 60 + now.getMinutes()

  const departures: Date[] = []

  for (const timeStr of times) {
    const [hours, minutes] = timeStr.split(":").map(Number)
    const departureTime = hours * 60 + minutes

    if (departureTime > currentTime) {
      const departureDate = new Date(now)
      departureDate.setHours(hours, minutes, 0, 0)
      departures.push(departureDate)

      if (departures.length >= n) break
    }
  }

  // If we don't have enough departures for today, add tomorrow's first departures
  if (departures.length < n) {
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)

    for (let i = 0; i < Math.min(times.length, n - departures.length); i++) {
      const [hours, minutes] = times[i].split(":").map(Number)
      const departureDate = new Date(tomorrow)
      departureDate.setHours(hours, minutes, 0, 0)
      departures.push(departureDate)
    }
  }

  return departures
}

export function formatHM(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
}

export function formatHMPM(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}
