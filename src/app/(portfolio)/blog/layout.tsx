import React from "react"
import { type Metadata } from "next"
import Footer from "~/app/_components/blog//Footer"
import Header from "~/app/_components/blog/Header"

export const metadata: Metadata = {
  title: {
    absolute: "Nikita's Blog",
    template: "%s | Nikita's Blog",
  },
  description: "A blog for random cool stuff.",
  openGraph: {
    title: "Nikita's Blog",
    description:
      "A blog for random cool stuff built with Next.js and Outstatic.",
    locale: "en_US",
    type: "website",
  },
  icons: "/icon.svg",
}

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[100dvh] overscroll-none bg-neutral-900 text-nier-200">
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
