import React from 'react';

import classes from './Card.module.css';

const Card = props => {
  return (
    <div className={classes.Card}>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt={props.monster.name}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
