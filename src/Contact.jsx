import React, { useState, useRef } from 'react';
import Navbar from './component/Navbar';
import { gsap } from 'gsap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


    


const Contact = () => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current section index
  const containerRef = useRef(null); // Reference to the horizontal scroll container

  const handleInputChange = () => {
    const inputs = document.querySelectorAll('.ContactInput, .ContactInput1');
    let filledCount = 0;

    inputs.forEach(input => {
      if (input.value.trim() !== '') {
        filledCount += 1;
      }
    });

    const totalInputs = inputs.length;
    const newProgress = (filledCount / totalInputs) * 100;
    setProgress(newProgress);
  };
  const handleInputChangeTwo = () => {
    const inputs = document.querySelectorAll('.ContactInput2, .ContactInput3');
    let filledCount = 0;

    inputs.forEach(input => {
      if (input.value.trim() !== '') {
        filledCount += 1;
      }
    });

    const totalInputs = inputs.length;
    const newProgress = (filledCount / totalInputs) * 100;
    setProgress(newProgress);
  };

  const handleNextClick = () => {
    const sections = document.querySelectorAll('.ContactSection');
    if (currentIndex < sections.length - 1) {
      const nextIndex = currentIndex + 1;
      const offset = nextIndex * window.innerWidth; // Calculate the horizontal offset
      gsap.to(containerRef.current, { x: -offset, duration: 1, ease: 'power2.out' }); // Animate the scroll
      setCurrentIndex(nextIndex); // Update the index
      setProgress(0); // Reset the progress
    }
    
  };

  return (
    <>
      <Navbar />
      <div className="ContactParentDiv">
        <div className="HorizontalScrollContainer" ref={containerRef}>
          <div className="ContactSection">
            <div className="ContactTitleDiv">
              <div className="ContactTitle">Contact Form</div>
            </div>
            <div className="ContactFormProgress">
              <div
                className="firstProgressDiv"
                style={{
                  background: `linear-gradient(to right, #232323 ${progress}%, #AEADA9 ${progress}%)`,
                  width: '230px',
                }}
              ></div>
              <div className="secondProgressDiv"></div>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="ContactInput"
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="ContactInput1"
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="ContactInput1"
              onChange={handleInputChange}
            />
          </div>
          <div className="ContactSection">
            <div className="ContactTitleDiv">
                <div className="ContactTitle">Contact Form</div>
            </div>
            <div className="ContactFormProgress">
                <div
                  className="firstProgressDiv"></div>
                <div className="secondProgressDiv"
                style={{
                    background: `linear-gradient(to right, #232323 ${progress}%, #AEADA9 ${progress}%)`,
                    width: '230px',
                  }}></div>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="ContactInput3"
              onChange={handleInputChangeTwo}
            />
            <input
              type="text"
              placeholder="Message"
              className="ContactInput2"
              onChange={handleInputChangeTwo}
            />
          </div>
          <div className="ContactSection">
                  <div className='BigBlackCircle'>
                    <video src='../Images/Main Scene.webm'  
                    autoPlay 
                    muted 
                    loop 
                    playsInline  
                    width="75%" height="75%"
                    />
                    
                  </div>
          </div>
        </div>

          
        
        <div className="NextButtonDiv" onClick={handleNextClick}>
          {currentIndex === 2 ? 'Done' : 'Next'}
        </div>
        
      </div>
    </>
  );
};

export default Contact;
