import Seo from "../components/Seo";
import AboutHero from "../components/AboutPage/AboutHero";
import AboutDesc from "../components/AboutPage/AboutDesc";
import Gallery from "../components/Gallery";
import {
  createBreadcrumbSchema,
  createMedicalClinicSchema,
  createWebPageSchema,
  pageKeywords,
} from "../data/seo";

function About() {
  const title = "About Shivaranjani Speech & Hearing Clinic in Hyderabad";
  const description =
    "Learn about Shivaranjani Speech & Hearing Clinic in Peerzadiguda, Uppal, Hyderabad and our evidence-based approach to audiology, speech therapy, hearing aids, and implant rehabilitation.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/about"
        keywords={pageKeywords.about}
        jsonLd={[
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/about",
            title,
            description,
            type: "AboutPage",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutHero />
      <AboutDesc />
      <Gallery />
    </>
  );
}

export default About;
