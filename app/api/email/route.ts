import { Resend } from "resend"
import { NextResponse, NextRequest } from "next/server"
import { ContactMeData } from "app/home/_localComponents/contactMeSection/ContactMe"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const message = (await request.json()) as ContactMeData
  try {
    const data = await resend.emails.send({
      from: `Personal Website <contactme@nikitaistomin.com>`,
      to: "nikita.istomin54@gmail.com",
      subject: "Portfolio Contact Form",
      html: `<p>Name: ${message.name}</p><p> Email: ${message.email}</p><p>Message: ${message.message}</p>`,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}