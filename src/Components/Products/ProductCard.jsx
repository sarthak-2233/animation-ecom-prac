import React from 'react'
import { Img1 } from '../../assests/product'
import Button from '../Shared/Button'

const ProductCard = ({data}) => {
  return (
    <div>

    <div className="container  grid grid-cols-4 gap-4 mb-4 p-4 ">
   
      {
      data.map((item,index)=>(
        <div key={index} className='p-4 group'>
          <div className='relative'>
          <img src={item.image} className='w-[260px] h-[180px] object-cover rounded-md '/>

          {/***Hover button */}
          <div className='hidden group-hover:flex absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center
                 group-hover:backdrop-blur-sm justify-center items-center duration-200 
                '>
            <Button
               text='Add To Cart'
                bgColor='bg-primary'
                textColor='text-white'
            
            />
          </div>

          </div>
            
            <div className='leading-7'>
             <h1 className='font-semibold'>{item.title}</h1>
            <h1 className='font-bold'>{item.price}</h1>

            </div>
            
        </div>
      ))}  
 
</div>

    </div>
  )
}

export default ProductCard


/** 
    <div className="bg-blue-400">
    
    <img src={Img1} alt="img" className="w-full h-48 object-cover rounded-lg" />
    <h1>Boadt headphone</h1>
    <p>$120</p>
  
  </div>
  */
