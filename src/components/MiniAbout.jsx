import '../styles/components/MiniAbout.css';
import { slideImages } from '../assets/assets.js'
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function MiniAbout() {

  return (
    <section className="mini-about container section">
      <div className="about-image">
        <img src="https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg" alt="about-image" />
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