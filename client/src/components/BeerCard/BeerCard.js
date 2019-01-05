import React from 'react';
import './BeerCard.css';

const BeerCard = ({ name, picture, brewery, reviewer }) => (
  <article className="BeerCard">
    <img src={picture} alt={name} />
    <h2>{name}</h2>
    <h3>{brewery.name}</h3>
    <p>
      <small>Reviewed by {reviewer.name}</small>
    </p>
  </article>
);

export default BeerCard;
