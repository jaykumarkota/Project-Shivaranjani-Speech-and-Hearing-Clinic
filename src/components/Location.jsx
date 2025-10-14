import "../styles/components/Location.css";

function Location() {
  return (
    <section
      className="location-map container section"
      aria-labelledby="clinic-location-title"
      aria-describedby="clinic-location-description"
    >
      <div className="location-wrapper">
        <div className="location-text">
          <h2>Our Clinic Location</h2>
          <p>
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

        <div className="map-wrapper"
          role="region"
          aria-label="Google Map showing Shivaranjani Speech and Hearing Clinic location">
          <iframe
            title="Shivaranjani Speech & Hearing Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1982672673203!2d78.5774923861027!3d17.402270208437198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f0036bd9821%3A0x2455d0cbcd8b8672!2sNirmala%20Kubera%20Heights!5e0!3m2!1sen!2sin!4v1760465858784!5m2!1sen!2sin"
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
