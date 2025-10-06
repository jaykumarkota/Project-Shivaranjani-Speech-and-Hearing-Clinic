import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import MainLayout from './Layouts/MainLayout';
import HearingServices from "./pages/HearingServices";
import SpeechServices from "./pages/SpeechServices";
import BookServices from "./components/FormSection";
// import Services from "./pages/Services";

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/location" element={<Location />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}


        {/* services pages */}
        {/* <Route path="/services" element={<Services />} /> */} {/* optional */}
        <Route path="/services/hearing" element={<HearingServices />} />
        <Route path="/services/speech" element={<SpeechServices />} />
        <Route path="/services/book" element={<BookServices />} />
      </Route >
      {/* <Route path="*" element={<h2>404 – Page Not Found</h2>} /> */}
    </Routes>

  )
}

export default App
