import React from "react";

export const Image = ({images}) => (
    <h1>
        {images.map(image => (
          <img src={image['large']} alt="Anime"></img>
      ))}
    </h1>
);
