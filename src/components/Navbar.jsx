import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';
import '../styles/components/Navbar.css'
import { FaBars } from "react-icons/fa6";
function Navbar() {

  return (
    <nav className="navbar container">
      <div className="logo">
        <img src={assets.clinic_logo} alt="logo" className="logo-img" />
        <h2 className='logo-title'>Shivaranjani<br />Speech & Hearing Clinic</h2>
      </div>
      <ul className="navlinks">
        <li><NavLink className="navlink" to="/">Home</NavLink></li>
        <li><NavLink className="navlink" to="/about">About</NavLink></li>
        <li><NavLink className="navlink" to="/services">Services</NavLink></li >
        <li><NavLink className="navlink" to="/location">Location</NavLink></li >
        <li><NavLink className="navlink" to="/contact">Contact</NavLink></li >
        <li className="nav-line"></li>
        <li><button className='book-btn btn'>Book now</button></li>
      </ul >
      <button className="nav-ham-menu"><FaBars /></button>
    </nav>
  );
}
export default Navbar;