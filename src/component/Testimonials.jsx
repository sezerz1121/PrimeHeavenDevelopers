import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import PropetiesCard from './PropetiesCard';
import TestimonialCard from './TestimonialCard';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const projectsRef = useRef(null);
  const [loading, setLoading] = useState(false);

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
<div
      ref={projectsRef}
      className='projectsParentDiv'
      id='testimonials'
    >
      <div className='projectsTitleDiv'>
        <div className='projectsTitle'>Testimonial</div>
       
      </div>
      <div className='projectspPropertyParentDiv'>
        <div></div>
        <div className='PropertiesList'>
         <TestimonialCard image={'./Images/Frame 110.png'} name={'Arun Sharma'} peofession={'Business Owner'} Review={'PrimeHaven made buying our dream home so simple and stress-free! The team was incredibly helpful and transparent throughout the process.'}/>
         <TestimonialCard image={'./Images/Frame 112.png'} name={'Sonal Verma'} peofession={'Freelance Designer'} Review={'Finding a property within my budget felt impossible, but PrimeHaven made it happen. Highly recommend them!'}/>
         <TestimonialCard image={'./Images/Frame 114.png'} name={'Rajesh Khanna'} peofession={'Retired Banker'} Review={'PrimeHaven helped me find the perfect legacy property for my family. Their professionalism and attention to detail were outstanding.'}/>
        </div>
        <div></div>
      </div>
      
    </div>
    <div className='TestimonialMobileParentDiv' >
        <div className='TestimonialMobileTitle'>Testimonial</div>
        <div className='TestimonialMobilePropertiesList'>
        <TestimonialCard image={'./Images/Frame 110.png'} name={'Arun Sharma'} peofession={'Business Owner'} Review={'PrimeHaven made buying our dream home so simple and stress-free! The team was incredibly helpful and transparent throughout the process.'}/>
         <TestimonialCard image={'./Images/Frame 112.png'} name={'Sonal Verma'} peofession={'Freelance Designer'} Review={'Finding a property within my budget felt impossible, but PrimeHaven made it happen. Highly recommend them!'}/>
         <TestimonialCard image={'./Images/Frame 114.png'} name={'Rajesh Khanna'} peofession={'Retired Banker'} Review={'PrimeHaven helped me find the perfect legacy property for my family. Their professionalism and attention to detail were outstanding.'}/>
        </div>
    </div>
</>
    
  );
};

export default Testimonials;
