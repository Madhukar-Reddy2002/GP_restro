import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaHome, FaShoppingBag, FaInfoCircle, FaBlog } from "react-icons/fa";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: FaHome,
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
    icon: FaShoppingBag,
  },
  {
    id: 3,
    name: "About",
    link: "/about",
    icon: FaInfoCircle,
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blogs",
    icon: FaBlog,
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/trending",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/best-selling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/top-rated",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white duration-200 shadow-md sticky top-0 z-40">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo and Links section */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-primary font-bold tracking-widest text-2xl uppercase sm:text-3xl"
          >
            Eshop
          </a>
          {/* Menu Items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data, index) => (
                <li key={index} className="group">
                  <a
                    href={data.link}
                    className="flex items-center gap-2 px-4 py-2 font-semibold text-gray-500 hover:text-primary dark:hover:text-white duration-200"
                  >
                    <data.icon className="text-xl" />
                    {data.name}
                  </a>
                  <div className="h-1 bg-primary scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
                </li>
              ))}
              {/* Dropdown  */}
              <li
                className="relative cursor-pointer group"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 font-semibold text-gray-500 hover:text-primary dark:hover:text-white duration-200"
                >
                  Quick Links
                  <FaCaretDown
                    className={`text-xl transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {/* Dropdown Links */}
                <div
                  className={`absolute z-[9999] w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white transition-all duration-300 ${
                    isDropdownOpen
                      ? "visible opacity-100 scale-100"
                      : "invisible opacity-0 scale-95"
                  }`}
                >
                  <ul className="space-y-2">
                    {DropdownLinks.map((data, index) => (
                      <li key={index}>
                        <a
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Navbar Right section */}
        <div className="flex justify-between items-center gap-4">
          {/* Search Bar section */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="search-bar"
            />
            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
          </div>

          {/* Order-button section */}
          <button
            className="relative p-3 bg-primary text-white rounded-full hover:bg-primary/80 duration-200"
            onClick={handleOrderPopup}
          >
            <FaCartShopping className="text-xl" />
            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
              4
            </div>
          </button>
          {/* Dark Mode section */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;