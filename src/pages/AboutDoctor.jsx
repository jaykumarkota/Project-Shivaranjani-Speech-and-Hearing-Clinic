import Seo from "../components/Seo";
import AboutDocter from "../components/AboutPage/AboutDocter";
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createWebPageSchema,
  pageKeywords,
} from "../data/seo";

function AboutDoctor() {
  const title =
    "Dr. Shivaranjani | Audiologist, Implant Audiologist and Speech-Language Therapist in Hyderabad";
  const description =
    "Read about Dr. Shivaranjani, the audiologist, implant audiologist, and speech-language therapist behind Shivaranjani Speech & Hearing Clinic in Hyderabad.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/about/doctor"
        keywords={pageKeywords.aboutDoctor}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/about/doctor",
            title,
            description,
            type: "ProfilePage",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Dr. Shivaranjani", path: "/about/doctor" },
          ]),
        ]}
      />
      <AboutDocter />
    </>
  );
}

export default AboutDoctor;
