import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';
function Navbar() {
  console.log(assets)
  return (
    <header className="navbar">
      <div className="logo">
        <img src={assets.clinic_logo} alt="logo" className="logo-image" />
        <h2>Shivaranjani<br />Speech&Hearing<br />Clinic</h2>
      </div>
      <ul className="navlinks">
        <li className="navlink"><NavLink to="/">Home</NavLink></li>
        <li className="navlink"><NavLink to="/about">About</NavLink></li>
        <li className="navlink"><NavLink to="/services">Services</NavLink></li >
        <li className="navlink"><NavLink to="/location">Location</NavLink></li >
        <li className="navlink"><NavLink to="/contact">Contact</NavLink></li >
      </ul >
    </header >
  );
}
export default Navbar;