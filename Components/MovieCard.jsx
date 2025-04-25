import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const MovieCard = ({movie}) => {
  return (
    <div className='mt-6'>
        <section className='hover:scale-90 transition-all duration-150 ease-in'>
        <img src={IMAGE_BASE_URL+movie.poster_path} alt="" className=' rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in' />
        <h2 className='text-white w-[110px] md:[200px] mt-5 '>{movie.original_title}</h2>
        </section>
    </div>
  )
}

export default MovieCard
