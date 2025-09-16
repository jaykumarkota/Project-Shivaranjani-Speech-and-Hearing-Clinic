import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { assets, slideImages } from "../assets/assets";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/Slider.css';

function Slider() {

  return (
    <section className="slider-ads container">
      <Swiper
        className='slider-wrapper'
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}>
        {slideImages.map((slide) => (
          <SwiperSlide className='slide' key={slide.id}><img className='slider-img' src={slide.src} alt={slide.alt} /></SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Slider;