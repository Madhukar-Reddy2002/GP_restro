import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Restaurant Name</h2>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">+1234567890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#menu" className="hover:text-gray-400">Menu</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-lg hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-lg hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-lg hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
