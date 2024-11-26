import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ShoeDetailsPage = () => {
  const location = useLocation();  // Access the location state
  const navigate = useNavigate();
  
  const { shoe } = location.state || {}; // Get the shoe data passed via state

  if (!shoe) return <p>No shoe selected or data not passed correctly!</p>; // If no shoe is selected, display this

  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const [isPopupVisible,setPopupVisible]=useState(false);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const handleAddToCart = () => {
    setPopupVisible(true); // Show the popup
    setTimeout(() => {
      setPopupVisible(false); // Hide the popup after 2 seconds
    }, 1000);
  };


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
    

  ].filter((item) => item.id !== shoe.id); // Remove the selected shoe from the remaining options

  return (
    <div className="flex flex-col items-center p-8 mt-40">
      {/* Selected Shoe Image and Details */}
      <div className="flex w-full max-w-screen-xl mb-10">
        {/* Image on the left */}
        <div className="flex-shrink-0 w-1/3  mr-10 gap-40">
          <img src={shoe.imgSrc} alt={shoe.name} className="w-[600px] h-auto object-cover font-bold"
           />
        </div>

        {/* Shoe Details on the right */}
        <div className="flex-grow w-2/3">
          <h2 className="text-3xl font-semibold mb-4">{shoe.name}</h2>
          <p className="text-xl font-bold text-gray-700">{shoe.price}</p>
          <p className="mt-4 text-gray-600">Description: Lorem ipsum dolor sit...</p>

          {/* Size Selection */}
          <div className="mt-4">
            <label htmlFor="size">Size:</label>
            <select id="size" className="ml-2">
              {[6, 7, 8, 9, 10, 11, 12].map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Quantity Control */}
          <div className="mt-4 flex items-center">
            <button onClick={handleDecrement} className="text-2xl">-</button>
            <input 
              type="text" 
              value={quantity} 
              readOnly 
              className="mx-2 w-12 text-center border rounded" 
            />
            <button onClick={handleIncrement} className="text-2xl">+</button>
          </div>

          {/* Add to Cart Button */}
          <button onClick={handleAddToCart} className="mt-6 px-6 py-2 bg-black text-white rounded">Add to Cart</button>
          {/* Popup for Add to Cart */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl">Item Added to Cart!</p>
          </div>
        </div>
      )}
        </div>
      </div>

      {/* Remaining Shoes Display */}
      <div className="w-full max-w-screen-xl">
        <h3 className="text-2xl font-bold text-center mb-4">More Options</h3>
        <div className="grid grid-cols-3 gap-4">
          {shoes.map((otherShoe) => (
            <div
              key={otherShoe.id}
              className="cursor-pointer"
              onClick={() => navigate('/shoe-details', { state: { shoe: otherShoe } })} // Navigate to details page for the clicked shoe
            >
              {/* Shoe Image */}
              <img
                src={otherShoe.imgSrc}
                alt={otherShoe.name}
                className="w-full h-auto object-cover rounded-lg"
              />
              {/* Shoe Name and Price */}
              <div className="mt-2 text-center">
                <p className="text-lg font-semibold">{otherShoe.name}</p>
                <p className="text-sm text-gray-600">{otherShoe.price}</p>
              </div>
              {/* Select Option Button */}
              <div className='flex justify-center'>
              <button 
                onClick={() => navigate('/shoe-details', { state: { shoe: otherShoe } })} 
                className="mt-4 w-40 py-2 bg-black text-white rounded-lg"
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

export default ShoeDetailsPage;
