import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500">
      <div className="container flex justify-between mx-auto">
        {/* Logo on the left */}
        <Link to="/" className="text-xl font-bold text-white">Your Logo</Link>


        {/* Search box on the right */}
        <div className='flex-grow'>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border-none rounded-md"
          />
        </div>
        
        {/* Category links in the center */}
        <div >
          <Link to="/home" className="mx-4 text-white">Home</Link>
          <Link to="/cart" className="mx-4 text-white">Cart</Link>
          <Link to="/categories" className="mx-4 text-white">Categories</Link>
          {/* Add more category links as needed */}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
