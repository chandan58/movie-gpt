import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[10%] px-10  text-white bg-gradient-to-r from-black'>
        <h1 className='text-white text-3xl md:text-3xl lg:text-3xl font-bold'>{title}</h1>
        <p className='text-white text-xl md:text-xl lg:text-2xl w-1/2'>{overview}</p> 
        <div className='flex gap-2 my-4'>
            <button className='text-white bg-gray-500 px-4 py-2 text-xl md:text-xl lg:text-2xl rounded-lg font-bold hover:bg-gray-600'>Play ⏯️</button>
            <button className='text-white bg-gray-500 px-4 py-2 text-xl md:text-xl lg:text-2xl ml-2 rounded-lg font-bold hover:bg-gray-600'>More Info</button>
        </div>  
    </div>
  )
}

export default VideoTitle