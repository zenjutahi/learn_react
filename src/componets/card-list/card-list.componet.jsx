import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
  return (
  <div className="card-list">
    {props.animes.map(anime => (
      <Card key={anime.mal_id} anime={anime}/>
      ))}
  </div>
  )
}
