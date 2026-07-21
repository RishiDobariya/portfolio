import { resume } from '../data/content.js'

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>{resume.intro}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Profile Summary</h3>
            <div className="resume-item pb-0">
              <h4>{resume.summary.name}</h4>
              <p>
                <em>{resume.summary.note}</em>
              </p>
              <ul>
                {resume.summary.items.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}:</strong>{' '}
                    {item.link ? <a href={item.link}>{item.value}</a> : item.value}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>{resume.education.title}</h4>
              <h5>{resume.education.period}</h5>
              <p>
                <em>{resume.education.school}</em>
              </p>
              <p>{resume.education.extra}</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Projects</h3>
            {resume.projects.map((project) => (
              <div className="resume-item" key={project.title}>
                <h4>{project.title}</h4>
                <h5>{project.period}</h5>
                <p>
                  <em>{project.text}</em>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="resume-title">Technical Skills</h3>
            <div className="resume-item">
              <ul>
                {resume.technicalSkills.map((skill) => (
                  <li key={skill.label}>
                    <strong>{skill.label}:</strong> {skill.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="resume-title">Certifications</h3>
            <div className="resume-item">
              <ul>
                {resume.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <h3 className="resume-title">Languages</h3>
            <div className="resume-item">
              <p>{resume.languages}</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <h3 className="resume-title">Hobbies</h3>
            <div className="resume-item">
              <p>{resume.hobbies}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
