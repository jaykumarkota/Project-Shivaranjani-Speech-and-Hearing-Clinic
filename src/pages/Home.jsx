import MiniAbout from "../components/MiniAbout";
import ServicesList from "../components/ServicesList";
import Slider from "../components/Slider";
import ModalWrapper from "../components/ModalWrapper";
import FormSection from "../components/FormSection";
function Home() {
  return (
    <>
      <ModalWrapper />
      <ServicesList />
      <Slider />
      <MiniAbout />
      <FormSection />
    </>
  )
}
export default Home;