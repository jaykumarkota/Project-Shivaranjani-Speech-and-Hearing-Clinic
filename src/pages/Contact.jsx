import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import '../styles/components/Contact.css';

const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: <FaPhone />,
            title: 'Phone',
            details: ['+91 98765 43210', '+91 87654 32109'],
            link: 'tel:+919876543210',
            color: '#10b981'
        },
        {
            id: 2,
            icon: <FaEnvelope />,
            title: 'Email',
            details: ['info@shivaranjani.clinic', 'appointment@shivaranjani.clinic'],
            link: 'mailto:info@shivaranjani.clinic',
            color: '#3b82f6'
        },
        {
            id: 3,
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            details: ['Shivaranjani Speech and Hearing Clinic', 'Hyderabad, Telangana'],
            link: 'https://www.google.com/maps/place/Shivaranjani+Speech+and+Hearing+Clinic/@17.4020941,78.5821943,17z',
            color: '#ef4444'
        },
        {
            id: 4,
            icon: <FaClock />,
            title: 'Working Hours',
            details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment Only'],
            link: null,
            color: '#f59e0b'
        }
    ];

    const socialMedia = [
        {
            id: 1,
            icon: <FaFacebookF />,
            name: 'Facebook',
            link: 'https://facebook.com',
            color: '#1877f2'
        },
        {
            id: 2,
            icon: <FaInstagram />,
            name: 'Instagram',
            link: 'https://instagram.com',
            color: '#e4405f'
        },
        {
            id: 3,
            icon: <FaWhatsapp />,
            name: 'WhatsApp',
            link: 'https://wa.me/919876543210',
            color: '#25d366'
        },
        {
            id: 4,
            icon: <FaLinkedinIn />,
            name: 'LinkedIn',
            link: 'https://linkedin.com',
            color: '#0077b5'
        }
    ];

    return (
        <div className="contact-page container">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">Get In Touch</h1>
                    <p className="contact-hero-subtitle">
                        We're here to help! Reach out to us through any of the channels below.
                    </p>
                </div>
                <div className="hero-decoration"></div>
            </section>

            {/* Contact Info Cards */}
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

            {/* Main Contact Section */}
            <section className="contact-main-section container section">
                <div className="contact-content-grid">
                    {/* Social Media */}
                    <div className="social-media-section">
                        <h3 className="social-title">Follow Us</h3>
                        <p className="social-subtitle">Stay connected on social media</p>
                        <div className="social-links">
                            {socialMedia.map((social) => (
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

                    {/* Map */}
                    <div className="map-container">
                        <h3 className="map-title">Visit Our Clinic</h3>
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.8004837419511!2d78.5821943!3d17.4020941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f00690e2a7d%3A0x513fdf3170598b4b!2sShivaranjani%20Speech%20and%20Hearing%20Clinic!5e0!3m2!1sen!2sin!4v1768296553474!5m2!1sen!2sin"
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

            {/* CTA Section */}
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
    );
};

export default Contact;
