import SectionTitle from '../components/SectionTitle.jsx'
import { portfolioItems } from '../data/content.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <SectionTitle title="Portfolio">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </SectionTitle>

      <div className="container">
        <div className="isotope-layout">
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={`${item.title}-${idx}`}>
                <div className="portfolio-item">
                  <img src={item.img} alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.category.charAt(0).toUpperCase() + item.category.slice(1)} Design</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
