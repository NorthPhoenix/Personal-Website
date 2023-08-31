type LerpCounterProps = {
  from: number
  to: number
  by: number
}

const Lerp = ({ from, to, by }: LerpCounterProps) => {
  return <span>{Math.floor(to * by + from * (1 - by))}</span>
}

export default Lerp
