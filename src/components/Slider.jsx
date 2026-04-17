import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { slideImages } from "../assets/assets";
import client from '../sanity/client';
import { urlFor } from '../sanity/imageUrl';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/Slider.css';
import '../styles/components/Skeleton.css';

function Slider() {
  const [slides, setSlides] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    client
      .fetch(`*[_type == "adsSlide" && active == true] | order(order asc) { _id, title, image, link }`)
      .then((data) => {
        if (data && data.length > 0) {
          setSlides(data);
        }
        setLoaded(true);
      })
      .catch(() => {
        // Sanity unavailable — fall back to local images
        setLoaded(true);
      });
  }, []);

  // Use Sanity slides if available, otherwise fall back to local slideImages
  // Limit to a maximum of 6 slides
  const allSlides = slides.length > 0
    ? slides.map((slide) => ({
      id: slide._id,
      src: urlFor(slide.image).width(1400).quality(80).url(),
      alt: slide.title || 'Advertisement slide',
      link: slide.link || null,
    }))
    : slideImages;
  const displaySlides = allSlides.slice(0, 6);

  if (!loaded) return (
    <section className="slider-ads container section">
      <div className="skeleton skeleton-slider"></div>
    </section>
  );

  return (
    <section className="slider-ads container section">
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
        {displaySlides.map((slide) => (
          <SwiperSlide className='slide' key={slide.id}>
            <img className='slider-img' src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Slider;