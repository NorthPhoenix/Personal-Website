import Link from "next/link"
import React from "react"
import { ArrowLeft } from "lucide-react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="mx-auto my-6 max-w-6xl pl-2">
        <Link
          href="/blog"
          className=" group flex w-fit flex-row items-center gap-2 p-2"
        >
          <ArrowLeft className="h-6 w-6 transition-all group-hover:brightness-125" />
          <div className="relative text-lg tracking-wide group-hover:brightness-125">
            Return to all posts
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-clip">
              <div className="h-full w-full -translate-x-full bg-gradient-to-r from-nier-400 via-nier-400 via-20% to-transparent transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:duration-500"></div>
            </div>
          </div>
        </Link>
      </div>
      {children}
    </>
  )
}

export default Layout