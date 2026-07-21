import { profile, socials } from '../data/content.js'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{' '}
            <strong className="px-1 sitename">{profile.name}</strong>{' '}
            <span>
              All Rights Reserved
              <br />
            </span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          {socials.map((s) => (
            <a key={s.name} href={s.url}>
              <i className={`bi ${s.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
