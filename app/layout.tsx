import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "WhereIsMyMetro - Track Ahmedabad Metro in Real-Time",
  description:
    "Stay updated with live Ahmedabad metro information. Track your metro in real-time with accurate arrival times, route planning, and station updates.",
  keywords: [
    "Ahmedabad Metro",
    "Metro Tracking",
    "Real-time Metro",
    "Public Transport",
    "Gujarat Metro",
    "Metro Schedule",
    "Train Timing",
    "Metro App",
  ],
  authors: [{ name: "Tanuj kashyap" }],
  creator: "WhereIsMyMetro",
  publisher: "Tanuj kashyap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://whereismymetro.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WhereIsMyMetro - Track Ahmedabad Metro in Real-Time",
    description:
      "Stay updated with live Ahmedabad metro information. Track your metro in real-time with accurate arrival times and route planning.",
    url: "https://whereismymetro.com",
    siteName: "WhereIsMyMetro",
    images: [
      {
        url: "/fvu.png",
        width: 1200,
        height: 630,
        alt: "WhereIsMyMetro - Real-time Ahmedabad Metro Tracking",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhereIsMyMetro - Track Ahmedabad Metro in Real-Time",
    description:
      "Stay updated with live Ahmedabad metro information. Track your metro in real-time with accurate arrival times and route planning.",
    images: ["/twitter-image.jpg"],
    creator: "@whereismymetro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/fvu.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
    other: [
      { url: "/fvu.png", sizes: "192x192", type: "image/png" },
      { url: "/fvu.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "WhereIsMyMetro",
              description: "Track Ahmedabad Metro in Real-Time with accurate arrival times and route planning",
              url: "https://whereismymetro.vercel.app",
              applicationCategory: "TransportationApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "WhereIsMyMetro Team",
              },
              publisher: {
                "@type": "Organization",
                name: "WhereIsMyMetro",
              },
              serviceArea: {
                "@type": "City",
                name: "Ahmedabad",
                addressCountry: "IN",
              },
              featureList: [
                "Real-time metro tracking",
                "Route planning",
                "Smart notifications",
                "Station locator",
                "Offline support",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
