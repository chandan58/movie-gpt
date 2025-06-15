import React from "react";
import { languages } from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 gap-5 grid grid-cols-12  bg-black p-2">
        <input
          type="text"
          placeholder={languages[langKey].placeholder}
          className="col-span-9 p-2 rounded text-black"
        />
        <button type="submit" className="col-span-3 p-2 bg-red-600 rounded">
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
