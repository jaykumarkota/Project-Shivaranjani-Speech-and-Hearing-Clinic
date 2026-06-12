import "../styles/components/ServicesList.css";
import { servicesListImgs } from "../assets/assets";
import { Link } from "react-router-dom";

function ServicesList() {
  return (
    <section className="services-list container">
      {/* large screens */}
      <div className="service service-large col1">
        <Link to="/services/hearing">
          <img
            className="services-list-img"
            src={servicesListImgs.hear_large_screen}
            alt="Hearing services at Shivaranjani Speech and Hearing Clinic"
          />
        </Link>
      </div>

      <div className="service service-large col2">
        <Link to="/services/speech">
          <img
            className="services-list-img"
            src={servicesListImgs.speech_large_screen}
            alt="Speech therapy services at Shivaranjani Speech and Hearing Clinic"
          />
        </Link>
      </div>

      <div className="service service-large col3">
        <Link to="/services/book">
          <img
            className="services-list-img"
            src={servicesListImgs.book_large_screen}
            alt="Book an appointment at Shivaranjani Speech and Hearing Clinic"
          />
        </Link>
      </div>

      {/* mini screens */}
      <div className="service service-mini col1">
        <div className="services-list-mobile">
          <Link to="/services/hearing">
            <img
              src={servicesListImgs.hear_mini_screen}
              className="services-list-img"
              alt="Hearing services"
            />
          </Link>
        </div>
      </div>

      <div className="service service-mini col2">
        <div className="services-list-mobile">
          <Link to="/services/speech">
            <img
              src={servicesListImgs.speech_mini_screen}
              className="services-list-img"
              alt="Speech services"
            />
          </Link>
        </div>
      </div>

      <div className="service service-mini col3">
        <div className="services-list-mobile">
          <Link to="/services/book">
            <img
              src={servicesListImgs.book_mini_screen}
              className="services-list-img"
              alt="Book appointment"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default ServicesList;
