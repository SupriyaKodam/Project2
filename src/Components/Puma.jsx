// Nike.jsx
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Puma = () => {
  const navigate = useNavigate();
  const [selectedShoe,setSelectedShoe]=useState(null);
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  const shoes = [
    { id: 1, name: 'puma Air Max', price: '$120', imgSrc: '/Images/shoe14.jpeg' },
    { id: 2, name: 'puma Air Force 1', price: '$110', imgSrc: '/Images/1st.jpeg' },
    { id: 3, name: 'puma Jordan', price: '$150', imgSrc: '/Images/2nd.jpeg' },
    { id: 4, name: 'puma Pegasus', price: '$130', imgSrc: '/Images/3rd.jpeg' },
    { id: 5, name: 'puma Free RN', price: '$100', imgSrc: '/Images/4th.jpeg' },
    { id: 6, name: 'puma React Infinity', price: '$140', imgSrc: '/Images/5th.jpeg' },
  ];

  const handleSelectOptions = (shoe) =>{
    navigate('/shoe-details',{state:{shoe}});
  }

  return (
    <div id="puma" className="flex justify-center mt-40 mb-20">
      <div className="w-full md:w-3/4 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Puma Collection</h1>
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

export default Puma;
