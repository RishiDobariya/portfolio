import { Link } from 'react-router-dom'
import { profile, socials } from '../data/content.js'

export default function Home() {
  return (
    <section id="hero" className="hero">
      <span className="hero-blob b1"></span>
      <span className="hero-blob b2"></span>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy" data-aos="fade-up">
            <span className="hero-badge">
              <span className="pulse"></span> Available for freelance work
            </span>

            <h1 className="hero-title">
              Hi, I&rsquo;m <span className="gradient-text">Rishi</span>
              <br />
              I craft digital experiences.
            </h1>

            <p className="hero-role">UI/UX Designer &amp; Graphic Designer — from Rajkot, India</p>

            <p className="hero-desc">
              I design user-centered interfaces and bold brand visuals that blend creativity with
              function — turning ideas into products people love to use.
            </p>

            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">
                View My Work <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Get in Touch
              </Link>
            </div>

            <div className="hero-socials">
              {socials.map((s) => (
                <a key={s.name} href={s.url} aria-label={s.name}>
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual" data-aos="zoom-in" data-aos-delay="150">
            <div className="avatar-ring">
              <img className="avatar" src="/profile-img.jpg" alt={profile.fullName} />
            </div>
            <div className="hero-chip c1">
              <i className="bi bi-palette-fill"></i>
              <div>
                <strong>UI/UX</strong>
                <span>Design</span>
              </div>
            </div>
            <div className="hero-chip c2">
              <i className="bi bi-stars"></i>
              <div>
                <strong>10+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
