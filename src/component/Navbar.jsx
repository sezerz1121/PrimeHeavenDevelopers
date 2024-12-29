import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToProjects = () => {
    navigate("/allprojects");
  };

  const redirectToContact = () => {
    navigate("/contact");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='NavbarParentDiv'>
        <div className='NavbarInnerDiv'>
          <div className='NavbarLogoDiv' onClick={redirectToHome}>
            <img src='../Images/Logo.png' alt="Logo" className='NavLogo'/>
            <img src='../Images/logomob.png' alt="Logo" className='NavMobLogo'/>
          </div>
          <div className='NavbarLinksDiv'>
            <div className='NavbarLinks LinkOne'>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </div>
            <div className='NavbarLinks LinkTwo' >
              Projects
            </div>
            <div className='NavbarLinks LinkThree'>
              <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
            </div>
          </div>
          <div className='NavbarContactDiv' >
            <div className='NavbarContactDivText' >Contact</div>
          </div>
          <div className='MobileNavbarMenuIcon' onClick={toggleMobileMenu}>
            <RxHamburgerMenu className='Navburger'/>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='MobileNavbarLinksDiv'>
            <div className='MobileNavbarLinks' >Home</div>
            <div className='MobileNavbarLinks' >Projects</div>
            <div className='MobileNavbarLinks' >Contact</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
