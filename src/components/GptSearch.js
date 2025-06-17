import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BANNER_IMAGE } from '../utils/Constants'
const GptSearch = () => {
  return (
    <div >
         <div className="fixed -z-10">
        <img
          src={BANNER_IMAGE}
          alt="background"
          className="w-screen h-screen object-cover"
        />
        </div>
        <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
        </div>
    </div>
  )
}

export default GptSearch