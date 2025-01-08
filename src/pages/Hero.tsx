import { BsCardList, BsShieldCheck, BsPeople } from "react-icons/bs"; // Import icons from react-icons

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-green-900 md:h-screen">
      {/* Content Container on Left */}
      <div className="z-10 p-10 text-center text-white bg-green-900 bg-opacity-70 2xl:w-1/2">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
          Welcome to GreenMart
        </h1>
        <p className="mb-8 text-lg">
          Discover fresh, locally sourced organic foods and vegetables.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-6 text-green-900 bg-green-100 rounded-lg shadow-md">
            <div className="bg-green-600 p-6 rounded-full mb-4">
              <BsCardList className="text-white text-3xl" /> {/* Icon */}
            </div>
            <h2 className="mb-2 text-lg font-bold">Wide Selection</h2>
            <p className="text-base">
              Choose from a wide variety of organic produce and products.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-green-900 bg-green-100 rounded-lg shadow-md">
            <div className="bg-green-600 p-6 rounded-full mb-4">
              <BsShieldCheck className="text-white text-3xl" /> {/* Icon */}
            </div>
            <h2 className="mb-2 text-lg font-bold">Quality Guaranteed</h2>
            <p className="text-base">
              We ensure the highest quality standards for all our products.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-green-900 bg-green-100 rounded-lg shadow-md">
            <div className="bg-green-600 p-6 rounded-full mb-4">
              <BsPeople className="text-white text-3xl" /> {/* Icon */}
            </div>
            <h2 className="mb-2 text-lg font-bold">Local Farmers</h2>
            <p className="text-base">
              Support local farmers and sustainable agriculture practices.
            </p>
          </div>
        </div>
        <button className="px-6 py-3 mt-8 text-white transition duration-300 bg-green-700 rounded-full hover:bg-green-900">
          Explore Now
        </button>
      </div>

      {/* Image on Right with Transparent Overlay */}
      <div className="absolute inset-y-0 left-0 w-1/2">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src="./img/slider-02.jpg"
          alt="Organic Food"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src="./img/hero-image.jpg"
          alt="Organic Food"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
