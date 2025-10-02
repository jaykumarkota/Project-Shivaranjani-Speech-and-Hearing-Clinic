import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import "../styles/components/Navbar.css";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      if (isMobile && !isMenuOpen) {
        navRef.current.setAttribute("inert", "");
      } else {
        navRef.current.removeAttribute("inert");
      }
    }
  }, [isMenuOpen, isMobile]);

  return (
    <nav className="navbar container">
      <div className="logo">
        <img src={assets.clinic_logo} alt="logo" className="logo-img" />
        <h2 className="logo-title">
          Shivaranjani
          <br />
          Speech & Hearing Clinic
        </h2>
      </div>
      <ul
        id="navlinks"
        className={`navlinks ${isMenuOpen ? "show" : ""}`}
        ref={navRef}
        aria-hidden={isMobile && !isMenuOpen}
      >
        {isMobile && (
          <li>
            <button
              className="nav-ham-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="close navbar"
            >
              <FaXmark />
            </button>
          </li>
        )}
        <li>
          <NavLink
            className="navlink"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            to="/services"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            to="/location"
            onClick={() => setIsMenuOpen(false)}
          >
            Location
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        {!isMobile && <li className="nav-line"></li>}
        <li>
          <Link
            className="book-btn btn"
            onClick={() => setIsMenuOpen(false)}
            to="/services/book"
          >
            Book now
          </Link>
        </li>
      </ul>
      {isMobile && isMenuOpen && (
        <div
          id="overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      {isMobile && (
        <button
          className="nav-ham-menu"
          onClick={() => setIsMenuOpen(true)}
          aria-label="open navbar"
          aria-expanded={isMenuOpen}
          aria-controls="navlinks"
        >
          <FaBars />
        </button>
      )}
    </nav>
  );
}
export default Navbar;
