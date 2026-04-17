import { useState, useEffect } from 'react';
import '../styles/components/MiniAbout.css';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { aboutImages } from '../assets/assets.js';
import client from '../sanity/client';
import { urlFor } from '../sanity/imageUrl';
import '../styles/components/Skeleton.css';

function MiniAbout() {
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
    <section className="mini-about container section">
      <div className="about-image">
        {imgLoading
          ? <div className="skeleton skeleton-about-img"></div>
          : <img src={doctorImg} alt="about-image" />
        }
      </div>
      <div className="about-content">
        <h2 className="about-heading">About<br />Shivaranjani Hearing <br />& Speech Clinic</h2>
        <div className="about-description">
          <p className="about-desc1"><strong>Dr. Shivaranjani, Au.D.</strong> is a dedicated <strong>audiologist, implant audiologist, and speech-language therapist</strong> with over 8 years of experience. She specializes in hearing evaluations, speech therapy, and customized hearing-aid solutions.</p>
          <p className='about-desc2'>
            At <strong>Shivaranjani Hearing & Speech Clinic</strong>, we provide complete care for patients of all ages — from diagnostic tests to advanced treatments — in a warm, patient-focused environment.
          </p>
        </div>
        <Link className='read-more btn' to="/about"><span>Read more</span><FaRegArrowAltCircleRight className='read-more-arrow' /></Link>
      </div>
    </section>
  );
}
export default MiniAbout;