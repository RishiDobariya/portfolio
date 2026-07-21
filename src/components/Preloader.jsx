import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setVisible(false)
      return
    }
    const onLoad = () => setVisible(false)
    window.addEventListener('load', onLoad)
    // Fallback so it never gets stuck.
    const timer = setTimeout(() => setVisible(false), 1500)
    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(timer)
    }
  }, [])

  if (!visible) return null
  return <div id="preloader"></div>
}
