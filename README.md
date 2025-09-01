# Metro Station Timers

Mobile‑responsive web app that shows live countdowns for the next Ahmedabad Metro trains at a selected station. It uses the device’s current date/time and a local timetable to compute the next two trains in both directions. The timer updates every second.

- Lines supported: Yellow (populated), Blue (placeholder), Purple (placeholder)
- Yellow line stations: Sachivalaya, Infocity, GNLU, Motera Stadium, Old High Court Interchange, APMC
- Design: clean digital countdown (no flip animation), large touch targets, mobile‑first layout

## Features

- Live, second-by-second countdowns for the next two departures in both directions
- Station selector with line filter (Yellow/Blue/Purple)
- Works offline/without APIs (uses local schedule data)
- Day wrapping (if the last train is past, it rolls to the first train of the next day)
- Accessible: semantic markup, readable contrast

## How it works

- The app reads timetable arrays from `data/schedule.ts`
- It parses each station’s list of HH:mm times (24h) per direction
- Using the user’s current local time, it finds the next two upcoming times and computes the difference
- Countdowns are rendered by a simple digital `Countdown` component (no flip animations)

## Editing the timetable

1. Open `data/schedule.ts`
2. Find the Yellow line block and paste times for each station. Keep Blue and Purple empty for now if you don’t have their data.
3. Use 24-hour format strings: `"06:49"`, `"07:03"`, etc.
4. Save, then open/refresh the preview to see the updated countdowns.

Example shape you can follow (simplified):

\`\`\`ts
export const LINES = ["Yellow", "Blue", "Purple"] as const;

export type Line = (typeof LINES)[number];
export type Direction = "up" | "down"; // e.g., APMC → Sachivalaya is one dir; reverse is the other

export type StationId =
  | "sachivalaya"
  | "infocity"
  | "gnlu"
  | "motera"
  | "ohci"   // Old High Court Interchange
  | "apmc";

export const STATIONS_BY_LINE: Record<Line, { id: StationId; name: string }[]> = {
  Yellow: [
    { id: "sachivalaya", name: "Sachivalaya" },
    { id: "infocity", name: "Infocity" },
    { id: "gnlu", name: "GNLU" },
    { id: "motera", name: "Motera Stadium" },
    { id: "ohci", name: "Old High Court Interchange" },
    { id: "apmc", name: "APMC" },
  ],
  Blue: [],
  Purple: [],
};

// For each station, provide times per direction as HH:mm strings
export const STATION_SCHEDULE: Record<StationId, Record<Direction, string[]>> = {
  apmc: {
    up:   ["06:49","07:27","09:05","15:00","16:13","17:19"],   // toward Sachivalaya/GIFT (example)
    down: ["08:51","09:33","11:10","16:04","17:17","18:25"],   // toward APMC (example reverse at other stations)
  },
  // ... fill other stations similarly
};
\`\`\`

Tip: If two tables exist (one per direction), put the column that corresponds to the selected station into the appropriate array. Maintain chronological order.

If you need the original reference image, it’s bundled at:
- public/images/timetable.png (source: https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z1PLQvBeOA518z9dOQ0IfeXRZo37lG.png)

## Adding more lines (Blue, Purple)

- Add stations to `STATIONS_BY_LINE.Blue` or `STATIONS_BY_LINE.Purple`
- Create corresponding entries in `STATION_SCHEDULE` with `up` and `down` arrays
- The UI will automatically show those lines and stations

## Where things live

- app/page.tsx — main page wiring, station/line selection, showing two countdowns per direction
- components/countdown.tsx — simple, accessible digital countdown
- data/schedule.ts — lines, stations, and timetable data
- lib/time.ts — small helpers to parse HH:mm and compute next departures

## Assumptions and notes

- Times are assumed to be local to the user. If you require a specific timezone, we can add a fixed TZ offset.
- If the current time surpasses the last scheduled departure, the app wraps to the first time on the next day.
- For aesthetic, we use a minimal color palette: teal (primary), white and gray (neutrals), amber accent.

## Deploying from v0

- Use the “Publish” button in the top right of the v0 preview to deploy to Vercel.
- Or push to GitHub using the GitHub button, then deploy from your repository.
- No environment variables are required.

## Troubleshooting

- “No trains found”: ensure times are in HH:mm 24‑hour format and sorted ascending.
- Wrong station order: confirm the station IDs in `STATIONS_BY_LINE.Yellow` match the IDs used in `STATION_SCHEDULE`.
- Flip clock issues: This app uses a simple digital timer; no flip animation is included.

## License

MIT
