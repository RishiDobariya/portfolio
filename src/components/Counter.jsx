import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'

// Counts up from `start` to `end` over `duration` seconds once scrolled into view.
export default function Counter({ start = 0, end = 100, duration = 1 }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!inView) return
    let frame
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      setValue(Math.floor(start + (end - start) * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, start, end, duration])

  return <span ref={ref}>{value}</span>
}
