import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Where Is My Metro',
  description: 'Track metro timings with ease, simple timer for upcoming metro. Currently available for ahemdabad metro .. expanding soon',
  generator: 'Tanuj kashyap & Bhavya Negi',
  keywords: ['metro', 'Ahemdabad Metro', 'metro timing', 'whereismymetro','wher is my metro', 'metro-timming','metro-ahemdabad','track-metro','metrotimingahemdabad','metro-timming','track-metro'],
  icons: {
    icon: [
      { url: "/fav-icon.png", sizes: "any" },
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
      </body>
    </html>
  )
}
