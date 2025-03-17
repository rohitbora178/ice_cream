
import React, { useState } from 'react';
import cup1 from '../assets/cup1.png'
import cup2 from '../assets/cup2.png'
import cup3 from '../assets/cup3.png'
import veg1 from '../assets/veg.png';
import veg2 from '../assets/vegs (1).png';
import veg3 from '../assets/vegs (2).png';
import veg4 from '../assets/vegs (3).png';
import fullImg from '../assets/fullImg.png';
import QR from '../assets/QR.png';
import vector from '../assets/vector.png';
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
          src={cup1}
          alt="Image 2"
          className="w-full sm:w-[249px] sm:h-[307px] md:w-[210px] md:h-[250px] lg:w-[249px] lg:h-[307px] object-cover rounded-lg mx-auto"
        />
        <img
          src={cup1}
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


      <div className="flex items-center justify-center  mt-32 px-4">
        <div className="w-full max-w-[1240px] bg-[#D3AA42] rounded-[20px] p-4">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full space-y-4 lg:space-y-0 lg:space-x-4">

            <div className="flex-1 text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] mb-4 lg:mb-0">
              Experience the Purity <br /> of A2 Milk – Try a Sample!
            </div>

            {/* Second div - Input and Button */}
            <div className="flex items-center border-r-2 border-white pr-4 mb-4 lg:mb-0 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="p-2 rounded-l-md border-2 border-white mr-2 w-full lg:w-[200px]"
              />
              <button className="bg-white text-[#D3AA42] py-2 px-4 rounded-r-md w-full lg:w-auto">
                Send
              </button>
            </div>

            {/* Third div - Image */}
            <div className="flex-shrink-0 w-full lg:w-auto text-center">
              <img
                src={QR}
                alt="A2 Milk"
                className="w-[124px] h-[125px] object-cover mx-auto"
              />
              <div className="text-white mt-2">scan QR code</div>
            </div>
          </div>
        </div>
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
          Customer Reviews:{" "}
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "32px",
              color: "#000000"
            }}
          >
            Real Experiences, Real Trust
          </span>
        </h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Box 1 */}
      <div className="relative bg-[#D3AA4229] p-12 rounded-lg shadow-lg">
        <img 
          src={vector} 
          alt="icon" 
          className="absolute top-3 left-3 w-[35.65px] h-[26.61px]" 
        />
        <p className="text-sm sm:text-base mb-4 font-bold">
          "They are able to help a startup like mine scale and are very responsive to all of our unique needs."
        </p>
        <div className="absolute bottom-2 right-12">
          <p className="font-bold">Joew Harbert</p>
          <p >CEO, NoonBrew</p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative bg-[#D3AA4229] p-12 rounded-lg shadow-lg">
        <img 
          src={vector} 
          alt="icon" 
          className="absolute top-3 left-3 w-[35.65px] h-[26.61px]" 
        />
        <p className="text-sm sm:text-base mb-4 font-bold">
          "Division of Labor’s creative ideas were great, and working with their team was truly easy they were very responsive."
        </p>
        <div className="absolute bottom-2 right-12">
          <p className="font-bold">Mila McSabbu</p>
          <p >Marketing & Office Coordinator</p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="relative bg-[#D3AA4229] p-12 rounded-lg shadow-lg">
        <img 
          src={vector} 
          alt="icon" 
          className="absolute top-3 left-3 w-[35.65px] h-[26.61px]" 
        />
        <p className="text-sm sm:text-base mb-4 font-bold">
          "We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, ets."
        </p>
        <div className="absolute bottom-2 right-12">
          <p className="font-bold">Robert Fox</p>
          <p >Owner, Beards of Brothers</p>
        </div>
      </div>
    </div>



    </>
  );
};

export default Home;