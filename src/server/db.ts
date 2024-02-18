import { createClient } from "@libsql/client"

export default createClient({
  url:
    process.env.NODE_ENV == "production" ?
      process.env.DB_URL ?? "http://localhost:8080"
    : "file:db.sqlite",
  authToken:
    process.env.NODE_ENV == "production" ?
      process.env.DB_AUTH_TOKEN ?? undefined
    : undefined,
})
