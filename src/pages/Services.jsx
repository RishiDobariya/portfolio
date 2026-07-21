import SectionTitle from '../components/SectionTitle.jsx'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <section id="services" className="services section">
      <SectionTitle title="Services">
        Delivering innovative &amp; tailored design solutions for your success!
      </SectionTitle>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, idx) => (
            <div
              className="col-lg-4 col-md-6"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className="service-card">
                <span className="num">{String(idx + 1).padStart(2, '0')}</span>
                <div className="service-ic">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
