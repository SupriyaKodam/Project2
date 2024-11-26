// Nike.jsx
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Adidas = () => {
  const navigate = useNavigate();
  const [selectedShoe,setSelectedShoe]=useState(null);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  const shoes = [
    { id: 1, name: 'adidas Air Max', price: '$120', imgSrc: '/Images/shoe8.jpeg' },
    { id: 2, name: 'adidas Air Force 1', price: '$110', imgSrc: '/Images/shoe9.jpeg' },
    { id: 3, name: 'adidas Jordan', price: '$150', imgSrc: '/Images/shoe10.jpeg' },
    { id: 4, name: 'adidas Pegasus', price: '$130', imgSrc: '/Images/shoe11.jpeg' },
    { id: 5, name: 'adidas Free RN', price: '$100', imgSrc: '/Images/shoe12.jpeg' },
    { id: 6, name: 'adidas React Infinity', price: '$140', imgSrc: '/Images/shoe13.jpeg' },
  ];

  const handleSelectOptions =(shoe) =>{
    navigate('/shoe-details',{state:{shoe}});
  }

  return (
    <div id="adidas" className="flex justify-center mt-40 mb-20">
      <div className="w-full md:w-3/4 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Adidas Collection</h1>
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
                <button onClick={()=>handleSelectOptions(shoe)} className="mt-4 w-60 px-4 py-2 bg-black text-white rounded hover:bg-blue-600">
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

export default Adidas;
