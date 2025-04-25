import React, { useEffect, useState } from 'react';
import mainlogo from  '../assets/Disney_Logo.webp';
import userlogo from '../assets/profile.png';
import axios from 'axios'
// import tailwindcss from '@tailwindcss/vite';
import { HiHome,
         HiStar,
         HiMagnifyingGlass,
         HiPlayCircle,
         HiTv
    } from "react-icons/hi2";

    import {HiPlus , HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';

const Header = () => {
    const [toggle,setToggle]=useState(false);
    const menu =[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name : 'SEARCH',
            icon :HiMagnifyingGlass
        },
        {
           name : 'WATCHLIST',
           icon : HiPlus
       },
        {
            name : 'ORIGINALS',
            icon : HiStar

        },
        {
            name :  'MOVIES',
            icon : HiPlayCircle
        },

        {
            name : 'SERIES',
             icon : HiTv
        },
       
    ];
   return (
    <div className='flex item-center gap justify-between '>
        <div className='flex   item-center gap-6 '>
         <img src={mainlogo} alt=' ' className='w-[50px] md:w-[115px]  object-cover mt-5 ml-5'/>

         <div className='hidden md:flex  gap-8 '>
         {
            menu.map((item)=>(
                   <HeaderItem name={item.name} Icon={item.icon} />
            ))
         }
         </div>
         <div className='flex md:hidden '>
         {
            menu.map((item,index)=>index<3&&(
                   <HeaderItem name={''} Icon={item.icon} />
            ))
         }
         <div className="md:hidden" onClick={()=>{setToggle(!toggle)}} >  
         <HeaderItem name={''} Icon={HiDotsVertical}/>
         </div>
        {toggle ?   <div className='absolute ml-67 mt-15  border-1px p-1 px-5 px-4'>
        { menu.map((item,index)=>index>2&&(
                   <HeaderItem name={item.name} Icon={item.icon} />
            ))
        }   
         </div>:null}
         </div>
       
     </div>
     
       <img src={userlogo} alt=''  className='w-[60px]  round-fill ml-50 mt-5'  />
       <br></br>
    </div>
  
  )
}

export default Header
