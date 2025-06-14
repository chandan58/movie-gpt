import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-100">
        <MovieList title="Trending Now" movies={movies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
