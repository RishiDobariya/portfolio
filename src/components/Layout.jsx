import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AOS from 'aos'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollTop from './ScrollTop.jsx'
import Preloader from './Preloader.jsx'

export default function Layout() {
  const location = useLocation()

  // Apply the `.scrolled` body class as the page scrolls (used by sticky header).
  useEffect(() => {
    const toggleScrolled = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 100)
    }
    toggleScrolled()
    document.addEventListener('scroll', toggleScrolled)
    return () => document.removeEventListener('scroll', toggleScrolled)
  }, [])

  // Initialise scroll animations once.
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  // On navigation: scroll to top and refresh animations for the new page.
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.refreshHard()
  }, [location.pathname])

  return (
    <>
      <Preloader />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
