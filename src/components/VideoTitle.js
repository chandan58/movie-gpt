import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[10%] px-10  text-white bg-gradient-to-r from-black'>
        <h1 className='text-white text-1xl md:text-3xl lg:text-3xl font-bold'>{title}</h1>
        <p className='text-white text-xl md:text-xl lg:text-2xl w-1/2 hidden md:inline-block'>{overview}</p> 
        <div className='flex gap-2 my-4'>
            <button className='text-white bg-gray-500 md:px-4 md:py-2 px-2 py-1 text-xl md:text-xl lg:text-2xl rounded-lg font-bold hover:bg-gray-600'>Play ⏯️</button>
            <button className='text-white bg-gray-500 px-4 py-2 text-xl md:text-xl lg:text-2xl ml-2 rounded-lg font-bold hover:bg-gray-600 hidden md:inline-block'>More Info</button>
        </div>  
    </div>
  )
}

export default VideoTitle