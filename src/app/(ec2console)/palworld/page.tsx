import React from "react"
import RSCSignInButton from "~/app/_components/RSCSignInButton"
import { validateRequest } from "~/server/auth"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/app/_components/ui/card"
import {
  getEC2InstanceStatus,
  logout,
  startEC2Instance,
  stopEC2Instance,
} from "~/server/actions"
import { Button } from "~/app/_components/ui/button"
import { env } from "~/env.mjs"
import EC2InstanceStatusDisplay from "../_components/EC2InstanceStatusDisplay"
import RefetchStatusButton from "../_components/RefetchStatusButton"

const Page = async () => {
  const auth = await validateRequest()

  if (!auth.user) {
    return (
      <div className="flex h-[100dvh] items-center justify-center overscroll-none bg-neutral-950 p-4 [--card-blur-color:_theme(colors.neutral.200)] [--card-blur-spread:_4rem]">
        <Card className="has-[button:hover]:[--card-blur-spread:_8rem] has-[.loading]:[--card-blur-color:_theme(colors.cyan.200)] has-[.loading]:![--card-blur-spread:_10rem] shadow-none transition-shadow duration-700 [box-shadow:_0_0_var(--card-blur-spread)_-1rem_var(--card-blur-color)]">
          <CardHeader>
            <CardTitle className=" text-center text-neutral-300">
              Sign in with GitHub to view this page
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <RSCSignInButton className="h-fit px-8 text-lg" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!auth.user.ec2_authorized) {
    return (
      <div className="flex h-[100dvh] flex-col items-center justify-center gap-10 overscroll-none bg-neutral-950 px-8 py-4 text-neutral-300">
        <h3 className="text-center text-4xl">
          You are not authorized to view this page
        </h3>
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-lg">
            Please contact an administrator to request access
          </p>
          <form action={logout}>
            <Button variant={"outline"} className="px-8" type="submit">
              Logout
            </Button>
          </form>
        </div>
      </div>
    )
  }

  const instanceStatusResponse = await getEC2InstanceStatus(
    env.AWS_EC2_INSTANCE_ID,
  )
  const instanceStatus = instanceStatusResponse.InstanceStatuses?.[0]
  if (instanceStatus?.InstanceId === undefined) {
    return <div>Instance status not available</div>
  }

  const isStartButtonDisabled = () => {
    const instanceState = instanceStatus.InstanceState?.Name
    if (!instanceState) {
      return true
    }
    return !(instanceState === "stopped" || instanceState === "terminated")
  }
  const isStopButtonDisabled = () => {
    const instanceState = instanceStatus.InstanceState?.Name
    if (!instanceState) {
      return true
    }
    return !(instanceState === "running")
  }

  return (
    <>
      <Header />
      <main className="px-8 py-4">
        <RefetchStatusButton />
        <EC2InstanceStatusDisplay status={instanceStatus} />
        <div className="mt-6 flex flex-row items-center gap-4">
          <form action={startEC2Instance}>
            <Button disabled={isStartButtonDisabled()}>Start Instance</Button>
          </form>
          <form action={stopEC2Instance}>
            <Button disabled={isStopButtonDisabled()}>Stop Instance</Button>
          </form>
        </div>
      </main>
    </>
  )
}

const Header = () => {
  return (
    <header className="min-h-12 flex w-full flex-row items-center justify-between gap-4 border-b border-neutral-700 bg-neutral-800 px-8 py-4 text-neutral-200">
      <h1>EC2 Console</h1>
      <div>
        <form action={logout}>
          <Button
            className="border border-neutral-700 bg-transparent text-neutral-200 hover:bg-neutral-600/50 hover:text-neutral-50"
            type="submit"
          >
            Logout
          </Button>
        </form>
      </div>
    </header>
  )
}

export default Page
