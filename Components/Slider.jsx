import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "./Services/GlobalApi";
import 'tailwindcss';
import scrollbarHide from 'tailwind-scrollbar-hide';
import { HiChevronLeft, HiChevronRight}   from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth
const Slider = (props) => {

const [movieList, setmovieList]=useState([]);
const elementref = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then((response) => {
        console.log(response.data.results);
         // use response.data to get actual content
         setmovieList(response.data.results)
      })
      .catch((error) => {
        console.error('Error fetching trending movies:', error);
      });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  console.log(movieList);
  
  const sliderRight =(element)=>{
    element.scrollLeft+=screenWidth-20

  }
  const sliderLeft =(element)=>{
    element.scrollLeft-=screenWidth-10

  }


  return (
    <div>
      
      
      <div>
        < HiChevronLeft  className=" hidden md:block text-white text-[40px] absolute mx-4 mt-[215px] cursor-pointer" onClick={()=>sliderLeft(elementref.current)}/>
        <HiChevronRight  className=" hidden md:block text-white text-[40px] absolute mx-4 mt-[215px] cursor-pointer right-0"  onClick={()=>sliderRight(elementref.current)} />
      
      <div className="flex overflow-x-auto w-full px-5 py-4 
      scrollbar-none scroll-smooth" ref={elementref}>
  {movieList.map((item, index) => (
    <img
      key={index}
      src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
      alt={item.title}
      className='md:h-[420px] min-w-full  object-cove object-left-top mr-5  rounded-md hover:border-[4px] border-gray-400 transition-all duration-100'
    />
  ))}
</div>


    </div>
    </div>
  );
};

export default Slider;
