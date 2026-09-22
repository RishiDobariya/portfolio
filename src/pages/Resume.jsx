import { resume } from '../data/content.js'

export default function Resume() {
  const educationItems = [
    resume.education,
    {
      title: 'MCA (Master of Computer Application)',
      period: 'Expected Graduation: 2027',
      school: 'LJ University',
      extra: 'SPI: 8.24',
    },
  ]

  const experience = {
    title: 'UI/UX Design Intern',
    period: '3 months',
    company: 'Triovex Solutions',
    text: 'Designed real-world website interfaces and user experiences using UI/UX design principles.',
  }

  const projects = [
    {
      title: 'Travel Application',
      period: 'Figma',
      text: 'Designed a complete travel application interface in Figma, including user flows, wireframes, and high-fidelity UI screens. Created an intuitive and visually consistent user experience focused on usability, navigation, and modern design principles.',
    },
    {
      title: 'Coffee Shop',
      period: 'Figma',
      text: 'Designed a high-fidelity UI for a coffee shop application, covering key customer journeys from product discovery to checkout. Built reusable UI components and maintained a consistent design system to improve scalability and user experience.',
    },
    {
      title: 'Farm House Booking System',
      period: 'Figma',
      text: 'Designed mobile and web screens in Figma for a farm house booking platform, covering the end-to-end booking user flow. Applied usability and aesthetic design principles to create user-friendly, consistent interfaces across both platforms.',
    },
  ]

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
            {educationItems.map((education) => (
              <div className="resume-item" key={education.title}>
                <h4>{education.title}</h4>
                <h5>{education.period}</h5>
                <p>
                  <em>{education.school}</em>
                </p>
                <p>{education.extra}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>{experience.title}</h4>
              <h5>{experience.period}</h5>
              <p>
                <em>{experience.company}</em>
              </p>
              <p>{experience.text}</p>
            </div>

            <h3 className="resume-title">Projects</h3>
            {projects.map((project) => (
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
