import React from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import FontAwesome icons
import '../styles/footer.css'
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png'
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">

        <NavLink to="/"><img src={Logo} alt="" className='logoDesign'/></NavLink>
        <p className="footer-links">
          <NavLink to="/home"  className="link-1">Home</NavLink>
          <NavLink to="/items/fruits">Fruits</NavLink>
          <NavLink to="/items/vegetables">vegetable</NavLink>
          <NavLink to="/">Faq</NavLink>
          <NavLink to="/">Contact</NavLink>
        </p>
        <h4> All rights reserved <span>Farmify</span> © 2024</h4>

      </div>

      <div className="footer-center">
        <h4>Contact us</h4>
        <div className='contact'>
          <FaPhone className='icon' />
          <p>+91 70699 94163</p>
        </div>
        <div className='contact'>
          <FaEnvelope className='icon' />
          <p><NavLink to="mailto:support@company.com">support@farmify.com</NavLink></p>
        </div>
        <div className="footer-icons">
          <NavLink to="#"><FaFacebook /></NavLink>
          <NavLink to="#"><FaTwitter /></NavLink>
          <NavLink to="#"><FaLinkedin /></NavLink>
          <NavLink to="#"><FaGithub /></NavLink>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Our company is committed to providing the freshest and highest quality fruits and vegetables directly from local farms to your doorstep. We believe in supporting local farmers and promoting healthy eating habits within our community.
        </p>
       
      </div>
    </footer>
  );
}

export default Footer;
