import Link from "next/link"
import React from "react"

const Test = () => {
  return (
    <ul className="mx-auto my-4 flex max-w-7xl flex-col gap-6 text-center">
      <li>
        <Link href="/tests/test" prefetch={false}>
          <button className="rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150">
            <span className="text-5xl">Test</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="/tests/wave-animation" prefetch={false}>
          <button className="rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150">
            <span className="text-5xl">Standalone Loading Animation</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="/tests/nier-border" prefetch={false}>
          <button className="rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150">
            <span className="text-5xl">Nier Border</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="/tests/loading-screen" prefetch={false}>
          <button className="rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150">
            <span className="text-5xl">Loading Screen</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="/tests/resume" prefetch={false}>
          <button className="rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150">
            <span className="text-5xl">Resume</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="/tests/diamond-transition" prefetch={false}>
          <button className="rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150">
            <span className="text-5xl">Diamond Transition</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="/tests/projects" prefetch={false}>
          <button className="rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150">
            <span className="text-5xl">Projects</span>
          </button>
        </Link>
      </li>
    </ul>
  )
}

export default Test
