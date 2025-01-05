import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='FooterParentDiv'>
        <div className='FooterHeading'><div>Let’s Plan Your Dream Home—<span className='FooterHeadingPart2'>Get in Touch Today!</span></div></div>
        <div className='FooterBottom'>
            <div><img src='./Images/LOGOPRIMEHEAVEN.png' alt='Prime Heaven Developers Logo'/></div>
            <div className='FooterBottomText'>
                 <div className='FooterBottomTextDiv' >
                    <div className='FooterBottomTextTitle'>Pages</div>
                    <div className='FooterBottomTextPages'><Link to="home" smooth={true} duration={500}>Home</Link></div>
                    <div className='FooterBottomTextPages'> <Link to="projects" smooth={true} duration={500}>Projects</Link></div>
                    <div className='FooterBottomTextPages'>  <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></div>
                 </div>
                 <div className='FooterBottomTextDiv' >
                    <div className='FooterBottomTextTitle'>Resources</div>
                    <div className='FooterBottomTextPages'>Blog</div>
                    <div className='FooterBottomTextPages'>FAQ</div>
                    <div className='FooterBottomTextPages'>Help Center</div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
