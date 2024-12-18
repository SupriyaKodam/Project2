import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const LatestCollection = () => {
  const shoes = [
    { id: 1, name: 'Nike Air Max', price: '$120', imgSrc: '/Images/shoe2.jpeg' },
    { id: 2, name: 'Nike Air Force 1', price: '$110', imgSrc: '/Images/shoe8.jpeg' },
    { id: 3, name: 'Nike Jordan', price: '$150', imgSrc: '/Images/shoe4.jpeg' },
    { id: 4, name: 'Nike Pegasus', price: '$130', imgSrc: '/Images/shoe5.jpeg' },
    { id: 5, name: 'Nike Free RN', price: '$100', imgSrc: '/Images/shoe6.jpeg' },
    { id: 6, name: 'Nike React Infinity', price: '$140', imgSrc: '/Images/shoe7.jpeg' },
    //adidas
    { id: 1, name: 'adidas Air Max', price: '$120', imgSrc: '/Images/shoe8.jpeg' },
    { id: 2, name: 'adidas Air Force 1', price: '$110', imgSrc: '/Images/shoe9.jpeg' },
    { id: 3, name: 'adidas Jordan', price: '$150', imgSrc: '/Images/shoe10.jpeg' },
    //puma
    { id: 1, name: 'puma Air Max', price: '$120', imgSrc: '/Images/shoe14.jpeg' },
    { id: 4, name: 'puma Pegasus', price: '$130', imgSrc: '/Images/3rd.jpeg' },

   //reedok
    { id: 2, name: 'reebok Air Force 1', price: '$110', imgSrc: '/Images/7th.webp' },
    { id: 3, name: 'reebok Jordan', price: '$150', imgSrc: '/Images/8th.webp' },
    
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  const moveRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shoes.length - 5 ? 0 : prevIndex + 1
    );
  };

  const moveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shoes.length - 5 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(moveRight, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="collections1" className="py-10 bg-gray-100 pb-40">
      <h2 className="text-center text-3xl font-bold mb-8">Latest Collections</h2>

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <IconButton
          onClick={moveLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        <IconButton
          onClick={moveRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        >
          <ArrowForwardIcon fontSize="large" />
        </IconButton>

        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-500"
            style={{ transform: `translateX(-${(currentIndex * 100) / 5}%)` }}
          >
            {shoes.map((shoe, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/5 px-2 flex-shrink-0">
                <img
                  src={shoe.imgSrc}
                  alt={`Shoe ${index + 1}`}
                  className="w-full h-56 object-cover rounded-md shadow-md"
                />
                <div className="text-center mt-2">
                  <p className="font-semibold">{shoe.name}</p>
                  <p className="text-xl text-gray-700">{shoe.price}</p>
                </div>
                <div className="text-center">
                  <button
                    className="text-white bg-black font-bold p-3 rounded-lg"
                    onClick={() => navigate('/shoe-details', { state: { shoe } })}
                  >
                    Select Options
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <NavLink to="/order">
              <button className="bg-yellow-400 text-black font-bold p-3 border-2 border-black hover:bg-black hover:text-white rounded-lg">
                Explore More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
