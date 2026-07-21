import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import GLightbox from 'glightbox'
import SectionTitle from '../components/SectionTitle.jsx'
import { portfolioFilters, portfolioItems } from '../data/content.js'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*')
  const lightboxRef = useRef(null)

  const visibleItems = portfolioItems.filter(
    (item) => activeFilter === '*' || item.category === activeFilter
  )

  // (Re)initialise GLightbox whenever the visible set changes.
  useEffect(() => {
    if (lightboxRef.current) lightboxRef.current.destroy()
    lightboxRef.current = GLightbox({ selector: '.glightbox' })
    return () => {
      if (lightboxRef.current) lightboxRef.current.destroy()
    }
  }, [activeFilter])

  return (
    <section id="portfolio" className="portfolio section">
      <SectionTitle title="Portfolio">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </SectionTitle>

      <div className="container">
        <div className="isotope-layout">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            {portfolioFilters.map((filter) => (
              <li
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={activeFilter === filter.key ? 'filter-active' : undefined}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {visibleItems.map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={`${item.title}-${idx}`}>
                <div className="portfolio-item">
                  <img src={item.img} alt={item.title} />
                  <div className="portfolio-links">
                    <a
                      href={item.img}
                      title={item.title}
                      data-gallery={`portfolio-gallery-${item.category}`}
                      className="glightbox"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <Link to="/portfolio-details" title="More Details">
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
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
