"use server"
import { generateState } from "arctic"
import { createGitHubOAuthProvider } from "~/server/auth_providers/github"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { lucia, validateRequest } from "src/server/auth"

interface LogoutActionResult {
  error: string | null
}

export async function login(redirect_uri?: string) {
  // console.log("redirect_uri", redirect_uri)
  const github = createGitHubOAuthProvider(redirect_uri)
  const state = generateState()
  const url = await github.createAuthorizationURL(state)

  cookies().set("github_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  })

  return redirect(url.toString())
}

export async function logout(
  currentRoute: string,
): Promise<LogoutActionResult> {
  const { session } = await validateRequest()
  if (!session) {
    return {
      error: "Unauthorized",
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  )
  revalidatePath(currentRoute)
  return {
    error: null,
  }
}
