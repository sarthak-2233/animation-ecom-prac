import React, { useEffect, useState } from 'react'
import Darkbutton from '../assests/website/dark-mode-button.png'
import Lightbutton from '../assests/website/light-mode-button.png'

const Darkmode = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or use 'light' as default
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const element = document.documentElement;
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply the theme class
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]); // Add theme as dependency

  return (
    <div className='relative'>
      <img 
        src={Lightbutton} 
        alt="Light mode" 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === 'dark' ? "opacity-0" : "opacity-100"} transition-all duration-300`} 
      />

      <img 
        src={Darkbutton} 
        alt="Dark mode" 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`w-12 cursor-pointer ${theme === 'dark' ? "opacity-100" : "opacity-0"} transition-all duration-300`} 
      />
    </div>
  )
}

export default Darkmode