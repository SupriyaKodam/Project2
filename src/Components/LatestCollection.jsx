import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';

const LatestCollection = () => {
  // Array containing the image paths, names, and prices for shoes
  const shoes = [
    { image: './Images/shoe15.jpeg', name: 'Adidas Running Shoes', price: '$99.99' },
    { image: './Images/shoe2.jpeg', name: 'Under Armour Sneakers', price: '$79.99' },
    { image: './Images/shoe3.jpeg', name: 'Asics Gel Shoes', price: '$120.00' },
    { image: './Images/shoe4.jpeg', name: 'BD Basketball Shoes', price: '$110.00' },
    { image: './Images/shoe5.jpeg', name: 'Fila Sneakers', price: '$80.00' },
    { image: './Images/shoe6.jpeg', name: 'Air Jordan 1', price: '$150.00' },
    { image: './Images/shoe7.jpeg', name: 'Mark Sports Shoes', price: '$85.00' },
    { image: './Images/shoe8.jpeg', name: 'MC Sport Shoes', price: '$95.00' },
    { image: './Images/shoe9.jpeg', name: 'Nike Air Max', price: '$140.00' },
    { image: './Images/shoe10.jpeg', name: 'Vans Classic Shoes', price: '$55.00' },
    { image: './Images/shoe11.jpeg', name: 'Reebok Sneakers', price: '$80.00' },
    { image: './Images/shoe12.jpeg', name: 'New Balance 574', price: '$120.00' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // For tracking the current index in carousel

  // Function to move the carousel to the right
  const moveRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shoes.length - 5 ? 0 : prevIndex + 1
    );
  };

  // Function to move the carousel to the left
  const moveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shoes.length - 5 : prevIndex - 1
    );
  };

  // Auto slide to the right every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(moveRight, 3000); // Move right every 3 seconds
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []); // Empty dependency array means this will only run once when the component is mounted

  return (
    <div id="collections1" className="py-10 bg-gray-100 pb-40">
      <h2 className="text-center text-3xl font-bold mb-8">Latest Collections</h2>
      
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        {/* Left Arrow */}
        <IconButton
          onClick={moveLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={moveRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        >
          <ArrowForwardIcon fontSize="large" />
        </IconButton>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-500"
            style={{ transform: `translateX(-${currentIndex * 100 / 5}%)` }}
          >
            {/* Map over the shoes array to display images, names, and prices */}
            {shoes.map((shoe, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 lg:w-1/5 px-2 flex-shrink-0"
              >
                <img
                  src={shoe.image}
                  alt={`Shoe ${index + 1}`}
                  className="w-full h-56 object-cover rounded-md shadow-md"
                />
                <div className="text-center mt-2">
                  <p className="font-semibold">{shoe.name}</p>
                  <p className="text-xl text-gray-700">{shoe.price}</p>
                </div>
                <NavLink to="/order">
                <div className='text-center'>
                <button className='bg-yellow-400 text-black font-bold p-3 border-2 border-black hover:bg-black hover:text-white rounded-lg'>Explore More</button>
                </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
