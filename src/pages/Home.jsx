import MiniAbout from "../components/MiniAbout";
import ServicesList from "../components/ServicesList";
import Slider from "../components/Slider";
import ModalWrapper from "../components/ModalWrapper";
import FormSection from "../components/FormSection";
import Testimonial from "../components/Testimonial";
function Home() {
  return (
    <>
      <ModalWrapper />
      <ServicesList />
      <Slider />
      <MiniAbout />
      <FormSection />
      <Testimonial />
      <FormSection />
    </>
  )
}
export default Home;