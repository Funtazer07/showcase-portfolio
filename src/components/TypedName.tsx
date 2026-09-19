import { useEffect, useState } from 'react'

const TYPE_SPEED_MS = 70

interface TypedNameProps {
  text: string
}

function TypedName({ text }: TypedNameProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [typedLength, setTypedLength] = useState(prefersReducedMotion ? text.length : 0)
  const [done, setDone] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return

    let index = 0
    const interval = setInterval(() => {
      index += 1
      setTypedLength(index)
      if (index >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, TYPE_SPEED_MS)

    return () => clearInterval(interval)
  }, [text, prefersReducedMotion])

  return (
    <span>
      {text.slice(0, typedLength)}
      <span
        aria-hidden
        className={`ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-primary align-middle ${
          done ? 'animate-[caret-blink_1s_step-end_infinite]' : ''
        }`}
      />
    </span>
  )
}

export default TypedName
