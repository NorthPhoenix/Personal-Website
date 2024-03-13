import "~/styles/globals.css"
import "~/styles/ec2console.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { type Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production" ?
      "https://www.nikitaistomin.com"
    : "http://localhost:3000",
  ),
  title: "EC2 Console",
  description: "",
  generator: "Next.js",
  authors: { name: "Nikita Istomin" },
  applicationName: "Nikita Istomin EC2 Console",
  creator: "Nikita Istomin",
  openGraph: {
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
