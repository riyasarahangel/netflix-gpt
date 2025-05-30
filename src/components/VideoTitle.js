import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className= "text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4"> {overview} </p>
      <div className='my-4'>
        <button className='bg-white text-black hover:bg-opacity-80 py-4 px-12 text-xl rounded-md'>
           ▶️Play </button>
        <button className='mx-2 bg-white text-black p-4 px-12 hover:bg-opacity-80 text-xl rounded-md' > 
        More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle