import Seo from "../components/Seo";
import LocationSection from "../components/Location";
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createWebPageSchema,
  pageKeywords,
} from "../data/seo";

function Location() {
  const title =
    "Speech & Hearing Clinic Location in Peerzadiguda, Uppal, Hyderabad";
  const description =
    "Find Shivaranjani Speech & Hearing Clinic in Peerzadiguda, Uppal, Hyderabad for speech therapy, audiology services, hearing tests, hearing aids, and implant rehabilitation.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/location"
        keywords={pageKeywords.location}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/location",
            title,
            description,
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Location", path: "/location" },
          ]),
        ]}
      />
      <LocationSection headingLevel="h1" />
    </>
  );
}

export default Location;
