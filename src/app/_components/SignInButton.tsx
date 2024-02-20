"use client"

import { login } from "~/server/actions"
import { usePathname } from "next/navigation"
import type { ComponentPropsWithoutRef } from "react"
import { cn } from "~/lib/utils"

const SignInButton: React.FC<ComponentPropsWithoutRef<"button">> = ({
  children,
  className,
  ...props
}) => {
  const redirectURI = usePathname()
  return (
    <button
      {...props}
      className={cn(
        "rounded-md bg-sky-300 px-4 py-2 font-semibold text-black transition-colors duration-300 ease-in-out hover:bg-sky-400",
        className,
      )}
      onClick={async () => {
        await login(redirectURI)
      }}
    >
      {children}
    </button>
  )
}

export default SignInButton
