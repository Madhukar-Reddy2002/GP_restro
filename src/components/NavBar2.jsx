import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Restaurant Logo" className="h-8" />
        <h1 className="ml-2 font-bold text-xl">Restaurant Name</h1>
      </div>
      <div className="hidden sm:block">
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#menu" className="text-gray-600 hover:text-gray-900">Menu</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </div>
      <div className="flex items-center">
        <button onClick={toggleTheme} className="mr-4 text-gray-600 hover:text-gray-900 focus:outline-none">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
        <button onClick={handleMenuToggle} className="block sm:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 z-50">
          <ul className="flex flex-col space-y-4 items-center">
            <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#menu" className="text-gray-600 hover:text-gray-900">Menu</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
