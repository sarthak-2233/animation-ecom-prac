import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import { Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8 } from '../../assests/product'
const ProductData=[
    {
        id:1,
        image:Img1,
        title:'Boat Headphone',
        price:'$120',
    },
    {
        id:2,
        image:Img2,
        title:'Rocky Mountain',
        price:'$420',
    },
    {
        id:3,
        image:Img3,
        title:'Goggles',
        price:'$320',
    },
    {
        id:4,
        image:Img4,
        title:'Fast',
        price:'$220',
    },
    {
        id:5,
        image:Img5,
        title:'Boat Headphone',
        price:'$320',
    },
    {
        id:6,
        image:Img6,
        title:'Rocky Headphone',
        price:'$520',
    },
    {
        id:7,
        image:Img7,
        title:'Fast',
        price:'$120',
    },
        
    {
        id:8,
        image:Img8,
        title:'Bolt',
        price:'$120',
    },

]


const Products = () => {
  return (
    <div>
        <div className=' container '>
            {/**Heading */}
            <Heading title='Our Products' subtitle='Explore Our Products'/>
            

            {/**Cards */}
            <ProductCard data={ProductData} />
        </div>
    </div>
  )
}

export default Products