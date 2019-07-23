import React from 'react';

import classes from './CardList.module.css';
import Card from '../ Card/Card';

const CardList = props => {
  return (
    <div className={classes.CardList}>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
