import MiniAbout from "../components/MiniAbout";
import ServicesList from "../components/ServicesList";
import Slider from "../components/Slider";
import ModalWrapper from "../components/ModalWrapper";
import FormSection from "../components/FormSection";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <ModalWrapper />
      <ServicesList />
      <Slider />
      <MiniAbout />
      <FormSection />
      <Testimonial />
      <FAQ />
    </>
  )
}
export default Home;