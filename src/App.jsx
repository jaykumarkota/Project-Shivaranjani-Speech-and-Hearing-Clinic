import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import MainLayout from './Layouts/MainLayout';
function App() {

  return (

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/location" element={<Location />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route >
      {/* <Route path="*" element={<h2>404 – Page Not Found</h2>} /> */}
    </Routes>

  )
}

export default App
