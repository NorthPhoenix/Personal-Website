"use client"
import { RotateCwIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "~/app/_components/ui/button"
import { cn } from "~/lib/utils"
import { revalidateEC2InstanceStatus } from "~/server/actions"

const RefetchStatusButton = () => {
  const [loading, setLoading] = useState(false)
  return (
    <Button
      size={"lg"}
      disabled={loading}
      onClick={() => {
        setLoading(true)
        revalidateEC2InstanceStatus()
          .catch((e) => {
            console.error("Revalidation failed: ", e)
          })
          .finally(() => {
            setLoading(false)
          })
      }}
    >
      <RotateCwIcon className={cn("h-10 w-10", loading && "animate-spin")} />
    </Button>
  )
}

export default RefetchStatusButton
