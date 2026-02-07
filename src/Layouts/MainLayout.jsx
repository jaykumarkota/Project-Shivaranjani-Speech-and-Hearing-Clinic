import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import FloatingContactButton from "../components/FloatingContactButton";
import "../styles/Layouts/MainLayout.css"

function MainLayout() {

  return (
    <div className="layout-container">
      <header>
        <Navbar />
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTopButton />
      <FloatingContactButton />
    </div>
  );
}
export default MainLayout;