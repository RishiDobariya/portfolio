import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { profile, socials } from '../data/content.js'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <header className={`site-header${open ? ' nav-open' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="brand">
          {profile.name}
          <span className="dot">.</span>
        </Link>

        <div className="nav-backdrop" onClick={() => setOpen(false)}></div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="nav-socials">
            {socials.map((s) => (
              <a key={s.name} href={s.url} aria-label={s.name}>
                <i className={`bi ${s.icon}`}></i>
              </a>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary nav-cta">
            Let&rsquo;s Talk
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>
    </header>
  )
}
