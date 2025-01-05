import React, { useState } from 'react';
import Select from 'react-select';
import { MdSearch } from "react-icons/md";
import { Helmet } from "react-helmet";

const SearchArea = () => {
  // State Management
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('Flat');
  const [budget, setBudget] = useState('70 Lacs');

  // Options for Dropdowns
  const propertyOptions = [
    { value: 'Flat', label: 'Flat' },
    { value: 'House', label: 'House' },
    { value: 'Plot', label: 'Plot' },
    { value: 'Villas', label: 'Villas' },
  ];

  const budgetOptions = [
    { value: '40 Lacs', label: 'Upto 40 Lacs' },
    { value: '50 Lacs', label: 'Upto 50 Lacs' },
    { value: '70 Lacs', label: 'Upto 70 Lacs' },
    { value: '1 Crore', label: 'Upto 1 Crore' },
  ];

  // Submit Handler
  const handleSearch = () => {
    alert(`Searching for ${propertyType} in ${city} within ${budget}`);
    setCity('');
    setPropertyType('Flat');
    setBudget('70 Lacs');
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'transparent', // Optional: For a cleaner look
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#000', // Optional: Customize dropdown indicator color
    }),
    indicatorSeparator: () => ({
      display: 'none', // Removes the separator between dropdown and input
    }),
  };

  return (
    <>
      <Helmet>
        <title>Search Properties - Prime Heaven Developers</title>
        <meta name="description" content="Search for properties in your desired city, locality, or project with Prime Heaven Developers." />
      </Helmet>
      <div className='SearchAreaParentDiv' id='home'>
        <div className='SearchButon'><MdSearch className='searchIconMob' alt="Search Icon" />Search</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder={"Enter City, Locality, Project"}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <div className='bar'></div>

          <Select
            options={propertyOptions}
            defaultValue={{ value: 'Flat', label: 'Flat' }}
            onChange={(option) => setPropertyType(option.value)}
            className="dropdown"
            styles={customStyles}
          />
          <div className='bar'></div>
          <Select
            options={budgetOptions}
            defaultValue={{ value: '70 Lacs', label: 'Upto 70 Lacs' }}
            onChange={(option) => setBudget(option.value)}
            className="dropdown"
            styles={customStyles}
          />

          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchArea;