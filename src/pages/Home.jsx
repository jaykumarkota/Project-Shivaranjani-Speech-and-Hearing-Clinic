import Seo from "../components/Seo";
import MiniAbout from "../components/MiniAbout";
import ServicesList from "../components/ServicesList";
import Slider from "../components/Slider";
import ModalWrapper from "../components/ModalWrapper";
import FormSection from "../components/FormSection";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import Location from "../components/Location";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createMedicalClinicSchema,
  createOfferCatalogSchema,
  createWebPageSchema,
  createWebSiteSchema,
  pageKeywords,
} from "../data/seo";

function Home() {
  const title =
    "Speech & Hearing Clinic in Uppal, Hyderabad | Hearing Tests, Speech Therapy & Hearing Aids";
  const description =
    "Shivaranjani Speech & Hearing Clinic in Peerzadiguda, Uppal, Hyderabad provides hearing tests, speech therapy, hearing aids, cochlear implant support, auditory training, AVT, and speech-language care for children and adults.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/"
        keywords={pageKeywords.home}
        jsonLd={[
          createWebSiteSchema(),
          createMedicalClinicSchema(),
          createWebPageSchema({
            path: "/",
            title,
            description,
          }),
          createBreadcrumbSchema([{ name: "Home", path: "/" }]),
          createFaqSchema(),
          createOfferCatalogSchema(),
        ]}
      />
      <h1 className="sr-only">
        Shivaranjani Speech & Hearing Clinic in Peerzadiguda, Uppal, Hyderabad
        for speech therapy, hearing tests, hearing aids, and implant
        rehabilitation
      </h1>
      <ModalWrapper />
      <ServicesList />
      <Slider />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <MiniAbout />
      <FormSection />
      <Testimonial />
      <FAQ />
      <Location />
    </>
  );
}

export default Home;
