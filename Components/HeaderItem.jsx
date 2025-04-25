import React from 'react'

const HeaderItem = ({name , Icon}) => {
  return (
    <div>
           <div className='text-white flex item-center gap-3
           text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mt-11 ml-15'>
            <Icon  />
             <h4 className=''>{name}</h4>
            
           </div>
    </div>
  )
}

export default HeaderItem
