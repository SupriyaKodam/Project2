import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nike = () => {
  const navigate = useNavigate();  // Use navigate hook
  const [selectedShoe, setSelectedShoe] = useState(null); // You can remove this state if not needed for modal

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);

  const shoes = [
    { id: 1, name: 'Nike Air Max', price: '$120', imgSrc: '/Images/shoe2.jpeg' },
    { id: 2, name: 'Nike Air Force 1', price: '$110', imgSrc: '/Images/shoe8.jpeg' },
    { id: 3, name: 'Nike Jordan', price: '$150', imgSrc: '/Images/shoe4.jpeg' },
    { id: 4, name: 'Nike Pegasus', price: '$130', imgSrc: '/Images/shoe5.jpeg' },
    { id: 5, name: 'Nike Free RN', price: '$100', imgSrc: '/Images/shoe6.jpeg' },
    { id: 6, name: 'Nike React Infinity', price: '$140', imgSrc: '/Images/shoe7.jpeg' },
  ];

  const handleSelectOptions = (shoe) => {
    navigate('/shoe-details', { state: { shoe } }); // Navigate and pass the shoe data to the details page
  };

  return (
    <div id="nike" className="flex justify-center mt-40 mb-20">
      <div className="w-full md:w-3/4 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Nike Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src={shoe.imgSrc}
                alt={shoe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{shoe.name}</h2>
                <p className="text-gray-700">{shoe.price}</p>
                <button
                  onClick={() => handleSelectOptions(shoe)}  // Call the navigate function on button click
                  className="mt-4 w px-4 py-2 bg-black text-white rounded hover:bg-blue-600"
                >
                  Select Options
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nike;
