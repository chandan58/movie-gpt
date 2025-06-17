import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { UPCOMING_API_TMDB } from "../utils/Constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      UPCOMING_API_TMDB
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !getUpcomingMovies && nowPlayingMovies();
  }, []);
};
export default useUpcomingMovies;
