import React from 'react';
import '../styles/components/WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      title: "Expert Audiologists & Therapists",
      description: "Our team of certified professionals brings years of specialized training and compassionate care to every patient interaction.",
      icon: "👨‍⚕️"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80",
      title: "Advanced Diagnostic Technology",
      description: "State-of-the-art equipment and modern testing facilities ensure accurate diagnosis and effective treatment planning.",
      icon: "🔬"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      title: "Personalized Treatment Plans",
      description: "Every patient receives customized therapy programs designed specifically for their unique needs and goals.",
      icon: "📋"
    },
    {
      id: 4,
      image: "https://elizabeth-foundation.org/wp-content/uploads/2022/09/speech-therapy-06-570w.jpg",
      title: "Child-Friendly Environment",
      description: "Our welcoming, colorful spaces are specially designed to make children feel comfortable and engaged during therapy.",
      icon: "🎨"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
      title: "Comprehensive Services",
      description: "From speech therapy to hearing assessments, we provide complete care for all communication and hearing needs under one roof.",
      icon: "🏥"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80",
      title: "Ongoing Support & Follow-up",
      description: "We believe in continuous care with regular progress monitoring and family counseling to ensure lasting results.",
      icon: "💙"
    }
  ];

  return (
    <section className="why-choose-section container section">
      <div className="why-choose-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Your Partner in Better Communication & Hearing
          </h2>
          <p className="section-subtitle">
            As a newly established clinic, we bring fresh perspectives, modern approaches,
            and a passionate commitment to transforming lives through exceptional speech and hearing care.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="card-accent"></div>
              <div className="card-image-wrapper">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-icon">{reason.icon}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{reason.title}</h3>
                <p className="card-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;