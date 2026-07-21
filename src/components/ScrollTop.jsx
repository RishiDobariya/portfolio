import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 100)
    onScroll()
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      id="scroll-top"
      onClick={handleClick}
      className={`scroll-top d-flex align-items-center justify-content-center${active ? ' active' : ''}`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}
