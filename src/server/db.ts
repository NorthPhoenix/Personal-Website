import { createClient } from "@libsql/client"
import { env } from "~/env.mjs"

export default createClient({
  url:
    process.env.NODE_ENV == "production" ?
      env.DB_URL ?? "http://localhost:8080"
    : "file:db.sqlite",
  authToken:
    process.env.NODE_ENV == "production" ?
      env.DB_AUTH_TOKEN ?? undefined
    : undefined,
})
