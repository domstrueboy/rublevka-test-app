import React from 'react';
import './Card.css';

import ago from '../../Functions/ago';

const Card = (props) => {

  const card = props.card;

  card.priceFormatted = card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  card.ago = ago(card.date);
  
  return (
    <article className="card">
      <div className="card__images">
        {
          card.exampleImages.map((image, index) =>
            <img
              src={image}
              alt={`house-${index}`}
              key={`${card.id}-${index}`}
              className="card__image"
            />)
        }
      </div>
      <div className="card__tags">
        <div className="card__tag">{card.type}</div>
        <div className="card__tag">{card.furnishType}</div>
      </div>
      <p className="card__price">{`${card.currency} ${card.priceFormatted}`}</p>
      <p className="card__square">{`${card.square} м`}<sup>2</sup></p>
      <p className="card__posted">{`${card.ago}`}</p>
    </article>
  );
}

export default Card;