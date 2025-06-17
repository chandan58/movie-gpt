import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { NOWPLAYING_API_TMDB } from "../utils/Constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowlayingMovie = useSelector((store) => store.movies.nowPlayingMovies);

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      NOWPLAYING_API_TMDB
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !getNowlayingMovie && nowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
