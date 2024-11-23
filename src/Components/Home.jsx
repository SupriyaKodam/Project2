import React from 'react'

const Home = () => {
  return (
    <div id="home">
    <div
    className="relative">
      <img src="./Images/blueshoes.jpeg" alt="blueshoes" className="w-full h-[100vh] left-0 mt-[80px] object-cover sm:object-center md:object-top lg:object-center" />
      <div className="absolute top-[120px] left-2 text-black text-3xl font-extrabold
      sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
         <h1>shop the latest shoes collection</h1>
      </div>
    </div>
    </div>
  )
}

export default Home
