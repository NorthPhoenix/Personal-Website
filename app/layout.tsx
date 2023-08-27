import "styles/globals.css"
import JotaiProvider from "app/_globalComponents/JotaiProvider"
import GlobalStateProvider from "app/_globalComponents/GlobalStateProvider"

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

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

// import Devicon CSS
import "devicon/devicon.min.css"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nikta Istomin | Portfolio",
  description: "Nikta Istomin's portfolio website",
  generator: "Next.js",
  applicationName: "Nikita Istomin Portfolio Website",
  keywords: [
    "Nikita Istomin",
    "Frontend Developer",
    "Web Developer",
    "Fullstack Developer",
    "MongoDB",
    "Prisma",
    "AWS",
    "Vercel",
    "Node.js",
    "S3",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "tsParticles",
    "Font Awesome",
    "Framer Motion",
    "Three.js",
    "Three Fiber",
    "Portfolio",
    "Personal Website",
  ],
  creator: "Nikita Istomin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${exodus_regular.variable} ${exodus_sharpen.variable} ${exodus_stencil.variable} ${exodus_striped.variable}`}>
      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }>
        <JotaiProvider>
          <GlobalStateProvider>{children}</GlobalStateProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
