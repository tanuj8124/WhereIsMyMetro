import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Where Is My Metro',
  description: 'Track metro timings with ease, simple timer for upcoming metro. Currently available for ahemdabad metro .. expanding soon',
  generator: 'Tanuj kashyap & Bhavya Negi',
  
  openGraph: {
    title: "Where Is My Metro? | Metro tracker",
    description: "Track metro timings with ease, simple timer for upcoming metro. Currently available for ahemdabad metro .. expanding soon",
    url: "https://whereismymetro.com",
    siteName: "Where is my metro",
    images: [
      {
        url: "/fvu.png",
        width: 1200,
        height: 630,
        alt: "WhereIsMyMetro",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  keywords: ["where is my metro",'metro', 'Ahemdabad Metro', 'metro timing', 'whereismymetro', 'wher is my metro', 'metro-timming', 'metro-ahemdabad', 'track-metro', 'metrotimingahemdabad', 'metro-timming', 'track-metro', "ahmedabad metro",
    "ahmedabad metro map",
    "ahmedabad metro route",
    "ahmedabad metro timings",
    "ahmedabad metro stations",
    "ahmedabad metro fare",
    "ahmedabad metro live tracking",
    "ahmedabad metro train status",
    "ahmedabad metro app",
    "ahmedabad metro tracker",
    "ahmedabad metro route finder",
    "ahmedabad metro nearest station",
    "ahmedabad metro blue line",
    "ahmedabad metro red line",
    "ahmedabad metro timetable",
    "ahmedabad metro schedule",
    "ahmedabad metro tickets online",
    "ahmedabad metro smart card",
    "ahmedabad metro news",
    "ahmedabad metro updates",
    "ahmedabad metro extension",
    "ahmedabad metro purple line",
    "ahmedabad metro green line",
    "ahmedabad metro phase 2"],
  icons: {
    icon: [
      { url: "/fvu.png", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3402648015244749"
     crossorigin="anonymous"></script>

      </body>
    </html>
  )
}
