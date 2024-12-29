import React, { useState } from 'react';
import Navbar from './component/Navbar';
import { FaHouse } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import Select from 'react-select';
import AllPropertyCard from './component/AllPropertyCard';

const AllProjects = () => {
  const [budget, setBudget] = useState('70 Lacs');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const budgetOptions = [
    { value: '40 Lacs', label: 'Upto 40 Lacs' },
    { value: '50 Lacs', label: 'Upto 50 Lacs' },
    { value: '70 Lacs', label: 'Upto 70 Lacs' },
    { value: '1 Crore', label: 'Upto 1 Crore' },
  ];

  const handleCardClick = (property) => {
    setSelectedProperty(property);
  };

  return (
    <>
      <Navbar />
      <div className='parentFilterDiv'>
        <div className='AllProjectsParentDiv'>
          <div className='ProjecsFilterDiv'>
            <div className='ProjectsTitle'>Project</div>
            <div className='Property-type'>
              <div className='Property-typeTitle'>Property type</div>
              <div className='Property-typeOptions'>
                <div className='PropertyTypeCard'><GiFamilyHouse />Villas</div>
                <div className='PropertyTypeCard'><FaHouse />House</div>
                <div className='PropertyTypeCard'><FaBuilding />Flat</div>
                <div className='PropertyTypeCard'><FaHouse />Plot</div>
              </div>
            </div>
            <div className='Location'>
              <div className='LocationTitle'>Location</div>
              <input className='LocationInput' placeholder="Enter City, Locality, Project" />
            </div>
            <div className='Budget'>
              <div className='BudgetTitle'>Price range</div>
              <Select
                options={budgetOptions}
                defaultValue={{ value: '70 Lacs', label: 'Upto 70 Lacs' }}
                onChange={(option) => setBudget(option.value)}
                className="dropdown1"
              />
            </div>
            <div className='Bedrooms'>
              <div className='BedroomsTitle'>Bedrooms</div>
              <div className='BedroomsOptions'>
                <div className='BedroomsCard'>1</div>
                <div className='BedroomsCard'>2</div>
                <div className='BedroomsCard'>3</div>
                <div className='BedroomsCard'>4</div>
              </div>
            </div>
          </div>
          <div className='propertyCard'>
            <AllPropertyCard
              imageUrl={'../Images/wendy-liga-aSlIN-fhKKU-unsplash 1.png'}
              title={'Property One'}
              description={'This is a description of property one'}
              price={'42 lacs'}
              Bhk={'3 BHK'}
              onCardClick={handleCardClick}
            />
            <AllPropertyCard
              imageUrl={'../Images/yohan-marion-bLrOryDe8V0-unsplash 1.png'}
              title={'Property Two'}
              description={'This is a description of property two'}
              price={'52 lacs'}
              Bhk={'2 BHK'}
              onCardClick={handleCardClick}
              />
              <AllPropertyCard
              imageUrl={'../Images/ImageofPropertyOne.png'} 
              title={'Property Three'}
              description={'This is a description of property three'}
              price={'62 lacs'}
              Bhk={'1 BHK'}
              onCardClick={handleCardClick}
            />
          </div>
          <div className='PropertyDetails'>
            {selectedProperty ? (
              <>
                <img className='PropertyDetailsImage' src={selectedProperty.imageUrl} alt="Property" />
                <div className='propertyName'>{selectedProperty.title}</div>
                <div className='propertyDesc'>{selectedProperty.description}</div>
                <div className='propertyPrice'>₹ {selectedProperty.price}</div>
                <div className='propertybookButton'>Book now</div>
              </>
            ) : (
              <div className='noSelection'>Select a property to view details</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
