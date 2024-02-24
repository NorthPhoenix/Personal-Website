"use client"

import UserIcon from "./UserIcon"
import { useAuth } from "~/lib/hooks/useAuth"
import { Skeleton } from "../ui/skeleton"
import { Button } from "../ui/button"

const AuthIndicator = () => {
  const { data, isLoading, isError, error, login, isRedirecting } = useAuth()
  if (isLoading || isRedirecting) {
    return <Skeleton className="h-10 w-10 rounded-full" />
  }
  if (isError) {
    console.error("Error loading auth", error)
    return <span className="text-lg text-red-600">Error</span>
  }
  if (!data) {
    error
  }
  return (
    <>
      {!!data ?
        <UserIcon user={data.user} />
      : <Button
          size={"lg"}
          variant={"outline"}
          onClick={() => {
            void login()
          }}
        >
          Sign In
        </Button>
      }
    </>
  )
}

export default AuthIndicator
