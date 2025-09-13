"use client"

import { STATIONS, type StationKey } from "@/data/schedule"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StationSelectProps {
  value: StationKey
  onChange: (value: StationKey) => void
}

export function StationSelect({ value, onChange }: StationSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a station" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(STATIONS).map(([key, station]) => (
          <SelectItem key={key} value={key}>
            {station.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
