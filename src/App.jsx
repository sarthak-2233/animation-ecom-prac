import Banner from "./Components/Banner/Banner"
import Category from "./Components/Category/Category"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar"
import Products from "./Components/Products/Products"
import Services from "./Components/Services/Services"
import ImageHead from './assests/hero/headphone.png'
import Watch from './assests/brand/watch.png'
import Blogs from "./Components/Blogs/Blogs"
import Brand from "./Components/Brand/Brand"
const BannerData={
    discount:'30% OFF',
    title:'Fine Smile',
    image:ImageHead,
    title2:'Air Solo Bass',
    title3:'Winter Sale',
    title4:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, aliquam',
    bgColor:"#f42c37",
    date:'10 Jan to 28 Jan',
    textColor:'#f42c37',
}
const BannerData2={
    discount:'30% OFF',
    title:'Happy Hours',
    image:Watch,
    title2:'Smart Solo',
    title3:'Winter Sale',
    title4:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, aliquam',
    bgColor:"#4ecc6b",
    date:'10 Jan to 28 Jan',
    textColor:'#4ecc6b',
}

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Category/>
      <Services/>
      <Banner data={BannerData} />
      <Products/>
      <Banner data={BannerData2} />
      <Blogs/>
      <Brand/>
    </div>
  )
}

export default App