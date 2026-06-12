import "../styles/components/Location.css";
import { clinicInfo } from "../data/clinicInfo";

function Location({ headingLevel = "h2" }) {
  const HeadingTag = headingLevel;

  return (
    <section
      className="location-map container section"
      aria-labelledby="clinic-location-title"
      aria-describedby="clinic-location-description"
    >
      <div className="location-wrapper">
        <div className="location-text">
          <HeadingTag id="clinic-location-title">Our Clinic Location</HeadingTag>
          <p id="clinic-location-description">
            Shivaranjani Speech & Hearing Clinic is located in Hyderabad,
            offering specialized speech and hearing therapy for children and
            adults. The clinic is easily accessible by public transport and
            provides parking space for visitors.
          </p>
          <p>
            Visit us to experience compassionate care and expert consultation.
            Use the map to find directions or plan your visit conveniently.
          </p>
        </div>

        <div
          className="map-wrapper"
          role="region"
          aria-label="Google Map showing Shivaranjani Speech and Hearing Clinic location"
        >
          <iframe
            title="Shivaranjani Speech & Hearing Clinic Location"
            src={clinicInfo.mapEmbedUrl}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
