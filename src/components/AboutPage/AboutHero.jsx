import '../../styles/components/AboutPage/AboutHero.css';
import { Link } from 'react-router-dom';

function AboutHero() {
  return (
    <section className="hero container section" aria-label="Clinic overview">
      <div className="hero-inner">

        <div className="hero-left-img">
          <img
            src="https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg"
            alt="Dr. Shivaranjani"
            className="hero-img"
          />
        </div>

        <div className="hero-right">
          <h1 id="about-heading" className="clinic-name">
            SHIVARANJANI SPEECH &amp; HEARING CLINIC
          </h1>

          <p className="subtitle">
            Dr. Godumala Shivaranjani — Chief Implant Audiologist &amp; SLP
          </p>

          <p className="hero-desc">
            A trusted center for evidence-based diagnostics, implant audiology,
            speech-language therapy, and hearing rehabilitation — delivered with
            compassion, precision, and advanced technology.
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="mailto:Shivaranjanispeechandhearingcl@gmail.com">
              Email Clinic
            </a>
            <Link
              className="btn outline"
              // href="https://www.linkedin.com/in/godumala-shivaranjani-86435b1a7/"
              to='/about/about-docter'
            // target="_blank"
            // rel="noopener noreferrer"
            >
              Read More About Our Docter
              {/* LinkedIn Profile */}
            </Link>
          </div>

          <ul className="quick-info">
            <li><strong>RCI:</strong> A73222</li>
            <li><strong>Memberships:</strong> MCIGI, MISHA, MTASLPA</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default AboutHero;