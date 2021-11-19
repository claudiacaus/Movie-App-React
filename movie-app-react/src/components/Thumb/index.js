import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';

// if we want to use the image as a link, we need to wrap it in a Link component, and pass the image as a prop.
const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
