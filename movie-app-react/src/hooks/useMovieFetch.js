import { useState, useEffect } from 'react';
import API from '../API';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({}); // initial state as an empty object because we don't know what data we'll get back from the API yet
  const [loading, setLoading] = useState(true); // initial state as true because we don't know if the API call is done yet
  const [error, setError] = useState(false); // initial state as false because we don't know if there's an error

  useEffect(() => {
    //
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get directors only
        const directors = credits.crew.filter(
          (member) => member.job === 'Director',
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, [movieId]); // this is the array of dependencies that we want to watch for changes

  return { state, loading, error };
};
