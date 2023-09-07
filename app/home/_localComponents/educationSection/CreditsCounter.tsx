"use client"
import { useRef, useEffect } from "react"
import { animate } from "framer-motion"

type CreditsCounterProps = {
  credits: number
  counterSide?: "left" | "right"
}

const CreditsCounter = ({
  credits,
  counterSide = "right",
}: CreditsCounterProps) => {
  const progress = 0
  const barRef = useRef<HTMLDivElement>(null)
  const creditsRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    animate(progress, 1, {
      delay: 2,
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (barRef.current) {
          barRef.current.style.width = latest * 100 + "%"
        }
        if (creditsRef.current) {
          creditsRef.current.innerText = String(Math.floor(latest * credits))
        }
      },
    })
  }, [])
  return counterSide === "right" ? (
    <div className='flex flex-row items-center justify-stretch px-2 py-2 md:px-4'>
      <div className=' relative m-2 h-1 grow rounded-full bg-utd-100 bg-opacity-30'>
        <div
          className='absolute left-0 top-0 h-full rounded-full bg-utd-100'
          ref={barRef}
        />
      </div>
      <div className='w-18 box-content flex grow-0 flex-row items-center justify-end gap-2 p-2 text-sm md:w-20 md:text-base '>
        <span ref={creditsRef}>0</span>
        <span>credits</span>
      </div>
    </div>
  ) : (
    <div className='flex flex-row items-center justify-stretch px-2 py-2 md:px-4'>
      <div className='w-18 box-content flex grow-0 flex-row items-center justify-end gap-2 p-2 text-sm md:w-20 md:text-base '>
        <span ref={creditsRef}>0</span>
        <span>credits</span>
      </div>
      <div className=' relative m-2 h-1 grow rounded-full bg-utd-100 bg-opacity-30'>
        <div
          className='absolute left-0 top-0 h-full rounded-full bg-utd-100'
          ref={barRef}
        />
      </div>
    </div>
  )
}

export default CreditsCounter
