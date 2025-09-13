"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Train, ArrowLeft, Clock } from "lucide-react"
import { STATIONS, type StationKey } from "@/data/schedule"
import { nextNDepartures, formatHMPM } from "@/lib/time"
import { MetroTracker } from "@/components/metro-tracker"
import { Countdown } from "@/components/countdown"
import { StationSelect } from "@/components/station-select"

export default function AhmedabadMetroPage() {
  const [station, setStation] = useState<StationKey>("sachivalaya")

  const times = STATIONS[station]
  const nextToAPMC = useMemo(() => nextNDepartures(times.directions["to-apmc"]), [times])
  const nextToGift = useMemo(() => nextNDepartures(times.directions["to-sachivalaya-gift"]), [times])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Train className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Where Is My Metro?</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700 border border-emerald-600/20 dark:bg-emerald-900 dark:text-emerald-100">
              Live Timer
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>
 

      {/* Main Content */}
      <main className="container px-4 py-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Station Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Select Station</span>
              </CardTitle>
              <CardDescription>Live countdowns for both directions</CardDescription>
            </CardHeader>
            <CardContent>
              <StationSelect value={station} onChange={setStation} />
            </CardContent>
          </Card>

          {/* Live Timers */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-emerald-600/30">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Towards APMC</span>
                  {nextToAPMC[0] ? (
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                      Next Metro at <span className="whitespace-nowrap">{formatHMPM(nextToAPMC[0])}</span>
                    </span>
                  ) : (
                    <span className="text-sm text-red-600">No times</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {nextToAPMC[0] && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Countdown:</span>
                      <Countdown target={nextToAPMC[0]} />
                    </div>
                  </div>
                )}
                {nextToAPMC[1] && (
                  <div className="mt-3 text-sm text-muted-foreground">
                    Following: <span className="font-medium">{formatHMPM(nextToAPMC[1])}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-emerald-600/30">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Towards Sachivalaya/GIFT</span>
                  {nextToGift[0] ? (
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                      Next Metro at <span className="whitespace-nowrap">{formatHMPM(nextToGift[0])}</span>
                    </span>
                  ) : (
                    <span className="text-sm text-red-600">No times</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {nextToGift[0] && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Countdown:</span>
                      <Countdown target={nextToGift[0]} />
                    </div>
                  </div>
                )}
                {nextToGift[1] && (
                  <div className="mt-3 text-sm text-muted-foreground">
                    Following: <span className="font-medium">{formatHMPM(nextToGift[1])}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Reference Timetable */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Reference Timetable</CardTitle>
              <CardDescription>Ahmedabad Metro Schedule Reference</CardDescription>
            </CardHeader>
                 <MetroTracker/>
            <CardContent className="flex justify-center">
              <div className="w-full max-w-2xl bg-muted rounded-lg p-8 text-center">
                <Train className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Timetable reference image would be displayed here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Upload your metro timetable image to display it here
                </p>
              </div>
            </CardContent>
          </Card>

          <footer className="py-6 text-center text-xs text-muted-foreground">
            Created By Tanuj Kashyap on idea of Bhavya Negi
          </footer>
        </div>
      </main>
    </div>
  )
}
