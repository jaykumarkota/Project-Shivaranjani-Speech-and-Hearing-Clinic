import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
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
    </div>
  );
}
export default MainLayout;