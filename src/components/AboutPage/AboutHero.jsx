import { useState, useEffect } from 'react';
import '../../styles/components/AboutPage/AboutHero.css';
import { Link } from 'react-router-dom';
import { aboutImages } from '../../assets/assets.js';
import client from '../../sanity/client';
import { urlFor } from '../../sanity/imageUrl';
import '../../styles/components/Skeleton.css';

function AboutHero() {
  const [doctorImg, setDoctorImg] = useState(aboutImages.doctor_img);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "doctor"][0] { profilePic }`)
      .then((data) => {
        if (data && data.profilePic) {
          setDoctorImg(urlFor(data.profilePic).width(800).quality(80).url());
        }
        setImgLoading(false);
      })
      .catch(() => {
        // Sanity unavailable — keep fallback image
        setImgLoading(false);
      });
  }, []);

  return (
    <section className="hero container section" aria-label="Clinic overview">
      <div className="hero-inner">

        <div className="hero-left-img">
          {imgLoading
            ? <div className="skeleton skeleton-hero-img"></div>
            : <img
              src={doctorImg}
              alt="Dr. Shivaranjani"
              className="hero-img"
            />
          }
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
              to='/about/about-docter'
            >
              Read More About Our Docter
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