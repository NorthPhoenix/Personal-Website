"use server"
import { generateState } from "arctic"
import { createGitHubOAuthProvider } from "~/server/auth_providers/github"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { lucia, validateRequest } from "src/server/auth"
import { revalidatePath } from "next/cache"

interface LogoutActionResult {
  error: string | null
}

export async function login(redirect_uri?: string) {
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

export async function logout(): Promise<LogoutActionResult> {
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
  return {
    error: null,
  }
}

export async function validateAuth() {
  return await validateRequest()
}
export async function revalidateEC2InstanceStatus() {
  revalidatePath("/palworld")
}
