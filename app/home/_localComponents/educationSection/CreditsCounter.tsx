"use client"
import { useRef, useEffect } from "react"
import { animate } from "framer-motion"

type CreditsCounterProps = {
  credits: number
}

const CreditsCounter = ({ credits }: CreditsCounterProps) => {
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
  return (
    <div className='flex flex-row items-center justify-stretch py-2 pl-4 pr-2'>
      <div className=' relative m-2 h-1 grow rounded-full bg-utd-100 bg-opacity-30'>
        <div
          className='absolute left-0 top-0 h-full rounded-full bg-utd-100'
          ref={barRef}
        />
      </div>
      <div className='mr-2 box-content flex w-20 grow-0 flex-row items-center justify-end gap-2 p-2 text-base '>
        <span ref={creditsRef}>0</span>
        <span>credits</span>
      </div>
    </div>
  )
}

export default CreditsCounter
