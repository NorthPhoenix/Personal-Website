import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nikta Istomin | Resume",
  description: "Take a look at my resume",
}

const resume = () => {
  return (
    <iframe
      className="h-screen w-screen "
      src="/documents/Istomin_Nikita_Resume.pdf"
    />
  )
}

export default resume
