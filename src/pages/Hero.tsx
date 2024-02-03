import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(https://th.bing.com/th/id/R.b748065a739b921f0516beddc1c9558b?rik=qMpitOrLDyI71A&pid=ImgRaw&r=0)` }}
      ></div>

      {/* Overlay to add a subtle dark overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-[-1]"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Discover Your Perfect Style
        </h1>
        <p className="text-lg mb-8">
          Explore our latest collection and find the perfect items for your wardrobe.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
