import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTopOnRouteChange from "../components/ScrollToTopOnRouteChange";
import FloatingContactButton from "../components/FloatingContactButton";
import "../styles/Layouts/MainLayout.css"

function MainLayout() {

  return (
    <div className="layout-container">
      <ScrollToTopOnRouteChange />
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
