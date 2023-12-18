import "styles/globals.css"
import JotaiProvider from "app/_globalComponents/JotaiProvider"
import GlobalStateProvider from "app/_globalComponents/GlobalStateProvider"
import { twMerge } from "tailwind-merge"
import { Analytics } from "@vercel/analytics/react"

// load fonts
import localFont from "next/font/local"

const exodus_regular = localFont({
  src: "../public/fonts/ExodusDemo-Regular.otf",
  display: "swap",
  variable: "--font-exodus-regular",
})
const exodus_sharpen = localFont({
  src: "../public/fonts/ExodusDemo-Sharpen.otf",
  display: "swap",
  variable: "--font-exodus-sharpen",
})
const exodus_stencil = localFont({
  src: "../public/fonts/ExodusDemo-Stencil.otf",
  display: "swap",
  variable: "--font-exodus-stencil",
})
const exodus_striped = localFont({
  src: "../public/fonts/ExodusDemo-Striped.otf",
  display: "swap",
  variable: "--font-exodus-striped",
})

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nikta Istomin | Portfolio",
  description: "Come see what I do!",
  generator: "Next.js",
  authors: { name: "Nikita Istomin" },
  applicationName: "Nikita Istomin Portfolio Website",
  creator: "Nikita Istomin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${exodus_regular.variable} ${exodus_sharpen.variable} ${exodus_stencil.variable} ${exodus_striped.variable}`}
    >
      <body
        className={twMerge(
          "selection:bg-orange-700 selection:text-nier-200",
          process.env.NODE_ENV === "development" ? "debug-screens" : "",
        )}
      >
        <JotaiProvider>
          <GlobalStateProvider>{children}</GlobalStateProvider>
        </JotaiProvider>
        <Analytics />
      </body>
    </html>
  )
}
