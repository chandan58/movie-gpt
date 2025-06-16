import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames || !movieResults) return null;

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 p-2 m-2">
      {movieResults?.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w150${movieResults.backdrop_path}`}
          alt="Backdrop"
          className="w-full rounded-lg"
        />
      )}
  
      <div className="flex gap-5 px-10 z-20 overflow-x-scroll no-scrollbar">
        {movieNames.map((index) => (
          <MovieList
            key={index}
            movies={movieResults || []}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
