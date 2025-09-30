import "../styles/components/ServicesList.css";
import { assets, servicesListImgs } from "../assets/assets";
function ServicesList() {
  return (
    <section className="services-list container">
      {/* large screens */}
      <div className="service service-large col1">
        <img
          className="services-list-img"
          src={servicesListImgs.hear_large_screen}
          alt="services-list-image"
        />
      </div>

      <div className="service service-large col2">
        <img
          className="services-list-img"
          src={servicesListImgs.speech_large_screen}
          alt="services-list-image"
        />
      </div>

      <div className="service service-large col3">
        <img
          className="services-list-img"
          src={servicesListImgs.book_large_screen}
          alt="services-list-image"
        />
      </div>

      {/* mini screens */}
      <div className="service service-mini col1">
        <div className="services-list-mobile">
          <img
            src={servicesListImgs.hear_mini_screen}
            className="services-list-img"
            alt="hearing-logo"
          />
        </div>
      </div>

      <div className="service service-mini col2">
        <div className="services-list-mobile">
          <img
            src={servicesListImgs.speech_mini_screen}
            className="services-list-img"
            alt="hearing-logo"
          />
        </div>
      </div>

      <div className="service service-mini col3">
        <div className="services-list-mobile">
          <img
            src={servicesListImgs.book_mini_screen}
            className="services-list-img"
            alt="hearing-logo"
          />
        </div>
      </div>
    </section>
  );
}
export default ServicesList;
