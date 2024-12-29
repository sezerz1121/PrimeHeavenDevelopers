import React from 'react';

const AllPropertyCard = (props) => {
  const handleClick = () => {
    props.onCardClick({
      imageUrl: props.imageUrl,
      title: props.title,
      description: props.description,
      price: props.price,
      Bhk: props.Bhk,
    });
  };

  return (
    <div className="property-card" onClick={handleClick}>
      <img src={props.imageUrl} className="property-card-image" alt="Property" />
      <div className="property-card-content">
        <h2 className="property-card-title">{props.title}</h2>
        <p className="property-card-description">{props.description}</p>
        <div className="property-card-Price">{props.price}</div>
        <p className="property-card-Bhk">{props.Bhk}</p>
      </div>
    </div>
  );
};

export default AllPropertyCard;
