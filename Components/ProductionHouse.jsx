import React from 'react'

import disney from './../assets/Images/logos.png';
import marvel from './../assets/Images/marvel.jpg';
import pixar from './../assets/Images/pixar.webp';
import star from  './../assets/Images/start.jpg'
import nation from './../assets/Images/national.png';

const ProductionHouse = () => {

    // const ProductionHouseList = [
    //     {
    //         id: 1,
    //         image: disney,
    //     },
    //     {
    //         id: 2,
    //         image: marvel,
    //     },
    //     {
    //         id: 3,
    //         image: pixar,
    //     },
    //     {
    //         id: 4,
    //         image: star,
    //     },
    //     {
    //         id: 5,
    //         image: nation,
    //     }
    // ];

    return (
        <div>
            <div className='flex overflow-x-auto w-full px-5 md:px-16 py-4 '>
               <img src={disney} alt="" className='size-50  w-70 object-left-top mr-2  rounded-md hover:border-[1px] border-gray-100 transition-all duration-100 hover:scale-110' />
               <img src={marvel} alt="" className='size-50  w-70 object-left-top mr-2  rounded-md hover:border-[1px] border-gray-100 transition-all duration-100 hover:scale-110' />
               <img src={pixar} alt=""className='size-50  w-70 object-left-top mr-2  rounded-md hover:border-[1px] border-gray-100 transition-all duration-100 hover:scale-110' />
               <img src={star} alt="" className='size-50  w-70 object-left-top mr-2  rounded-md hover:border-[1px] border-gray-100 transition-all duration-100 hover:scale-110' />
               <img src={nation} alt="" className='size-50  w-70 object-left-top mr-2  rounded-md hover:border-[1px] border-gray-100 transition-all duration-100 hover:scale-110' />
            </div>
        </div>
    )
}

export default ProductionHouse;
