import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TallyGO | Simple finances. Clear goals.",
  description:
    "TallyGO is a beautifully simple mobile app that helps you track daily expenses and plan personal goals without clutter, complexity, or unnecessary features.",
  keywords: [
    "expense tracker",
    "goal planner",
    "personal finance",
    "budget app",
    "money management",
    "daily expenses",
    "goal tracking",
    "offline first",
    "Myanmar",
    "MMK",
    "financial planning",
  ],
  authors: [{ name: "TallyGO Team" }],
  creator: "TallyGO",
  publisher: "TallyGO",
  applicationName: "TallyGO",
  generator: "Next.js",
  metadataBase: new URL("https://tallygo.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tallygo.app",
    title: "TallyGO | Simple finances. Clear goals.",
    description:
      "TallyGO is a beautifully simple mobile app that helps you track daily expenses and plan personal goals without clutter, complexity, or unnecessary features.",
    siteName: "TallyGO",
    images: [
      {
        url: "/app-img/logo.png",
        width: 1200,
        height: 630,
        alt: "TallyGO - Simple finances. Clear goals.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TallyGO | Simple finances. Clear goals.",
    description:
      "TallyGO is a beautifully simple mobile app that helps you track daily expenses and plan personal goals without clutter, complexity, or unnecessary features.",
    images: ["/app-img/logo.png"],
    creator: "@tallygo",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#FFFDF8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}