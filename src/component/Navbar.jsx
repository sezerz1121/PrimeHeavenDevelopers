import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Prime Heaven Developers - Your Trusted Development Partner</title>
        <meta name="description" content="Prime Heaven Developers offers top-notch development services for your projects. Contact us to learn more about our services and testimonials." />
      </Helmet>
      <div className='NavbarParentDiv'>
        <div className='NavbarInnerDiv'>
          <div className='NavbarLogoDiv' onClick={redirectToHome}>
            <img src='../Images/Logo.png' alt="Prime Heaven Developers Logo" className='NavLogo'/>
            <img src='../Images/logomob.png' alt="Prime Heaven Developers Mobile Logo" className='NavMobLogo'/>
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
