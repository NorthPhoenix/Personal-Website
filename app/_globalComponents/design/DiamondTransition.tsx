"use client"

import { useRef, useState, useLayoutEffect } from "react"

type DiamondTransitionProps = {
  twTransitionFill?: string
  twTransitionStroke?: string
  unitWidth?: number
  padding?: string
  reverse?: boolean
  absolute?: boolean
}

const DiamondTransition: React.FC<DiamondTransitionProps> = ({
  twTransitionFill = "fill-black",
  twTransitionStroke = "stroke-white",
  unitWidth = 200,
  padding = "0px",
  reverse = false,
  absolute = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [numberOfTransitions, setNumberOfTransitions] = useState(0)
  const paddingColor = twTransitionFill.slice(twTransitionFill.indexOf("-") + 1)

  // useLayoutEffect for calculating number of units of transitions to render
  useLayoutEffect(() => {
    const container = containerRef.current
    if (container) {
      const { width } = container.getBoundingClientRect()
      const numberOfTransitions = Math.ceil(width / unitWidth)
      setNumberOfTransitions(numberOfTransitions)
      console.log("Render: ", width, numberOfTransitions)

      // add resize listener to recalculate number of transitions
      const resizeListener = () => {
        const { width } = container.getBoundingClientRect()
        const numberOfTransitions = Math.ceil(width / unitWidth)
        setNumberOfTransitions(numberOfTransitions)
        console.log("Resize: ", width, numberOfTransitions)
      }
      window.addEventListener("resize", resizeListener)

      return () => {
        window.removeEventListener("resize", resizeListener)
      }
    }
  }, [])

  return (
    <>
      <div className='relative -z-10'>
        <div
          className={`flex w-full overflow-hidden ${
            absolute ? "absolute left-0 top-full" : ""
          }
          ${reverse ? "flex-col-reverse" : "flex-col"}`}>
          <div
            className={`bg-${paddingColor} w-full scale-[105%]`}
            style={{ height: padding }}
          />
          <div
            ref={containerRef}
            className='flex w-full flex-row items-start justify-center overflow-hidden'>
            {[...Array(numberOfTransitions)].map((_, index) => {
              return (
                <DiamondTransitionImage
                  key={index}
                  className={`shrink-0 scale-[101%] ${twTransitionFill} ${twTransitionStroke} ${
                    reverse ? "translate-y-px rotate-[180deg]" : ""
                  }`}
                  width={`${unitWidth}px`}
                />
              )
            })}
            d
          </div>
        </div>
      </div>
    </>
  )
}

const DiamondTransitionImage = ({ className = "", width = "200px" }) => {
  return (
    <>
      <svg
        viewBox='1 2 248 772'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
        className={className}
        style={{ width: width }}>
        <g id='diamonds-fill' className='stroke-none'>
          <path d='M103.003,86.1194L61.7686,152.294L82.36,185.728l41.457-66.168-20.814-33.4406Z' />
          <path d='M186.557,350.625l40.567-65.029-40.567-66.221L145.619,285l40.938,65.625Z' />
          <path d='M165,185.728l21.557,33.647l20.99-33.647-20.986-33.641L165,185.728Z' />
          <path d='M165,185.728l-40.593,65.983L145.619,285l40.938-65.625L165,185.728Z' />
          <path d='M103.641,285l20.766-33.289L82.36,185.728L61.4567,219.143L103.641,285Z' />
          <path d='M40.5,185.728L0,251l20.632,34l40.8247-65.857L40.5,185.728Z' />
          <path d='M124.407,318.289L103.641,285L61.6038,351.092L82.36,384.272l42.047-65.983Z' />
          <path d='M165.568,384.272l20.989-33.647L145.619,285l-21.212,33.289l41.161,65.983Z' />
          <path
            d='M82.36,384.272L61.7755,417.489L40.5,384.272l21.1038-33.18L82.36,384.272Zm-20.7562-33.18L20.632,285l40.8247-65.857L103.641,285L61.6038,351.092ZM0,319l40.5,65.272L0,446v-127ZM123.63,451.041L145.5,485l40.834-66.723l40.79,66.796-40.567,65.552L165,584.272l21.561,33.641l20.986-33.641L248.999996,519L227.124,485.073L248.999996,446v-127-68-251L156.589,0L0,0v52.70174L0,119.56L0,251l40.5-65.272l21.2686-33.434L103.003,86.1194L123.817,119.56L82.36,185.728l42.047,65.983L165,185.728l21.561-33.641l20.986,33.641L248.999996,251L227.124,285.596l-40.567,65.029l20.99,33.647-21.213,34.005-20.766-34.005-41.938,66.769Z'
            clipRule='evenodd'
            fillRule='evenodd'
          />
          <path d='M61.7755,417.489L20.632,483.881l40.8247,66.976L103.5,484L61.7755,417.489Z' />
          <path
            d='M248.5,446l-21.376,39.073L248.5,519v-73Z'
            transform='matrix(1.046781 0 0 1-11.125083 0)'
          />
          <path d='M0,319l20.632-34L0,251v68Z' />
          <path d='M20.632,483.881L0,446v73l20.632-35.119Z' />
          <path d='M61.4567,550.857L40.5,584.272l21.2686,33.434L82.36,584.272L61.4567,550.857Z' />
        </g>
        <path
          id='diamonds-stroke'
          className='fill-none'
          d='M208.333 385.272L187.12 419.277M208.333 385.272L187.343 351.625M208.333 385.272L249.286 320L227.91 286.596M208.333 385.272L249.286 447L227.91 486.073M41.286 385.272L1.28601 320L21.418 286M41.286 385.272L1.28601 447L21.418 484.881M41.286 385.272L62.5615 418.489M41.286 385.272L62.3898 352.092M21.418 286L62.3898 352.092M21.418 286L1.28601 252L41.286 186.728M21.418 286L62.2427 220.143M227.91 286.596L187.343 351.625M227.91 286.596L187.343 220.375M227.91 286.596L249.286 252L208.333 186.728M21.418 484.881L62.5615 418.489M21.418 484.881L1.28601 520L41.286 585.272M21.418 484.881L62.2427 551.857M227.91 486.073L187.12 419.277M227.91 486.073L187.343 551.625M227.91 486.073L249.286 520L208.333 585.272M187.12 419.277L166.354 385.272M187.12 419.277L146.286 486M166.354 385.272L124.416 452.041M166.354 385.272L187.343 351.625M166.354 385.272L125.193 319.289M146.286 486L124.416 452.041M146.286 486L125.193 519.289M146.286 486L187.343 551.625M104.286 485L124.416 452.041M104.286 485L62.5615 418.489M104.286 485L125.193 519.289M104.286 485L62.2427 551.857M124.416 452.041L83.146 385.272M83.146 385.272L62.5615 418.489M83.146 385.272L125.193 319.289M83.146 385.272L62.3898 352.092M187.343 351.625L146.405 286M146.405 286L125.193 319.289M146.405 286L125.193 252.711M146.405 286L187.343 220.375M125.193 319.289L104.427 286M104.427 286L62.3898 352.092M104.427 286L125.193 252.711M104.427 286L62.2427 220.143M230.786 153L208.333 186.728M208.333 186.728L187.343 220.375M208.333 186.728L187.347 153.087M41.286 186.728L1.23827 122M41.286 186.728L62.2427 220.143M41.286 186.728L62.5546 153.294M187.347 153.087L139.907 77.1991M187.347 153.087L220.786 99.5M187.347 153.087L165.786 186.728M165.786 186.728L125.193 252.711M165.786 186.728L187.343 220.375M165.786 186.728L124.603 120.56M125.193 252.711L83.146 186.728M83.146 186.728L62.2427 220.143M83.146 186.728L62.5546 153.294M83.146 186.728L124.603 120.56M103.789 87.1194L62.5546 153.294M103.789 87.1194L74.2464 39.8637M103.789 87.1194L157.376 1M103.789 87.1194L124.603 120.56M62.5546 153.294L1.28601 53.5M124.603 120.56L132.786 107.5M230.786 619L208.333 585.272M208.333 585.272L187.343 551.625M208.333 585.272L187.347 618.913M41.286 585.272L1.28601 649.5M41.286 585.272L62.2427 551.857M41.286 585.272L62.5546 618.706M187.347 618.913L139.907 694.801M187.347 618.913L220.786 672.5M187.347 618.913L165.786 585.272M165.786 585.272L125.193 519.289M165.786 585.272L187.343 551.625M165.786 585.272L124.603 651.44M125.193 519.289L83.146 585.272M83.146 585.272L62.2427 551.857M83.146 585.272L62.5546 618.706M83.146 585.272L124.603 651.44M103.789 684.881L62.5546 618.706M103.789 684.881L74.2464 732.136M103.789 684.881L157.286 771M103.789 684.881L124.603 651.44M62.5546 618.706L1 719M124.603 651.44L132.786 664.5'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  )
}

export default DiamondTransition
