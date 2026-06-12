import { Link } from "react-router-dom";
import "../styles/components/ServiceCategoryPage.css";

function ServiceCategoryPage({
  pageClassName,
  title,
  subtitle,
  serviceType,
  sections,
}) {
  return (
    <section
      className={`service-category-page ${pageClassName} container`}
      aria-labelledby={`${serviceType}-services-heading`}
      role="region"
    >
      <header className="service-page-header">
        <span className="service-page-kicker">Specialized Care</span>
        <h2
          className="service-page-title"
          id={`${serviceType}-services-heading`}
        >
          {title}
        </h2>
        <p className="service-page-subtitle">{subtitle}</p>
      </header>

      <div className="service-category-groups">
        {sections.map((section) => (
          <section
            key={section.title}
            className="service-category-group"
            aria-labelledby={`${serviceType}-${section.title}`}
          >
            <div className="service-category-header">
              <p className="service-category-label">{title}</p>
              <h3
                className="service-category-title"
                id={`${serviceType}-${section.title}`}
              >
                {section.title}
              </h3>
              <p className="service-category-summary">{section.description}</p>
            </div>

            <div className="service-category-grid" role="list">
              {section.items.map((item) => (
                <article
                  key={item.title}
                  className="service-panel"
                  role="listitem"
                >
                  <div
                    className="service-panel-media"
                    role="img"
                    aria-label={`${item.title} illustration`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} service`}
                      className="service-panel-image"
                    />
                  </div>

                  <div className="service-panel-content">
                    <p className="service-panel-section">{section.title}</p>
                    <h4 className="service-panel-title">{item.title}</h4>
                    <p className="service-panel-copy">{item.description}</p>
                    <p className="service-panel-copy service-panel-copy-secondary">
                      {item.extra}
                    </p>
                    <Link
                      className="service-panel-button btn"
                      to="/services/book"
                      state={{
                        serviceType,
                        service: item.title,
                      }}
                      aria-label={`Book appointment for ${item.title}`}
                    >
                      Book Now
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default ServiceCategoryPage;
