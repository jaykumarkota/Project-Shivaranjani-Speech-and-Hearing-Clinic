import "../styles/components/Footer.css";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { FaLocationDot, FaClock, FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


function Footer() {


  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: <FaFacebook className="fb-icon follow-us-icons" />,
      label: "Facebook",
    },
    {
      href: "https://wa.me/1234567890",
      icon: <FaWhatsapp className="wa-icon follow-us-icons" />,
      label: "WhatsApp",
    },
    {
      href: "https://instagram.com",
      icon: <FaInstagram className="insta-icon follow-us-icons" />,
      label: "Instagram",
    },
    {
      href: "https://twitter.com",
      icon: <FaXTwitter className="x-icon follow-us-icons" />,
      label: "X (Twitter)",
    },
  ];


  return (
    <section id="footer" className="footer container">
      <div className="row1">
        <div className="col1 footer-small-about">
          <div className="logo">
            <img src={assets.clinic_logo} alt="logo" className="logo-img" loading="lazy" />
            <h2 className="logo-title">
              Shivaranjani
              <br />
              Speech & Hearing Clinic
            </h2>
          </div>
          <p className="footer-small-desc">
            A fully equipped speech and hearing clinic offering advanced
            diagnostic and rehabilitation services for all age groups.
          </p>
          <div className="footer-follow-us">
            <h4 className="follow-us-title">Follow Us</h4>

            <ul className="follow-us-links">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-links"
                    aria-label={`Visit our ${link.label} page`}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
        <div className="col2 footer-about-us">
          <div>
            <h4 className="about-us-title">About Us</h4>
            <ul className="about-us-links">
              <li>
                <Link to="/about" className="footer-links">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-links">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-links">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col3 footer-services">
          <div>
            <h4 className="services-title">Services</h4>
            <ul className="services-links">
              <li>
                <Link to="/services/hearing" className="footer-links">
                  Hearing Services
                </Link>
              </li>
              <li>
                <Link to="/services/speech" className="footer-links">
                  Speech Services
                </Link>
              </li>
              <li>
                <Link to="/services/book" className="footer-links">
                  Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col4 footer-contact">
          <h4 className="footer-contact-title">Contact Us</h4>
          <div className="footer-contact-cont">

            <div className="contact-item contact-address-cont" aria-label="Clinic Address">
              <FaLocationDot className="contact-icon" />
              <span className="contact-address">
                Flat 302, 3rd Floor Nirmala Kubera Heights, Peerzadiguda, Uppal,
                Hyderabad, Telangana - 500039
              </span>
            </div>

            <div className="contact-item contact-timings-cont" aria-label="Clinic timings">
              <FaClock className="contact-icon" />
              <span className="contact-timings">Timings: 10:00AM - 8:00PM</span>
            </div>

            <div className="contact-item contact-phone-cont" aria-label="Clinic phone number">
              <BsFillTelephoneFill className="contact-icon" />
              <a href="tel:8977635998" className="footer-links contact-phone">8977635998</a>,
              <a href="tel:9494704021" className="footer-links contact-phone">9494704021</a>
            </div>

            <div className="contact-item contact-mail-cont" aria-label="Clinic email">
              <MdEmail className="contact-icon" />
              <a href="mailto:shivaranjanispeechandhearingcl@gmail.com" className="contact-email footer-links">
                shivaranjanispeechandhearingcl@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className="row2">
        <p className="copyright-msg">
          Copyright © 2025. Shivaranjani Clinic All rights reserved
        </p>
      </div>
    </section>
  );
}
export default Footer;
