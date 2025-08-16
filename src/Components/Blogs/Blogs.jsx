import React from 'react'
import Heading from '../Shared/Heading'
import b1 from '../../assests/blogs/blog-1.jpg'
import b2 from '../../assests/blogs/blog-2.jpg'
import b3 from '../../assests/blogs/blog-3.jpg'
import BlogCard from './BlogCard'
const BlogsData=[
    {
        id:1,
        image:b1,
        date:'Jan 20, 2024 by Dilshad',
        title:'How to choose perfect smartwatch',
        detail:'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
    },
    {
        id:2,
        image:b2,
        date:'Jan 20, 2024 by Satya',
        title:'How to choose perfect gadget',
        detail:'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
    },
    {
        id:3,
        image:b3,
        date:'Jan 20, 2024 by Sabir',
        title:'How to choose perfect Vr Headset',
        detail:'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
    }

]

const Blogs = () => {
  return (
    <div>
        <div className='container  mt-6'>
        { /**USe Heading */  }
            <Heading title='Recent News' subtitle='Explore Our Blogs'/>

            {/**Card use */}
            <BlogCard data={BlogsData}/>
        </div>
    </div>
  )
}

export default Blogs