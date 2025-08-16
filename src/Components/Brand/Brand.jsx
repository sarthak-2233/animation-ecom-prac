import React from 'react'
import { I1,I2,I3,I4,I5 } from '../../assests/brand'
const Brand = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10 '>
        <div className='container'>
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
            <img src={I1} className='w-[80px] dark:invert'></img>
            <img src={I2} className='w-[80px] dark:invert'></img>
            <img src={I3} className='w-[80px] dark:invert'></img>
            <img src={I4} className='w-[80px] dark:invert'></img>
            <img src={I5} className='w-[80px] dark:invert'></img>
            </div>
        </div>
        
        </div>
  )
}

export default Brand