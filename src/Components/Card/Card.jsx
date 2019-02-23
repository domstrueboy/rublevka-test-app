import React from 'react';
import './Card.css';

const Card = (props) => {
    try {
      return (
        <div>
          <p key={props.card.id}>
            <img src={props.card.exampleImages[0]} alt="myHouse"/>
          </p>
        </div>
      );
    } catch (err) {
      return (
        <div>Blank Page</div>
      );
    }
}

export default Card;