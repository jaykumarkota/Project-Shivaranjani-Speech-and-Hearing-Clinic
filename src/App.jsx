import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import MainLayout from "./Layouts/MainLayout";
import HearingServices from "./pages/HearingServices";
import SpeechServices from "./pages/SpeechServices";
import ImplantServices from "./pages/ImplantServices";
import BookAppointment from "./pages/BookAppointment";
import Location from "./pages/Location";
import AboutDoctor from "./pages/AboutDoctor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/doctor" element={<AboutDoctor />} />
        <Route
          path="/about/about-docter"
          element={<Navigate to="/about/doctor" replace />}
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/hearing" element={<HearingServices />} />
        <Route path="/services/speech" element={<SpeechServices />} />
        <Route path="/services/implants" element={<ImplantServices />} />
        <Route path="/services/book" element={<BookAppointment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
