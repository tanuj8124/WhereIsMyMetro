"use client"

import { STATIONS, type StationKey } from "@/data/schedule"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StationSelect({
  value,
  onChange,
}: {
  value: StationKey
  onChange: (v: StationKey) => void
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-700">Choose station</label>
      <Select value={value} onValueChange={(v) => onChange(v as StationKey)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a station" />
        </SelectTrigger>
        <SelectContent>
          {(Object.keys(STATIONS) as StationKey[]).map((k) => (
            <SelectItem key={k} value={k}>
              {STATIONS[k].label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
