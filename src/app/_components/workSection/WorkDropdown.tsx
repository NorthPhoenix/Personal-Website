"use client"

import { Disclosure } from "@headlessui/react"
import NierButton from "~/app/_components/NierButton"
import React from "react"

const WorkDropdown = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithRef<"div"> & {
    btnClassName?: string
    btnContainerClassName?: string
  }
>(({ children, btnClassName, btnContainerClassName, ...props }, ref) => {
  return (
    <Disclosure>
      <div className={btnContainerClassName}>
        <Disclosure.Button as={NierButton} className={btnClassName}>
          More
        </Disclosure.Button>
      </div>
      <Disclosure.Panel as="div" ref={ref} {...props}>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  )
})

export default WorkDropdown
