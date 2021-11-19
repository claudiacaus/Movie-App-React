import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState); // state is the data that we are fetching from the API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(false);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prevState) => ({
        ...movies,
        results:
          page > 1
            ? [...prevState.results, ...movies.results]
            : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial and search. Will run on the first render, and then every time the page is refreshed
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm); // 1st page and searchTerm
  }, [searchTerm]);

  // Loading more movies, when clicking on the button
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm); // next page
    setIsLoadingMore(false); // reset
  }, [isLoadingMore, searchTerm, state.page]); // always specify the dependencies

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
