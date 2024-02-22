import { validateRequest } from "~/server/auth"
import UserIcon from "./UserIcon"
import SignInButton from "../SignInButton"

const AuthIndicator: React.FC = async () => {
  const { user } = await validateRequest()
  return (
    <>
      {user ?
        <UserIcon user={user} />
      : <SignInButton>Sign In</SignInButton>}
    </>
  )
}

export default AuthIndicator
