import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import PropetiesCard from './PropetiesCard';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const HandleAllPeojects = () => {
    navigate("/allprojects");
  }

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current,
      { x: '100vw' }, // Start from the right side (off-screen)
      {
        x: 0, // Move to its original position
        ease: 'power2.out', // Smooth easing
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top center', // Trigger when the top of the element hits the center of the viewport
          end: 'center-=40 center', // End when the center of the element reaches the center of the viewport
          scrub: false, // Scrub the animation with scroll
          markers: false, // Disable markers
        },
        onComplete: () => {
          // Set loading to true when the animation completes
          setLoading(true);
        }
      }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects - Prime Heaven Developers</title>
        <meta name="description" content="Explore our latest projects at Prime Heaven Developers." />
      </Helmet>
      <div
        ref={projectsRef}
        className='projectsParentDiv'
        id='projects'
      >
        <div className='projectsTitleDiv'>
          <div className='projectsTitle'>Projects</div>
          <div className='projectsAll' onClick={HandleAllPeojects}>All projects</div>
        </div>
        <div className='projectspPropertyParentDiv'>
          <div></div>
          <div className='PropertiesList'>
            <PropetiesCard image={'../Images/ImageofPropertyOne.png'} loading={loading} />
            <PropetiesCard image={'../Images/wendy-liga-aSlIN-fhKKU-unsplash 1.png'} loading={loading} />
            <PropetiesCard image={'../Images/yohan-marion-bLrOryDe8V0-unsplash 1.png'} loading={loading} />
          </div>
          <div></div>
        </div>
      </div>
      <div className='projectsMobileDiv'>
        <div className='projectsMobileTitle'>Projects</div>
        <div className='projectsMobilePropertyList'>
          <PropetiesCard image={'../Images/ImageofPropertyOne.png'} loading={true} />
          <PropetiesCard image={'../Images/wendy-liga-aSlIN-fhKKU-unsplash 1.png'} loading={true} />
          <PropetiesCard image={'../Images/yohan-marion-bLrOryDe8V0-unsplash 1.png'} loading={true} />
        </div>
      </div>
    </>
  );
};

export default Projects;
