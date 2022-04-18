import React, {useEffect, useState} from 'react';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';
import request from '../api/movieDB';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
};

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>(initialState);

  const getMovies = async () => {
    const nowPlayingPromise = request<MovieDBMoviesResponse>('/now_playing');
    const popularMovies = request<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = request<MovieDBMoviesResponse>('/top_rated');
    const upComingPromise = request<MovieDBMoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularMovies,
      topRatedPromise,
      upComingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].results,
      popular: response[1].results,
      topRated: response[2].results,
      upComing: response[3].results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {...moviesState, isLoading};
};

export default useMovies;
