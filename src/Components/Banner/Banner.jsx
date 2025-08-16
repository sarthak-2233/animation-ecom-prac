import React from 'react'

const Banner = ({data}) => {
  return (
    <div 
  className="min-h-[400px] flex justify-center items-center py-12"
  
>
  <div className="container "
    
  >
    <div style={{ backgroundColor: data.bgColor }}
     className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
      {/* 1 col */}
      <div className='p-6 sm:p-8'>
        <p className='text-sm'>{data.discount}</p>
        <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
        <p className='text-sm'>{data.date}</p>
      </div>
        {/* 2 Col */}
        <div>
            <img src={data.image } alt='' className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object cover'/>
        </div>
        {/* 3 Col */}
        <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>{data.title2}</p>
            <h1 className='text-3xl sm:text-5xlfont-bold'>{data.title3}</h1>
            <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
            <div>
                <button   style={{color: data.textColor}}
                 className='bg-white  py-2 px-6 rounded-3xl font-semibold shadow-md 
             hover:shadow-xl  hover:text-white 
             transition-all duration-300 ease-in-out'>Shop Now</button>
            </div>
        </div>

    </div>
  </div>
</div>
  )
}

export default Banner