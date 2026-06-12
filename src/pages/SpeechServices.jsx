import ServiceCategoryPage from "../components/ServiceCategoryPage";
import { speechServiceSections } from "../data/serviceCatalog";

function SpeechServices() {
  return (
    <ServiceCategoryPage
      pageClassName="speech-services"
      title="Speech Services"
      subtitle="Our speech-language services are organized to support accurate evaluation, targeted therapy planning, and meaningful communication progress across every age group."
      serviceType="speech"
      sections={speechServiceSections}
    />
  );
}

export default SpeechServices;
