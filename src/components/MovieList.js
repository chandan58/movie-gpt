import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;
  return (
    <div className="text-3xl font-bold px-6">
      <h1 className="py-3 cursor-pointer text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
