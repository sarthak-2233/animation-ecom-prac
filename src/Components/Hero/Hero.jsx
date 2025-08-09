import React from 'react'
import Slider from 'react-slick'
import Image1 from '../../assests/hero/headphone.png'
import Image2 from '../../assests/category/vr.png'
import Image3 from '../../assests/category/macbook.png'

// Slider Data
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Headphones',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.',
  },
  {
    id: 2,
    img: Image2,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Virtual',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.',
  },
  {
    id: 3,
    img: Image3,
    subtitle: 'Beats Solo',
    title: 'Branded Laptop',
    title2: 'Laptop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.',
  },
]

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className='w-full  container'>
      {/* Hero section */}
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color'>
      <div className='container pb-8 sm:pb-0 '>
      <Slider {...settings}>
        {HeroData.map((item, index) => (
          <div key={index}>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center px-4 py-8'>
              {/* TEXT CONTENT */}
              <div className='space-y-4'>
                <h4 className='text-lg text-gray-600'>{item.subtitle}</h4>
                <h2 className='text-3xl sm:text-5xl font-bold'>{item.title}</h2>
                <h2 className='text-3xl sm:text-5xl font-bold'>{item.title2}</h2>
                <p className='text-gray-500'>{item.description}</p>
                <button className='mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-all'>
                  Shop Now
                </button>
              </div>

              {/* IMAGE */}
              <div className='flex justify-center'>
                <img
                  src={item.img}
                  alt={`${item.title} ${item.title2}`}
                  className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </Slider> 
      </div>
      </div>
    </div>
  )
}

export default Hero
