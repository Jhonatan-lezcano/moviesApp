import React, {useEffect, useState} from 'react';
import request from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {CreditsResponse, Cast} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

const initialState = {
  isLoading: true,
  movieFull: undefined,
  cast: [],
};

const useMovieDetail = (id: number) => {
  const [state, setState] = useState<MovieDetails>(initialState);

  useEffect(() => {
    (async () => {
      const movieDetailPromise = request<MovieFull>(`/${id}`);
      const castPromise = request<CreditsResponse>(`/${id}/credits`);

      const [moviewDetailRes, castRes] = await Promise.all([
        movieDetailPromise,
        castPromise,
      ]);

      setState({
        isLoading: false,
        movieFull: moviewDetailRes,
        cast: castRes.cast,
      });
    })();
  }, []);

  return {
    ...state,
  };
};

export default useMovieDetail;
