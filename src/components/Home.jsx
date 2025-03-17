
import React, { useState } from 'react';
import cup1 from '../assets/cup1.png'
import cup2 from '../assets/cup2.png'
import cup3 from '../assets/cup3.png'
import veg1 from '../assets/veg.png';
import veg2 from '../assets/vegs (1).png';
import veg3 from '../assets/vegs (2).png';
import veg4 from '../assets/vegs (3).png';
import fullImg from '../assets/fullImg.png';
const Home = () => {
  const images = [
    'https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
    'https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD05mli_sg6zJMajt-IM3sTmOZcASj9avcdg&s'
  ];

  const images2 = [
    { src: veg1, name: 'Milk & Milk Products' },
    { src: veg2, name: 'Fruits & vegetables' },
    { src: veg3, name: 'Pulses & grains' },
    { src: veg4, name: 'Spices' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[80vh] lg:h-screen">
        <img
          src={images[currentImageIndex]}
          alt="carousel"
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      <div className="text-center py-6 px-4 pt-32">
        <h1
          style={{
            color: "#D3AA42",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "2rem",
          }}
          className="text-2xl sm:text-3xl lg:text-4xl"
        >
          Handpicked Goodness Just for You
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-20">
        <img
          src={cup1}
          alt="Image 1"
          className="w-full sm:w-[306px] sm:h-[302px] md:w-[250px] md:h-[250px] lg:w-[306px] lg:h-[302px] object-cover rounded-lg mx-auto"
        />
        <img
          src={cup2}
          alt="Image 2"
          className="w-full sm:w-[249px] sm:h-[307px] md:w-[210px] md:h-[250px] lg:w-[249px] lg:h-[307px] object-cover rounded-lg mx-auto"
        />
        <img
          src={cup3}
          alt="Image 3"
          className="w-full sm:w-[252px] sm:h-[311px] md:w-[210px] md:h-[260px] lg:w-[252px] lg:h-[311px] object-cover rounded-lg mx-auto"
        />
      </div>

      <div className="text-center py-6 px-4 pt-32">
        <h1
          style={{
            color: "#D3AA42",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "2rem",
          }}
          className="text-2xl sm:text-3xl lg:text-4xl"
        >
          Explore Our Healthy Selections
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-20">
        {images2.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.name}
              className="w-44 h-44 object-cover"
            />
            <p className="mt-2 text-center">{image.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="flex items-center justify-center bg-[#D3AA42] text-white rounded-[12px] w-[269px] h-[54px]"
        >
          <span>View All Product</span>
          <span className="ml-2">&#8594;</span> {/* This is the right arrow */}
        </button>
      </div>


      <div className="w-full h-[60vh] sm:h-[80vh] lg:h-screen mt-16 ">
        <img
          src={fullImg}
          alt="carousel"
          className="w-full h-full object-contain"
        />
       
      </div>

    </>
  );
};

export default Home;