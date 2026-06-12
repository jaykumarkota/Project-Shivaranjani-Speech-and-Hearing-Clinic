import Seo from '../components/Seo';
import Services from '../components/Services';
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createOfferCatalogSchema,
  createWebPageSchema,
  pageKeywords,
} from '../data/seo';

const ServicesPage = () => {
  const title = "Speech, Hearing and Implant Services in Hyderabad";
  const description =
    "Explore hearing services, speech therapy, implant solutions, rehabilitation, hearing aids, evaluations, mapping, and auditory training at Shivaranjani Speech & Hearing Clinic in Hyderabad.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/services"
        keywords={pageKeywords.services}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/services",
            title,
            description,
            type: "CollectionPage",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          createOfferCatalogSchema(),
        ]}
      />
      <div className="services-page">
        <Services headingLevel="h1" />
      </div>
    </>
  );
};

export default ServicesPage;
