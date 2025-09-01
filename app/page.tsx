"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { STATIONS, type StationKey } from "@/data/schedule"
import { nextNDepartures, formatHM, formatHMPM } from "@/lib/time"
import { Countdown } from "@/components/countdown"
import { StationSelect } from "@/components/station-select"
import Adsense from "@/components/Adsense"

export default function Page() {
  const [station, setStation] = useState<StationKey>("sachivalaya")

  const times = STATIONS[station]
  const nextToAPMC = useMemo(() => nextNDepartures(times.directions["to-apmc"]), [times])
  const nextToGift = useMemo(() => nextNDepartures(times.directions["to-sachivalaya-gift"]), [times])

  return (
    <main className="min-h-dvh bg-white text-gray-900">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-xl px-4 py-3 flex items-center justify-between">
          
          <h1 className="text-balance text-xl font-semibold">{"Where Is My Metro?"}</h1>
          <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700 border border-teal-600/20">
            Live Timer
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-xl px-4 py-5 flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Station</CardTitle>
            <CardDescription>Live countdowns for both directions</CardDescription>
          </CardHeader>
          <CardContent>
            <StationSelect value={station} onChange={setStation} />
            
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-teal-600/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Towards APMC</span>
                {nextToAPMC[0] ? (
                  <span className="text-sm font-medium text-teal-700">Next Metro at <span className="whitespace-nowrap">{formatHMPM(nextToAPMC[0])}</span></span>
                ) : (
                  <span className="text-sm text-red-600">No times</span>
                )}
              </CardTitle>
              
            </CardHeader>
            <CardContent>
              {nextToAPMC[0] && <div>
                <span>Countdown:</span>
                <Countdown target={nextToAPMC[0]} />
                </div>}
              {nextToAPMC[1] && (
                <div className="mt-3 text-sm text-gray-600">
                  Following: <span className="font-medium">{formatHMPM(nextToAPMC[1])}</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-teal-600/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Towards Sachivalaya/GIFT</span>
                {nextToGift[0] ? (
                  <span className="text-sm font-medium text-teal-700">Next Metro at <span className="whitespace-nowrap">{formatHMPM(nextToGift[0])}</span></span>
                ) : (
                  <span className="text-sm text-red-600">No times</span>
                )}
              </CardTitle>
              
            </CardHeader>
            <CardContent>
              {nextToGift[0] && <div>
                <span>Countdown:</span>
                <Countdown target={nextToGift[0]} />
                </div>}
                
              {nextToGift[1] && (
                <div className="mt-3 text-sm text-gray-600">
                  Following: <span className="font-medium">{formatHMPM(nextToGift[1])}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <Adsense slot="1" />

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Reference Timetable</CardTitle>
            <CardDescription>Provided image for transcription</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              src="/images/timetable.png"
              alt="Ahmedabad Metro timetable (APMC ⇄ Sachivalaya/GIFT City)"
              width={1100}
              height={700}
              className="w-full h-auto rounded-lg border"
              priority
            />
          </CardContent>
        </Card>

        <footer className="py-6 text-center text-xs text-gray-500">
          Created By Tanuj Kashyap on idea of Bhavya Negi
        </footer>
      </section>
    </main>
  )
}
