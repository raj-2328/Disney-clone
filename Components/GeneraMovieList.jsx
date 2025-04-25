import React from 'react'

import MovieList from './MovieList'
import Genralist from '../Constant/Genralist'

function GenreMovieList() {
  return (
    <div>
        {Genralist.genere.map((item,index)=>index<=4&&(
            <div className='p-8 px-8 md:px-16'>
                <h1 className='text-[20px] text-white 
                 italic text-teal-300'>{item.name}</h1> 
                <MovieList genreId={item.id} index_={index} />   
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList