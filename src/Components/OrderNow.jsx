import React, { useEffect } from 'react';

const OrderNow = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  // Array of products (25 items)
  const products = [
    { img: './Images/15th.AVIF', name: 'Urban Strider', price: '$50', offer: '20% Off' },
    { img: './Images/shoe2.jpeg', name: 'Classic Walker', price: '$70', offer: '15% Off' },
    { img: './Images/shoe3.jpeg', name: 'Trail Blazer', price: '$60', offer: '25% Off' },
    { img: './Images/shoe4.jpeg', name: 'City Runner', price: '$80', offer: '10% Off' },
    { img: './Images/shoe5.jpeg', name: 'Eco Stepper', price: '$90', offer: '30% Off' },
    { img: './Images/shoe6.jpeg', name: 'Luxe Glide', price: '$55', offer: '20% Off' },
    { img: './Images/shoe7.jpeg', name: 'Retro Sneaker', price: '$75', offer: '18% Off' },
    { img: './Images/shoe8.jpeg', name: 'Comfy Cruiser', price: '$65', offer: '12% Off' },
    { img: './Images/shoe9.jpeg', name: 'Swift Motion', price: '$85', offer: '10% Off' },
    { img: './Images/shoe10.jpeg', name: 'Sleek Voyager', price: '$95', offer: '22% Off' },
    { img: './Images/shoe11.jpeg', name: 'Cloud Comfort', price: '$100', offer: '15% Off' },
    { img: './Images/shoe12.jpeg', name: 'Prime Flex', price: '$120', offer: '20% Off' },
    { img: './Images/shoe13.jpeg', name: 'Sport Edge', price: '$130', offer: '18% Off' },
    { img: './Images/shoe14.jpeg', name: 'Smooth Sprint', price: '$140', offer: '10% Off' },
    { img: './Images/shoe15.jpeg', name: 'Flex Fusion', price: '$150', offer: '25% Off' },
    { img: './Images/16th.webp', name: 'Bold Trek', price: '$155', offer: '15% Off' },
    { img: './Images/18th.webp', name: 'Elite Trainer', price: '$165', offer: '18% Off' },
    { img: './Images/8th.webp', name: 'Pure Pulse', price: '$175', offer: '20% Off' },
    { img: './Images/9th.webp', name: 'Active Glide', price: '$185', offer: '22% Off' },
    { img: './Images/10th.jpeg', name: 'Urban Nomad', price: '$195', offer: '10% Off' },
    { img: './Images/11th.jpeg', name: 'Aero Motion', price: '$205', offer: '15% Off' },
    { img: './Images/12th.jpeg', name: 'Core Classic', price: '$215', offer: '18% Off' },
    { img: './Images/13th.webp', name: 'Comfort Craft', price: '$225', offer: '20% Off' },
    { img: './Images/14th.webp', name: 'Heritage High', price: '$235', offer: '25% Off' },
    { img: './Images/16th.webp', name: 'Zen Walk', price: '$245', offer: '15% Off' }
  ];

  // Render the products in a grid layout
  return (
    <div className="container mx-auto p-4 mt-[130px]">
    <div className="text-black text-center font-bold text-4xl mb-10 ">Order Now</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-black rounded-t-3xl border-black ">
        {products.map((product, index) => (
          <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg text-center">
            <img src={product.img} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-full" />
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-green-600 mt-2">{product.price}</p>
            <p className="text-red-500 text-sm mt-1">{product.offer}</p>
            <button className="mt-4 bg-yellow-300 text-white  font-bold py-2 px-4 rounded hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderNow;
