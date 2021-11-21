import { useState, useEffect } from 'react';
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

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

    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]); // this is the array of dependencies that we want to watch for changes

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state)); // write to sessionStorage only if searchTerm is empty (initial state)
  }, [state, movieId]);

  return { state, loading, error };
};
