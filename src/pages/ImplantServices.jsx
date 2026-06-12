import ServiceCategoryPage from "../components/ServiceCategoryPage";
import { implantServiceSections } from "../data/serviceCatalog";

function ImplantServices() {
  return (
    <ServiceCategoryPage
      pageClassName="implant-services"
      title="Implant Services"
      subtitle="Our implant pathway brings together solution planning, technical follow-up, and structured rehabilitation so patients and families receive support beyond the procedure itself."
      serviceType="implant"
      sections={implantServiceSections}
    />
  );
}

export default ImplantServices;
