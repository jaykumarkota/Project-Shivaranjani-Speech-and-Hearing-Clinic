import ServiceCategoryPage from "../components/ServiceCategoryPage";
import { hearingServiceSections } from "../data/serviceCatalog";

function HearingServices() {
  return (
    <ServiceCategoryPage
      pageClassName="hearing-services"
      title="Hearing Services"
      subtitle="Our hearing team combines diagnostic precision, technology support, and rehabilitation planning to help children and adults hear more clearly and communicate with confidence."
      serviceType="hearing"
      sections={hearingServiceSections}
    />
  );
}

export default HearingServices;
