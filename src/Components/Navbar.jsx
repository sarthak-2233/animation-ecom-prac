import React from 'react'
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import Darkmode from './Darkmode';
const menuLinks = [
    {
        id: 1,
        name: "Home",
        link: '/#',
    },
    {
        id: 2,
        name: "Shop",
        link: '/#Shop',
    },
    {
        id: 3,
        name: "About us",
        link: '/#About us',
    },
    {
        id: 4,
        name: "Blogs",
        link: '/#Blogs',
    },

]

const DropdownLinks = [
    {
        id: 1,
        links: '/#Trending Products',
        name: 'Trending Products',
    },
    {
        id: 2,
        links: '/#Best Selling',
        name: 'Best Selling',
    },
    {
        id: 3,
        links: '/#Top Rated',
        name: 'Top Rated',
    }
]

const Navbar = () => {
    return (
        <div>
            <div className='py-4'>
                <div className='container flex items-center justify-between'>
                    {/** LOGO AND LINKS */}
                    <div className='flex items-center gap-4'>
                        <a href="#" className='text-primary font-semibold tracking-widest test-2xl uppercase sm:text-3xl'>
                            Eshop
                        </a>
                        {/**Menu items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    menuLinks.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link}
                                                className='inline-block px-4 font-semibold text-gray-500 
                                        hover:text-black
                                        dark:hover:text-white duration-300
                                        '
                                            >{item.name}</a>
                                        </li>
                                    ))
                                }
                                {/**Dropdown */}
                                <li className="relative group">
                                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                        </span>
                                    </a>

                                    {/* DROPDOWN */}
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white'>
                                        <ul className='space-y-2'>
                                            {
                                                DropdownLinks.map((item, index) => (
                                                    <li key={index}>
                                                        <a className='text-gray-500dark:hover:text-white duration-200 p-2 hover:bg-primary/20 w-full inline-block rounded-md font-semibold'
                                                            href={item.links}>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/**Right side navbar */}
                    <div className='flex justify-between items-center gap-4 '>
                        {/**Search bar */}
                        <div className='flex items-center relative group sm:block '>
                            <input type='text' placeholder='Search'
                                className='search-bar'
                            />
                            <FaSearch className='text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200' />

                        </div>

                        {/**ADD TO CART */}
                        <button className='relative p-[14px]'>
                            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-400 text-white rounded-full absolute top-0 right-0 fles item-center justify-between text-xs'>
                                4
                            </div>
                        </button>
                        {/**Dark mode */}
                        <div>
                            <Darkmode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar