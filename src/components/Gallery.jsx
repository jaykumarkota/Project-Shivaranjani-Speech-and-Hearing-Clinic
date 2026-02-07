import "../styles/components/Gallery.css";

function Gallery() {
    const galleryImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
            alt: "Modern clinic reception area",
            caption: "Reception & Waiting Area"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
            alt: "Speech therapy room",
            caption: "Speech Therapy Room"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
            alt: "Hearing testing equipment",
            caption: "Hearing Testing Equipment"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
            alt: "Consultation room",
            caption: "Consultation Room"
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
            alt: "Therapy session area",
            caption: "Therapy Session Area"
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
            alt: "Medical equipment",
            caption: "Advanced Medical Equipment"
        }
    ];

    return (
        <section className="gallery-section container section">
            <div className="gallery-header">
                <span className="gallery-badge">OUR CLINIC</span>
                <h2 className="gallery-title">Explore Our Facility</h2>
                <p className="gallery-subtitle">
                    A glimpse into our modern, patient-focused clinic designed for your comfort and care
                </p>
            </div>

            <div className="gallery-grid">
                {galleryImages.map((image) => (
                    <div key={image.id} className="gallery-item">
                        <div className="gallery-image-wrapper">
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="gallery-image"
                                loading="lazy"
                            />
                            <div className="gallery-overlay">
                                <div className="gallery-overlay-content">
                                    <div className="gallery-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="M21 21l-4.35-4.35" />
                                        </svg>
                                    </div>
                                    <p className="gallery-caption">{image.caption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;
