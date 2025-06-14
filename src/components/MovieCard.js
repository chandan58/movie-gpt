import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-24 md:w-48 cursor-pointer">
      <img src={IMG_CDN_URL + poster_path} alt="posterImage" />
    </div>
  );
};

export default MovieCard;
