import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "../styles/components/Testimonial.css"
import { testimonials } from '../assets/assets';
import { FaQuoteLeft } from "react-icons/fa";

function Testimonial() {

  return (
    <section className="testimonial container section">
      <h4 className="testimonial-title">What Our Customers Are Saying</h4>
      <p className="testimonial-subtitle">TESTIMONIAL</p>
      <Swiper
        className='testimonial-wrapper'
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}>
        {testimonials.map((t) => (
          <SwiperSlide className='testimonial-slide' key={t.id}>
            <div className="slide-cont">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-para"><em>{t.message}</em></p>
              <p className="testimonial-name">— {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial;