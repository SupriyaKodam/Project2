import React from 'react';
import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  return (
    <div className="py-16 px-8 mt-[130px] bg-black">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl text-yellow-300 font-bold">About Us</h1>
        <p className="mt-4 text-lg text-white">
          Discover the story behind our brand and our commitment to quality.
        </p>
      </div>

      {/* First Section - Our Mission */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-yellow-300">Our Mission</h2>
          <p className="mt-4 text-white">
            At Mark, we believe shoes are more than just footwear; they're a way to express
            individuality and confidence. We strive to design shoes that not only look great but feel
            great too, empowering you to step out boldly, wherever life takes you.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="./Images/Men1.jpeg" alt="Our Mission" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>

      {/* Second Section - Questions Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-yellow-300">What Makes Us Unique?</h2>
        <p className="mt-4 text-white">
          We know you have questions—let us tell you what makes us special.
        </p>
      </div>

      {/* Questions with Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="./Images/3rd.jpeg" alt="Unique Style" className="w-32 h-32 mb-4 rounded-full shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800">Why Style Matters?</h3>
          <p className="mt-2 text-gray-600">
            Our shoes combine the latest trends with timeless designs to make sure you're always in style.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="./Images/2nd.jpeg" alt="Quality Promise" className="w-32 h-32 mb-4 rounded-full shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800">What About Quality?</h3>
          <p className="mt-2 text-gray-600">
            Every pair is crafted with the finest materials to ensure comfort, durability, and long-lasting wear.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="./Images/4th.jpeg" alt="Comfort First" className="w-32 h-32 mb-4 rounded-full shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800">How Comfortable Are They?</h3>
          <p className="mt-2 text-gray-600">
            Comfort is key. Our ergonomic designs and premium materials ensure a snug fit that feels just right.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="./Images/6th.webp" alt="Sustainability" className="w-32 h-32 mb-4 rounded-full shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800">Do We Care About the Environment?</h3>
          <p className="mt-2 text-gray-600">
            Absolutely. We use sustainable practices to reduce waste and create eco-friendly products.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="./Images/5th.jpeg" alt="Customer Service" className="w-32 h-32 mb-4 rounded-full shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800">What About Customer Service?</h3>
          <p className="mt-2 text-gray-600">
            Our customer service team is dedicated to ensuring that every interaction with us is positive and helpful.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src="./Images/shoe11.jpeg" alt="Innovation" className="w-32 h-32 mb-4 rounded-full shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800">How Do We Innovate?</h3>
          <p className="mt-2 text-gray-600">
            We continually research and invest in innovative technology to deliver the best shoes for you.
          </p>
        </div>
      </div>

      {/* Final Section - Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Step Into Quality</h2>
        <p className="text-lg text-white mb-8">
          Whether you're looking for something stylish, comfortable, or eco-friendly, we've got you covered.
        </p>
        <button className="bg-yellow-300 font-bold text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-200">
          Shop Our Collection
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
