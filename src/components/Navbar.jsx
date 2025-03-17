import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import logo from '../assets/THW.png'

const Navbar = () => {
  // State to track which option is selected
  const [activeOption, setActiveOption] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setDrawerOpen(false); // Close the drawer when an option is clicked
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-transparent p-8 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-16 w-auto" />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-24">
            <a
              href="#home"
              onClick={() => handleOptionClick("home")}
              className={`${activeOption === "home" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Home
            </a>
            <a
              href="#product-category"
              onClick={() => handleOptionClick("product-category")}
              className={`${activeOption === "product-category" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Product Category
            </a>
            <a
              href="#product"
              onClick={() => handleOptionClick("product")}
              className={`${activeOption === "product" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Product
            </a>
            <a
              href="#contact"
              onClick={() => handleOptionClick("contact")}
              className={`${activeOption === "contact" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Contact Us
            </a>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <FaSearch className="text-black text-xl" />
            <FaUserCircle className="text-black text-xl" />
          </div>

          {/* Mobile Drawer Icon */}
          <div className="md:hidden flex items-center">
            <FaBars className="text-black text-xl" onClick={toggleDrawer} />
          </div>
        </div>

        {/* Drawer for Mobile */}
        {drawerOpen && (
          <div className="md:hidden bg-transparent text-black absolute inset-0 top-16 left-0 flex flex-col items-center p-4 space-y-6">
            <a
              href="#home"
              onClick={() => handleOptionClick("home")}
              className={`${activeOption === "home" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Home
            </a>
            <a
              href="#product-category"
              onClick={() => handleOptionClick("product-category")}
              className={`${activeOption === "product-category" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Product Category
            </a>
            <a
              href="#product"
              onClick={() => handleOptionClick("product")}
              className={`${activeOption === "product" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Product
            </a>
            <a
              href="#contact"
              onClick={() => handleOptionClick("contact")}
              className={`${activeOption === "contact" ? "text-orange-500" : "text-black"
                } hover:text-orange-500`}
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
