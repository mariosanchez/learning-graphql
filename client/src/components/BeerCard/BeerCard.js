import React from 'react';
import './BeerCard.css';

const BeerCard = ({ name, picture, brewery, reviewer }) => (
  <article className="BeerCard">
    {picture && <img src={picture} alt={name} />}
    <h2>{name}</h2>
    {brewery && <h3>{brewery.name}</h3>}
    <p>{reviewer && <small>Reviewed by {reviewer.name}</small>}</p>
  </article>
);

export default BeerCard;
