import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
  const { movieId } = useParams(); // useParams is a hook that returns an object with the params from the url
  const { state: movie, loading, error } = useMovieFetch(movieId); // movieId is passed from the parent component

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
