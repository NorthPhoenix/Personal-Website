"use client"

import { login } from "~/server/actions"
import { usePathname } from "next/navigation"
import type { ComponentPropsWithRef } from "react"
import { cn } from "~/lib/utils"
import { Button } from "./ui/button"

const SignInButton: React.FC<
  ComponentPropsWithRef<typeof Button> & { redirectURI?: string }
> = ({ children, redirectURI, ...props }) => {
  const localPathname = usePathname()
  const redirectPathmname = redirectURI ?? localPathname
  return (
    <Button
      {...props}
      size={"lg"}
      variant={"outline"}
      onClick={async () => {
        await login(redirectPathmname)
      }}
    >
      {children}
    </Button>
  )
}

export default SignInButton
