import Link from "next/link"
import { type HTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import { FileText } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

const HeroOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <TooltipProvider delayDuration={0}>
        <div
          ref={ref}
          className={twMerge(
            "z-[100] flex flex-col items-center gap-6 px-3 py-4 text-nier-400",
            className,
          )}
          {...props}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                prefetch={false}
                target="_blank"
                href="/resume"
                className="transition-transform duration-100 ease-in-out hover:-rotate-12 hover:scale-110"
              >
                <FileText className="h-6 w-6 fill-none" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-nier-400">
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                prefetch={false}
                target="_blank"
                href="https://github.com/NorthPhoenix"
                className="transition-transform duration-100 ease-in-out hover:rotate-12 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z"
                    />
                    <path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
                    <path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
                    <path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
                    <path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
                    <path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
                    <path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
                    <path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
                  </g>
                </svg>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-nier-400">
              <p>The Hub</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                prefetch={false}
                target="_blank"
                href="https://www.linkedin.com/in/nikita-y-istomin/"
                className="transition-transform duration-100 ease-in-out hover:-rotate-12 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M 20.449 22.231 L 16.894 22.231 L 16.894 16.662 C 16.894 15.335 16.87 13.624 15.044 13.624 C 13.193 13.624 12.908 15.072 12.908 16.567 L 12.908 22.231 L 9.354 22.231 L 9.354 10.779 L 12.767 10.779 L 12.767 12.343 L 12.814 12.343 C 13.511 11.152 14.805 10.443 16.182 10.494 C 19.786 10.494 20.45 12.865 20.45 15.947 L 20.449 22.231 Z M 5.338 9.214 C 4.2 9.214 3.278 8.289 3.278 7.15 C 3.278 6.009 4.2 5.086 5.338 5.086 C 6.48 5.086 7.402 6.009 7.402 7.15 C 7.402 8.289 6.48 9.214 5.338 9.214 M 7.119 22.231 L 3.557 22.231 L 3.557 10.779 L 7.119 10.779 L 7.119 22.231 Z M 22.223 1.783 L 1.771 1.783 C 0.806 1.774 0.01 2.548 0 3.513 L 0 24.05 C 0.01 25.016 0.806 25.79 1.771 25.781 L 22.223 25.781 C 23.19 25.791 23.986 25.017 24 24.05 L 24 3.512 C 23.985 2.544 23.189 1.768 22.223 1.782" />
                </svg>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-nier-400">
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    )
  },
)

export default HeroOverlay
