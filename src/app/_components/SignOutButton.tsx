"use client"

import { logout } from "~/server/actions"
import { usePathname } from "next/navigation"
import { forwardRef, type ComponentPropsWithoutRef } from "react"
import { Button } from "./ui/button"
import { useQueryClient } from "@tanstack/react-query"

const SignOutButton = forwardRef<
  typeof Button,
  ComponentPropsWithoutRef<typeof Button>
>(({ children, ...props }, _) => {
  const currentRoute = usePathname()
  const queryClient = useQueryClient()
  return (
    <Button
      {...props}
      onClick={async () => {
        logout()
          .then((res) => {
            if (res.error) {
              throw new Error(res.error)
            }
            return queryClient.invalidateQueries({
              queryKey: ["login"],
              exact: true,
              refetchType: "none",
            })
          })
          .then(() => {
            queryClient.setQueryData(["validateAuth"], {
              user: null,
              session: null,
            })
          })
          .catch((error) => {
            console.error("Error logging out", error)
          })
      }}
    >
      {children}
    </Button>
  )
})

export default SignOutButton
