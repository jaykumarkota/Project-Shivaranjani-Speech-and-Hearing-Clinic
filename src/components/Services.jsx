import { Link } from "react-router-dom";
import "../styles/components/Services.css";
import { FaEarListen } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";


function Services() {
  const clinicName = "Shivaranjani Speech & Hearing Clinic";

  const ld = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Speech and Hearing Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Hearing Assessment",
        "serviceType": "Audiology",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Shivaranjani Speech & Hearing Clinic"
        }
      },
      {
        "@type": "Service",
        "name": "Hearing Aid Fitting",
        "serviceType": "Hearing Rehabilitation",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Shivaranjani Speech & Hearing Clinic"
        }
      },
      {
        "@type": "Service",
        "name": "Speech & Language Therapy",
        "serviceType": "Speech Therapy",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Shivaranjani Speech & Hearing Clinic"
        }
      }
    ]
  };

  return (
    <section
      className="hs-advanced-section container section"
      aria-labelledby="hs-advanced-title"
    >
      <script type="application/ld+json">{JSON.stringify(ld)}</script>

      <div className="hs-advanced-top">
        <div className="hs-kicker">Our Services</div>
        <h2 id="hs-advanced-title" className="hs-title">
          Specialized Hearing & Speech Care — Personalized, Evidence-Based
        </h2>
        <p className="hs-sub">
          {clinicName} delivers diagnostic testing, device support, and therapy
          programmes for all ages. Quick assessments. Long-term rehabilitation.
        </p>
      </div>

      <div className="hs-grid" role="list">
        {/* Hearing card */}
        <article className="hs-card hearing" role="listitem" aria-labelledby="hs-hearing-title">
          <div className="hs-card-content">
            <div className="hs-icon" aria-hidden="true"><FaEarListen /></div>
            <h3 id="hs-hearing-title">Hearing Care</h3>
            <p className="hs-lead">
              Comprehensive audiology services including testing, hearing device
              fitting and tinnitus support.
            </p>

            <ul className="hs-features" aria-label="Hearing services">
              <li>Diagnostic hearing tests & assessments</li>
              <li>Digital hearing aid fitting & programming</li>
              <li>Tinnitus evaluation & management</li>
            </ul>

            <div className="hs-ctas">
              <Link
                to="/services/book"
                className="btn hs-btn primary"
                data-ga="appointment-hearing"
                aria-label="Book hearing appointment"
              >
                <MdOutlineCalendarToday className="btn-icon" /> Book Appointment
              </Link>

              <Link
                to="/services/hearing"
                className="btn hs-btn ghost"
                data-ga="learn-hearing"
                aria-label="Learn more about hearing services"
              >
                Learn more
              </Link>
            </div>
          </div>

          <figure className="hs-media" aria-hidden="true">
            <img
              src="https://northernvirginiafamilymedicine.com/wp-content/uploads/2018/11/PrimaryCareWeb.jpg"

              alt="Audiologist checking hearing aid on patient"
              loading="lazy"
              width="800"
              height="600"
            />
          </figure>
        </article>

        {/* Speech card */}
        <article className="hs-card speech" role="listitem" aria-labelledby="hs-speech-title">
          <figure className="hs-media" aria-hidden="true">
            <img
              // src="/assets/images/speech-demo.jpg"
              src="https://northernvirginiafamilymedicine.com/wp-content/uploads/2018/11/PrimaryCareWeb.jpg"
              alt="Speech therapist working with a child"
              loading="lazy"
              width="800"
              height="600"
            />
          </figure>

          <div className="hs-card-content">
            <div className="hs-icon" aria-hidden="true"><FaComments /></div>
            <h3 id="hs-speech-title">Speech & Language Therapy</h3>
            <p className="hs-lead">
              Individualised therapy for children and adults focusing on clarity,
              fluency and effective communication.
            </p>

            <ul className="hs-features" aria-label="Speech services">
              <li>Early childhood speech & language intervention</li>
              <li>Stuttering & fluency programs</li>
              <li>Voice, articulation & swallowing therapy</li>
            </ul>

            <div className="hs-ctas">
              <Link
                to="/services/book"
                className="btn hs-btn primary"
                data-ga="appointment-speech"
                aria-label="Book speech appointment"
              >
                <MdOutlineCalendarToday className="btn-icon" /> Book Appointment
              </Link>

              <Link
                to="/services/speech"
                className="btn hs-btn ghost"
                data-ga="learn-speech"
                aria-label="Learn more about speech services"
              >
                Learn more
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* Accent SVG wave */}
      {/* <svg className="hs-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440 80 L0 80 Z" fill="var(--wave-fill, #f4f7fb)"></path>
      </svg> */}
    </section>
  );
};

export default Services;