import { Link } from "react-router-dom";
import "../styles/components/Services.css";
import { FaEarListen } from "react-icons/fa6";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { ourServicesImgs } from "../assets/assets";
import { homeServiceOverview } from "../data/serviceCatalog";

function Services({ headingLevel = "h2" }) {
  const clinicName = "Shivaranjani Speech & Hearing Clinic";
  const HeadingTag = headingLevel;

  return (
    <section
      className="hs-advanced-section container section"
      aria-labelledby="hs-advanced-title"
    >
      <div className="hs-advanced-top">
        <div className="hs-kicker">Our Services</div>
        <HeadingTag id="hs-advanced-title" className="hs-title">
          Specialized Hearing & Speech Care - Personalized, Evidence-Based
        </HeadingTag>
        <p className="hs-sub">
          {clinicName} delivers diagnostic testing, device support, and therapy
          programmes for all ages. Quick assessments. Long-term rehabilitation.
        </p>
      </div>

      <div className="hs-grid" role="list">
        <article
          className="hs-card hearing"
          role="listitem"
          aria-labelledby="hs-hearing-title"
        >
          <div className="hs-card-content">
            <div className="hs-icon" aria-hidden="true">
              <FaEarListen />
            </div>
            <h3 id="hs-hearing-title">Hearing Services</h3>
            <p className="hs-lead">{homeServiceOverview.hearing.lead}</p>

            <ul className="hs-features" aria-label="Hearing services">
              {homeServiceOverview.hearing.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="hs-ctas">
              <Link
                to="/services/book"
                state={{
                  serviceType: "hearing",
                }}
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
              src={ourServicesImgs.our_services_hearing}
              alt="Audiologist checking hearing aid on patient"
              loading="lazy"
              width="800"
              height="600"
            />
          </figure>
        </article>

        <article
          className="hs-card speech"
          role="listitem"
          aria-labelledby="hs-implant-title"
        >
          <figure className="hs-media" aria-hidden="true">
            <img
              src={ourServicesImgs.our_services_implants}
              alt="Cochlear implant consultation"
              loading="lazy"
              width="800"
              height="600"
            />
          </figure>

          <div className="hs-card-content">
            <div className="hs-icon" aria-hidden="true">
              <FaHeadphones />
            </div>
            <h3 id="hs-implant-title">Implant Services</h3>
            <p className="hs-lead">{homeServiceOverview.implant.lead}</p>

            <ul className="hs-features" aria-label="Implant services">
              {homeServiceOverview.implant.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="hs-ctas">
              <Link
                to="/services/book"
                state={{ serviceType: "implant" }}
                className="btn hs-btn primary"
                data-ga="appointment-hearing"
                aria-label="Book implant appointment"
              >
                <MdOutlineCalendarToday className="btn-icon" /> Book Appointment
              </Link>

              <Link
                to="/services/implants"
                className="btn hs-btn ghost"
                data-ga="learn-implant"
                aria-label="Learn more about implant services"
              >
                Learn more
              </Link>
            </div>
          </div>
        </article>

        <article
          className="hs-card hearing"
          role="listitem"
          aria-labelledby="hs-speech-title"
        >
          <div className="hs-card-content">
            <div className="hs-icon" aria-hidden="true">
              <RiSpeakFill />
            </div>
            <h3 id="hs-speech-title">Speech & Language Therapy</h3>
            <p className="hs-lead">{homeServiceOverview.speech.lead}</p>

            <ul className="hs-features" aria-label="Speech services">
              {homeServiceOverview.speech.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="hs-ctas">
              <Link
                to="/services/book"
                state={{ serviceType: "speech" }}
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

          <figure className="hs-media" aria-hidden="true">
            <img
              src={ourServicesImgs.our_services_speech}
              alt="Speech therapist working with a child"
              loading="lazy"
              width="800"
              height="600"
            />
          </figure>
        </article>
      </div>
    </section>
  );
}

export default Services;
