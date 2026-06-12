import Seo from "../components/Seo";
import ServiceCategoryPage from "../components/ServiceCategoryPage";
import { speechServiceSections } from "../data/serviceCatalog";
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createServicePageSchema,
  createWebPageSchema,
  pageKeywords,
} from "../data/seo";

function SpeechServices() {
  const title = "Speech Therapy, Voice and Language Services in Hyderabad";
  const description =
    "Access speech evaluation, voice evaluation, fluency evaluation, articulation therapy, aphasia care, dysarthria care, autism communication support, ADHD communication therapy, and child speech-language services in Hyderabad.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/services/speech"
        keywords={pageKeywords.speech}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/services/speech",
            title,
            description,
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Speech Services", path: "/services/speech" },
          ]),
          createServicePageSchema({
            name: "Speech Services",
            path: "/services/speech",
            description,
            sections: speechServiceSections,
          }),
        ]}
      />
      <ServiceCategoryPage
        pageClassName="speech-services"
        title="Speech Services"
        subtitle="Our speech-language services are organized to support accurate evaluation, targeted therapy planning, and meaningful communication progress across every age group."
        serviceType="speech"
        sections={speechServiceSections}
      />
    </>
  );
}

export default SpeechServices;
