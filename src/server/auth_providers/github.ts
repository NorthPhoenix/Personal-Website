import { GitHub } from "arctic"
import { env } from "~/env.mjs"

export function createGitHubOAuthProvider(redirect_uri?: string) {
  const redirectURL =
    process.env.NODE_ENV === "production" ?
      !!process.env.VERCEL_URL ?
        "https://" + process.env.VERCEL_URL
      : "http://localhost:3000"
    : "http://localhost:3000" + "/api/login_callback/github" + redirect_uri
  console.log("redirectURL", redirectURL)
  return new GitHub(env.AUTH_GITHUB_CLIENT_ID, env.AUTH_GITHUB_CLIENT_SECRET, {
    redirectURI: redirectURL,
  })
}
export const github = new GitHub(
  env.AUTH_GITHUB_CLIENT_ID,
  env.AUTH_GITHUB_CLIENT_SECRET,
)