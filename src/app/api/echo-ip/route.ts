/**
 * This endpoint is used to echo the IP address of the client.
 * It was created to programmatically get the IP address of my home server
 * behind a dynamic IP address.
 */
import { type NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip")
  if (!ip) {
    return new Response("IP address not found", { status: 400 })
  }
  return new Response(ip, { status: 200 })
}
