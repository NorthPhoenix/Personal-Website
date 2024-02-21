"use client"

import { logout } from "~/server/actions"
import { usePathname } from "next/navigation"
import type { ComponentPropsWithRef } from "react"
import { Button } from "./ui/button"

const SignOutButton: React.FC<ComponentPropsWithRef<typeof Button>> = ({
  children,
  ...props
}) => {
  const currentRoute = usePathname()
  return (
    <Button
      {...props}
      onClick={async () => {
        await logout(currentRoute)
      }}
    >
      {children}
    </Button>
  )
}

export default SignOutButton
