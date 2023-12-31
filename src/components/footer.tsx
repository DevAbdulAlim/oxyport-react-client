const Footer = () => {
  return (
    <footer className="p-8 text-white bg-gray-800">
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
        {/* Column 1: About Us */}
        <div>
          <h3 className="mb-4 text-xl font-bold">About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nulla vitae elit blandit vulputate.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
