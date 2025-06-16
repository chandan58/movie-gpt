import React from "react";
import { languages } from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openAi";
import { NOWPLAYING_API_TMDB } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const handleTmdbMovieSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      NOWPLAYING_API_TMDB
    );
    const json = await data.json();
    return json;
  };

  const handleMovieSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest movies for the query: " +
      searchText.current.value +
      ". Only give me names of 7 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in Mumbai";

    fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
        openai.apiKey,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: gptQuery,
                },
              ],
            },
          ],
        }),
      }
    )
      .then((res) => res.json())
      .then(async (data) => {
        const movieResults =
          data.candidates[0].content.parts[0].text.split(",");

        const tmdbMovieSearch = movieResults.map((movie) =>
          handleTmdbMovieSearch(movie)
        );
        const searchResponses = await Promise.all(tmdbMovieSearch);

        const movieData = searchResponses.map((res) => res?.results ?? []);

        const flattenedMovieData = movieData.flat();

        dispatch(addGptMovieResult({movieNames:movieResults, movieResults: flattenedMovieData}));
      })
      .catch(console.error);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 gap-5 grid grid-cols-12  bg-black p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={languages[langKey].placeholder}
          className="col-span-9 p-2 rounded text-black"
        />
        <button
          type="submit"
          className="col-span-3 p-2 bg-red-600 rounded"
          onClick={handleMovieSearch}
        >
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
