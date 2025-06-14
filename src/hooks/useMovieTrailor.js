import React from 'react'
import { useDispatch } from 'react-redux'
import { addTrailorVideo } from '../utils/moviesSlice'
import { NOWPLAYING_API_TMDB } from '../utils/Constants'
import { useEffect } from 'react'

const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        NOWPLAYING_API_TMDB
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailorVideo(trailer));
    };
  
    useEffect(() => {
      getMovieTrailer();
    }, []);
    }

export default useMovieTrailor