import React from 'react'
import Image1 from '../../assests/category/earphone.png'
import Image2 from '../../assests/category/watch.png'
import Image3 from '../../assests/category/macbook.png'
import Image4 from '../../assests/category/gaming.png'
import Image5 from '../../assests/category/vr.png'
import Image6 from '../../assests/category/speaker.png'
const Category = () => {
  return (
    <div className='py-8'>
         <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/**FIrst column */}

                <div className='py-10 pl-5  bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-3xl xl:text-5xl  font-bold opacity-20 mb-[2]'>Earphone</p>
 
                        </div>
                    </div>
                    <img src={Image1}  className='w-[320px] absolute bottom-0'></img>
                </div>
                {/**Second column */}
            <div className='py-10 pl-5  bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-white '>Enjoy</p>
                        <p className='text-2xl text-white font-bold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-[2]'>Gadget</p>
 
                        </div>
                    </div>
                    <img src={Image2}  className='w-[320px] absolute -right-4 top-20 md:top-[40px]  lg:top-[40px]'></img>
                </div>

                {/**Third column */}
                <div className='py-10 pl-5  bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end col-span-2 '>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-white '>Enjoy</p>
                        <p className='text-2xl  font-bold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-[2]'>Laptop</p>
 
                        </div>
                    </div>
                    <img src={Image3}  className='w-[320px] absolute -right-1 lg:top-[20px]'></img>
                </div>

                {/**Row 2 */}
                {/**Col2 1 */}
                <div className='py-10 pl-5  bg-gradient-to-br from-gray-500/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end col-span-2 '>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-white '>Enjoy</p>
                        <p className='text-2xl  font-bold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-[2]'>Gaming</p>
 
                        </div>
                    </div>
                    <img src={Image4}  className='w-[200px] lg:w-[300px] top-10  absolute -right-0 lg:top-[20px]'></img>
                </div>
                {/**Col2 2 */}
                <div className='py-10 pl-5  bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex '>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-white '>Enjoy</p>
                        <p className='text-2xl text-white font-bold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-[2]'>Virtual Reality</p>
 
                        </div>
                    </div>
                    <img src={Image5}  className='w-[150px] lg:w-[220px] absolute bottom-2 right-1'></img>
                </div>

                {/**Col2 3 */}
                      <div className='py-10 pl-5  bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex '>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-white '>Enjoy</p>
                        <p className='text-2xl text-white font-bold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-[2]'>Reality</p>
 
                        </div>
                    </div>
                    <img src={Image6}  className='w-[200px] absolute right-0 bottom-1'></img>
                </div>


            </div>
        </div>
        
    </div>
  )
}

export default Category