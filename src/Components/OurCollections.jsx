import React from 'react';

const OurCollections = () => {
  // Array containing the image paths
  const images = [
    './Images/adidas.jpeg',
    './Images/armour.jpeg',
    './Images/asics.png',
    './Images/bd.jpeg',
    './Images/converse.jpeg',
    './Images/fila.jpeg',
    './Images/jordan.jpeg',
    './Images/mark.png',
    './Images/mc.jpeg',
    './Images/nb.jpeg',
    './Images/nike.jpeg',
    './Images/puma.jpeg',
  ];

  return (
    <div id="collections" className="py-10 bg-gray-100 pb-40">
      <h2 className="text-center text-3xl font-bold mb-8">Our Collections</h2>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center mx-20">
          {images.map((image, index) => (
            <div key={index} className="col-span-1">
              <img src={image} alt={`Item ${index + 1}`} className="w-40 h-auto object-cover rounded-full shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCollections;
