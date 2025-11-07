import MiniAbout from "../components/MiniAbout";
import ServicesList from "../components/ServicesList";
import Slider from "../components/Slider";
import ModalWrapper from "../components/ModalWrapper";
import FormSection from "../components/FormSection";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/Faq";
import Location from "../components/Location";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <ModalWrapper />
      <ServicesList />
      <Slider />
      <Services />
      <MiniAbout />
      <FormSection />
      <Testimonial />
      <FAQ />
      <Location />
    </>
  )
}
export default Home;