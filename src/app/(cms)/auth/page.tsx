import SignInButton from "~/app/_components/SignInButton"
import SignOutButton from "~/app/_components/SignOutButton"
import { validateRequest } from "~/server/auth"

export default async function Page() {
  const { user } = await validateRequest()

  if (user) {
    return (
      <>
        <h2>Hi {user.username}</h2>
        <SignOutButton>Sign out</SignOutButton>
      </>
    )
  }

  return (
    <>
      <h1>Sign in</h1>
      <SignInButton>Sign in with GitHub</SignInButton>
    </>
  )
}
