import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BANNER_IMAGE } from '../utils/Constants'
const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
        <img
          src={BANNER_IMAGE}
          alt="background"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch