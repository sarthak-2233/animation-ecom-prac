import React from 'react'
import b1 from '../../assests/blogs/blog-1.jpg'
const BlogCard = ({data}) => {
  return (
    <div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 p-4 cursor-pointer">
  {data.map((item, index) => (
    <div
      key={index}
      className="rounded-xl overflow-hidden shadow-md bg-white 
                 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-300 ease-in-out"
    >
      {/* Image with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt="blog"
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <p className="text-sm text-gray-500">{item.date}</p>
        <h1 className="text-xl font-semibold text-gray-900">{item.title}</h1>
        <p className="text-gray-600">{item.detail}</p>
      </div>
    </div>
        ))}


  
</div>
    </div>
  )
}

export default BlogCard



/** 
  <div className="bg-pink-400 ">
    <img src={b1} alt="blog" className="" />
    <div className="p-4">
      <p className="">Date</p>
      <h1 className="">Heading</h1>
      <p className="">Random text...</p>
    </div>
  </div>
  */