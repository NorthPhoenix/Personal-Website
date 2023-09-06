import { getObjectSignedUrl } from "lib/s3"
import { NextResponse, NextRequest } from "next/server"

export const revalidate = 3600

export async function GET(request: NextRequest) {
  try {
    const key = request.nextUrl.searchParams.get("key") as string
    if (!key) {
      throw new Error("No key provided")
    }
    const data = await getObjectSignedUrl(key)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
