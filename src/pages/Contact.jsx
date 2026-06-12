import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/components/Contact.css';
import Seo from '../components/Seo';
import { clinicInfo, clinicLocationLabel } from '../data/clinicInfo';
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createWebPageSchema,
  pageKeywords,
} from '../data/seo';

const Contact = () => {
  const title = "Contact Shivaranjani Speech & Hearing Clinic in Hyderabad";
  const description =
    "Call, email, WhatsApp, or visit Shivaranjani Speech & Hearing Clinic in Peerzadiguda, Uppal, Hyderabad to book hearing tests, speech therapy, hearing aid support, or implant follow-up care.";

  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone />,
      title: 'Phone',
      details: [clinicInfo.primaryPhone.display, clinicInfo.secondaryPhone.display],
      link: `tel:${clinicInfo.primaryPhone.e164}`,
      color: '#10b981'
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: 'Email',
      details: [clinicInfo.email],
      link: `mailto:${clinicInfo.email}`,
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: [clinicInfo.siteName, clinicLocationLabel],
      link: clinicInfo.mapUrl,
      color: '#ef4444'
    },
    {
      id: 4,
      icon: <FaClock />,
      title: 'Working Hours',
      details: [clinicInfo.hoursLabel, clinicInfo.hoursSecondaryLabel],
      link: null,
      color: '#f59e0b'
    }
  ];

  const contactChannels = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      link: clinicInfo.whatsappUrl,
      color: '#25d366'
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      name: 'Email',
      link: `mailto:${clinicInfo.email}`,
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: <FaPhone />,
      name: 'Call',
      link: `tel:${clinicInfo.primaryPhone.e164}`,
      color: '#10b981'
    },
    {
      id: 4,
      icon: <FaMapMarkerAlt />,
      name: 'Directions',
      link: clinicInfo.mapUrl,
      color: '#ef4444'
    }
  ];

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/contact"
        keywords={pageKeywords.contact}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/contact",
            title,
            description,
            type: "ContactPage",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <div className="contact-page container">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle">
              We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>
          <div className="hero-decoration"></div>
        </section>

        <section className="contact-info-section container section">
          <div className="contact-info-grid">
            {contactInfo.map((info) => (
              <div key={info.id} className="contact-card" style={{ '--card-color': info.color }}>
                <div className="contact-card-icon">
                  {info.icon}
                </div>
                <h3 className="contact-card-title">{info.title}</h3>
                <div className="contact-card-details">
                  {info.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
                {info.link && (
                  <a
                    href={info.link}
                    className="contact-card-link"
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    {info.title === 'Phone' ? 'Call Us' :
                      info.title === 'Email' ? 'Send Email' :
                        info.title === 'Location' ? 'View on Map' : 'Contact'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-main-section container section">
          <div className="contact-content-grid">
            <div className="social-media-section">
              <h3 className="social-title">Quick Contact Channels</h3>
              <p className="social-subtitle">Reach our clinic through the channels you use most</p>
              <div className="social-links">
                {contactChannels.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="map-container">
              <h3 className="map-title">Visit Our Clinic</h3>
              <div className="map-wrapper">
                <iframe
                  src={clinicInfo.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivaranjani Speech & Hearing Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-cta-section section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Journey?</h2>
              <p className="cta-subtitle">
                Book an appointment today and take the first step towards better communication and hearing.
              </p>
              <a href="/services/book" className="cta-btn">
                Book Appointment
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
