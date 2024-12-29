import React, { useState, useRef } from 'react';
import Navbar from './component/Navbar';
import { gsap } from 'gsap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Select from 'react-select';

    


const Book = () => {
const [propertyType, setPropertyType] = useState('Reason for Appointment');

  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current section index
  const containerRef = useRef(null); // Reference to the horizontal scroll container

  const propertyOptions = [
    { value: 'Flat Tour', label: 'Flat Tour' },
    { value: 'Pricing Discussion', label: 'Pricing Discussion' },
    { value: 'General Inquiry', label: 'General Inquiry' },
    
  ];



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

  const customStyles = {
    control: (base) => ({
        ...base,
        border: '#AEADA9 solid 1px',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'transparent',
        marginTop: '24px',
        width:'487px',
        height:'64px' // Add margin-top here
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: '#000', 
    }),
    indicatorSeparator: () => ({
        display: 'none', 
         border: '#AEADA9 solid 1px',// Removes the separator between dropdown and input
    }),
};

  
  return (
    <>
      <Navbar />
      <div className="ContactParentDiv">
        <div className="HorizontalScrollContainer" ref={containerRef}>
          <div className="ContactSection">
            <div className="ContactTitleDiv">
              <div className="ContactTitle"> Appointment Booking</div>
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
                <div className="ContactTitle"> Appointment Booking</div>
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
              type="date"
              placeholder="Subject"
              className="ContactInput3"
              onChange={handleInputChangeTwo}
            />
            <Select
            options={propertyOptions}
            defaultValue={{ value: 'Reason for Appointment', label: 'Reason for Appointment' }}
            onChange={(option) => setPropertyType(option.value)}
            styles={customStyles}
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

export default Book;
