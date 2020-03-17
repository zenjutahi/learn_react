import React from "react";
import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img src={props.anime.image_url} alt="Anime"></img>
    <h2>{props.anime.title} </h2>
    <p>Episodes {props.anime.episodes}</p>
    <p>Ratings {props.anime.score}</p>
    <p>{props.anime.synopsis}</p>
  </div>
);
