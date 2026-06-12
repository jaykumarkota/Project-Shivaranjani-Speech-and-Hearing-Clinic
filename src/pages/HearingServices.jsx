import Seo from "../components/Seo";
import ServiceCategoryPage from "../components/ServiceCategoryPage";
import { hearingServiceSections } from "../data/serviceCatalog";
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createServicePageSchema,
  createWebPageSchema,
  pageKeywords,
} from "../data/seo";

function HearingServices() {
  const title =
    "Hearing Tests, Hearing Aids and Audiology Services in Hyderabad";
  const description =
    "Get Pure Tone Audiometry, Impedance Audiometry, Speech Audiometry, BERA, hearing aids, hearing aid programming, auditory training, and AVT at Shivaranjani Speech & Hearing Clinic in Hyderabad.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/services/hearing"
        keywords={pageKeywords.hearing}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/services/hearing",
            title,
            description,
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Hearing Services", path: "/services/hearing" },
          ]),
          createServicePageSchema({
            name: "Hearing Services",
            path: "/services/hearing",
            description,
            sections: hearingServiceSections,
          }),
        ]}
      />
      <ServiceCategoryPage
        pageClassName="hearing-services"
        title="Hearing Services"
        subtitle="Our hearing team combines diagnostic precision, technology support, and rehabilitation planning to help children and adults hear more clearly and communicate with confidence."
        serviceType="hearing"
        sections={hearingServiceSections}
      />
    </>
  );
}

export default HearingServices;
