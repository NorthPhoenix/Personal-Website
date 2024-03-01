"use server"
import { generateState } from "arctic"
import { createGitHubOAuthProvider } from "~/server/auth_providers/github"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { lucia, validateRequest } from "src/server/auth"
import db from "./db"

interface LogoutActionResult {
  error: string | null
}

export async function trackBlogView(slug: string) {
  const updateResult = await db.execute({
    sql: "UPDATE blog SET view_count = view_count + 1 WHERE slug = ?",
    args: [slug],
  })
  if (updateResult.rowsAffected === 0) {
    // Blog post not found
    // Create a new blog post with the slug and view count of 1
    const blogCreationResult = await db.execute({
      sql: "INSERT INTO blog (slug, view_count) VALUES (?, 1)",
      args: [slug],
    })
    if (blogCreationResult.rowsAffected === 0) {
      throw new Error("Failed to create blog post")
    }
  }
  return { success: true }
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
