import Seo from "../components/Seo";
import ServiceCategoryPage from "../components/ServiceCategoryPage";
import { implantServiceSections } from "../data/serviceCatalog";
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createServicePageSchema,
  createWebPageSchema,
  pageKeywords,
} from "../data/seo";

function ImplantServices() {
  const title =
    "Cochlear Implant, ABI Mapping and Rehabilitation Services in Hyderabad";
  const description =
    "Explore cochlear implants, auditory brainstem implants, implant accessories, mapping, post-implant auditory training, and auditory verbal training at Shivaranjani Speech & Hearing Clinic in Hyderabad.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/services/implants"
        keywords={pageKeywords.implant}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/services/implants",
            title,
            description,
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Implant Services", path: "/services/implants" },
          ]),
          createServicePageSchema({
            name: "Implant Services",
            path: "/services/implants",
            description,
            sections: implantServiceSections,
          }),
        ]}
      />
      <ServiceCategoryPage
        pageClassName="implant-services"
        title="Implant Services"
        subtitle="Our implant pathway brings together solution planning, technical follow-up, and structured rehabilitation so patients and families receive support beyond the procedure itself."
        serviceType="implant"
        sections={implantServiceSections}
      />
    </>
  );
}

export default ImplantServices;
