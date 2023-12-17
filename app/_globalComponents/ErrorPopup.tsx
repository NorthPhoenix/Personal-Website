"use client"

import { X, AlertTriangle } from "lucide-react"
import { useAtomValue } from "jotai"
import { screenSizeAtom } from "lib/state"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { twMerge } from "tailwind-merge"

type ErrorPopupProps = {
  className?: string
  header: string
  message: string
  closeAfter: number
  close: () => void
}

const ErrorPopup = ({
  className,
  header,
  message,
  closeAfter,
  close,
}: ErrorPopupProps) => {
  const [time, setTime] = useState(0)
  const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null)
  const screenSize = useAtomValue(screenSizeAtom)

  const handleStartTimer = () => {
    // console.log("Starting timer")
    const intervalID = setInterval(() => {
      setTime((prev) => {
        if (prev <= closeAfter) {
          return prev + 20
        }
        return prev
      })
    }, 20)
    setIntervalID(intervalID)
    return intervalID
  }

  const handlePauseTimer = () => {
    // console.log("Pausing timer")
    if (intervalID) {
      clearInterval(intervalID)
      setIntervalID(null)
    }
  }

  // Start timer on mount
  useEffect(() => {
    // console.log("Mounting timer")
    // console.log("closeAfter", closeAfter)
    const id = handleStartTimer()
    return () => {
      clearInterval(id)
    }
  }, [])

  // Close popup after closeAfter ms
  useEffect(() => {
    if (time >= closeAfter) {
      // console.log("time >= closeAfter")
      handlePauseTimer()
      close()
    }
  }, [time])

  return (
    <motion.div
      {...(screenSize !== "xs"
        ? {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100, transition: { delay: 0.2 } },
            whileTap: { scale: 0.95, transition: { duration: 0.03 } },
            onTap: () => {
              close()
            },
          }
        : {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 50, transition: { delay: 0.2 } },
          })}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={twMerge(
        "relative m-2 flex  flex-row items-center justify-stretch gap-4 overflow-hidden rounded-lg bg-nier-700 px-4 py-2 shadow-lg sm:cursor-pointer",
        className,
      )}
    >
      <div className="aspect-square flex-none text-amber-500">
        <AlertTriangle className="h-8 w-8 fill-none" />
      </div>
      <div className="grow ">
        <h3 className=" text-base font-bold text-amber-500">{header}</h3>
        <p className="text-sm text-nier-300 ">{message}</p>
      </div>
      <button
        className="absolute right-3 top-2 text-nier-300 hover:text-nier-200 focus:outline-none active:text-nier-400 sm:hidden"
        onClick={() => {
          close()
        }}
      >
        <X />
      </button>
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <div
          className="h-full bg-amber-500"
          style={{ width: `${(time / closeAfter) * 100}%` }}
        ></div>
      </div>
    </motion.div>
  )
}

export default ErrorPopup
