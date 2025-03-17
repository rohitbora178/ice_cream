// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { openModal } from '../redux/modalSlice';

// const Navbar = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const navigate = useNavigate();  // Initialize navigate hook
//     const dispatch = useDispatch();

//     // Toggle the Drawer
//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     // Navigation Handlers
//     const handleHome = () => {
//         navigate('/');
//     };

//     const handleAbout = () => {
//         navigate('/about');
//     };

//     const handleContact = () => {
//         navigate('/contact');
//     };

//     const handleOpenModal = () => {
//         dispatch(openModal());
//     };
//     return (
//         <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
//             <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//                 <div className="text-xl font-bold cursor-pointer" onClick={handleHome}>Logo</div>
//                 <div className="hidden md:flex space-x-4">
//                     <p className="cursor-pointer hover:text-gray-400" onClick={handleHome}>Home</p>
//                     <p className="cursor-pointer hover:text-gray-400" onClick={handleAbout}>About</p>
//                     <p className="cursor-pointer hover:text-gray-400" onClick={handleContact}>Contact</p>
//                     <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700" onClick={handleOpenModal}>Donate</button>
//                 </div>
//                 {/* Mobile Menu Button */}
//                 <button onClick={toggleDrawer} className="md:hidden text-2xl" aria-label="Open mobile menu">
//                     &#9776;
//                 </button>
//             </div>

//             {/* Drawer (Mobile Menu) */}
//             {isDrawerOpen && (
//                 <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-10" onClick={toggleDrawer}>
//                     <div className="bg-gray-800 w-64 h-full p-4 absolute left-0 top-0" onClick={(e) => e.stopPropagation()}>
//                         <div className="flex justify-between items-center mb-6">
//                             <div className="text-xl font-bold cursor-pointer" onClick={handleHome}>Logo</div>
//                             <button onClick={toggleDrawer} className="text-2xl" aria-label="Close mobile menu">
//                                 &times;
//                             </button>
//                         </div>
//                         <div className="space-y-4">
//                             <p className="block cursor-pointer hover:text-gray-400" onClick={handleHome}>Home</p>
//                             <p className="block cursor-pointer hover:text-gray-400" onClick={handleAbout}>About</p>
//                             <p className="block cursor-pointer hover:text-gray-400" onClick={handleContact}>Contact</p>
//                             <button className="w-full bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700" onClick={handleOpenModal}>Donate</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


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
  };

  return (
  //   <div>
     
  //   {/* Navbar */}
  //   <nav className="bg-transparent p-8 z-10 relative">
  //     <div className="container mx-auto flex items-center justify-between">
  //       {/* Logo */}
  //       <img src={logo} alt="logo" className="h-16 w-auto" />

  //       {/* Desktop Navigation Links */}
  //       <div className="hidden md:flex space-x-24">
  //         <a
  //           href="#home"
  //           onClick={() => handleOptionClick("home")}
  //           className={`${activeOption === "home" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Home
  //         </a>
  //         <a
  //           href="#product-category"
  //           onClick={() => handleOptionClick("product-category")}
  //           className={`${activeOption === "product-category" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Product Category
  //         </a>
  //         <a
  //           href="#product"
  //           onClick={() => handleOptionClick("product")}
  //           className={`${activeOption === "product" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Product
  //         </a>
  //         <a
  //           href="#contact"
  //           onClick={() => handleOptionClick("contact")}
  //           className={`${activeOption === "contact" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Contact Us
  //         </a>
  //       </div>

  //       {/* Desktop Icons */}
  //       <div className="hidden md:flex items-center space-x-8">
  //         <FaSearch className="text-black text-xl" />
  //         <FaUserCircle className="text-black text-xl" />
  //       </div>

  //       {/* Mobile Drawer Icon */}
  //       <div className="md:hidden flex items-center">
  //         <FaBars className="text-black text-xl" onClick={toggleDrawer} />
  //       </div>
  //     </div>

  //     {/* Drawer for Mobile */}
  //     {drawerOpen && (
  //       <div className="md:hidden bg-transparent text-black absolute inset-0 top-16 left-0 flex flex-col items-center p-4 space-y-6">
  //         <a
  //           href="#home"
  //           onClick={() => handleOptionClick("home")}
  //           className={`${activeOption === "home" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Home
  //         </a>
  //         <a
  //           href="#product-category"
  //           onClick={() => handleOptionClick("product-category")}
  //           className={`${activeOption === "product-category" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Product Category
  //         </a>
  //         <a
  //           href="#product"
  //           onClick={() => handleOptionClick("product")}
  //           className={`${activeOption === "product" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Product
  //         </a>
  //         <a
  //           href="#contact"
  //           onClick={() => handleOptionClick("contact")}
  //           className={`${activeOption === "contact" ? "text-orange-500" : "text-black"
  //             } hover:text-orange-500`}
  //         >
  //           Contact Us
  //         </a>
  //       </div>
  //     )}
  //   </nav>

  //   {/* Fullscreen Image Carousel */}
  //   <Carousel />
  // </div>

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

  {/* <Carousel /> */}
</div>
  );
};

export default Navbar;





