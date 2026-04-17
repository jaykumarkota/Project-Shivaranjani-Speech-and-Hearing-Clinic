import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import MainLayout from "./Layouts/MainLayout";
import HearingServices from "./pages/HearingServices";
import SpeechServices from "./pages/SpeechServices";
import ImplantServices from "./pages/ImplantServices";
import BookServices from "./components/FormSection";
import Location from "./components/Location";
import AboutDocter from "./components/AboutPage/AboutDocter";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/about-docter" element={<AboutDocter />} />
        <Route path="/services/hearing" element={<HearingServices />} />
        <Route path="/services/speech" element={<SpeechServices />} />
        <Route path="/services/implants" element={<ImplantServices />} />
        <Route path="/services/book" element={<BookServices />} />
      </Route>
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
