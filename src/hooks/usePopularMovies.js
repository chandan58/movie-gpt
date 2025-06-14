import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { POPULAR_API_TMDB } from "../utils/Constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      POPULAR_API_TMDB
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};
export default usePopularMovies;
