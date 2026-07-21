import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { portfolioDetailsSlides } from '../data/content.js'

export default function PortfolioDetails() {
  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio Details</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="pd-slider">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop
                speed={600}
                autoplay={{ delay: 5000 }}
                slidesPerView="auto"
                pagination={{ type: 'bullets', clickable: true }}
              >
                {portfolioDetailsSlides.map((src) => (
                  <SwiperSlide key={src}>
                    <img src={src} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>: Web design
                </li>
                <li>
                  <strong>Client</strong>: ASU Company
                </li>
                <li>
                  <strong>Project date</strong>: 01 March, 2020
                </li>
                <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li>
              </ul>
            </div>
            <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
              <h2>Exercitationem repudiandae officiis neque suscipit</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi
                labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia
                eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
