import SectionTitle from '../components/SectionTitle.jsx'
import Counter from '../components/Counter.jsx'
import useInView from '../hooks/useInView.js'
import { profile, skills, stats } from '../data/content.js'

export default function About() {
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 })

  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        <SectionTitle title="About" />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <div className="about-photo">
                <img src="/profile-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-8 content">
              <h2>UI/UX Designer &amp; Graphic Designer.</h2>
              <p className="fst-italic py-3">
                A passionate UI/UX and Graphic Designer with hands-on experience in creating
                user-centered designs, prototyping, and branding using Figma and Canva.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong>{' '}
                      <span>{profile.birthday}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Website:</strong>{' '}
                      <span>{profile.website}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>{' '}
                      <span>{profile.phone}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>City:</strong>{' '}
                      <span>{profile.city}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Age:</strong>{' '}
                      <span>{profile.age}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>{' '}
                      <span>{profile.degree}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Email:</strong>{' '}
                      <span>{profile.email}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>{' '}
                      <span>{profile.freelance}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">{profile.about}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section">
        <SectionTitle title="Skills">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </SectionTitle>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation" ref={skillsRef}>
            {[skills.slice(0, 3), skills.slice(3)].map((column, colIdx) => (
              <div className="col-lg-6" key={colIdx}>
                {column.map((skill) => (
                  <div className="progress" key={skill.label}>
                    <span className="skill">
                      <span>{skill.label}</span> <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: skillsInView ? `${skill.value}%` : '1px' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section">
        <SectionTitle title="Facts">
          Delivering creativity, one project at a time. A quick glance at our journey so far!
        </SectionTitle>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {stats.map((stat) => (
              <div className="col-6 col-lg-3 col-md-6" key={stat.label}>
                <div className="stats-item text-center w-100 h-100">
                  <Counter end={stat.end} duration={1} />
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
