import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { TOPRATED_API_TMDB } from "../utils/Constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TOPRATED_API_TMDB
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !getTopRatedMovies && topRatedMovies();
  }, []);
};
export default useTopratedMovies;
