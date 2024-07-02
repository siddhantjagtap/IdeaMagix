import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '/src/assets/kneebackground3.webp';
import TreatmentOverview from '../Components/TreatmentOverview';
import { FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Second Navbar
      <div className="bg-gray-700 text-white relative z-50">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
            <ul className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <li><Link to="/" className="hover:text-gray-400 block py-1">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-400 block py-1">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-gray-400 block py-1">Treatments +</Link></li>
              <li><Link to="/destinations" className="hover:text-gray-400 block py-1">Destinations +</Link></li>
              <li><Link to="/hospitals" className="hover:text-gray-400 block py-1">Hospitals</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-400 block py-1">FAQs</Link></li>
              <li><Link to="/blog" className="hover:text-gray-400 block py-1">Blog</Link></li>
              <li><Link to="/quote" className="hover:text-gray-400 block py-1">Request A Quote</Link></li>
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-700 z-50">
            <ul className="p-4 space-y-2">
              <li><Link to="/" className="text-white hover:text-gray-400 block py-1">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-400 block py-1">About Us</Link></li>
              <li><Link to="/treatments" className="text-white hover:text-gray-400 block py-1">Treatments +</Link></li>
              <li><Link to="/destinations" className="text-white hover:text-gray-400 block py-1">Destinations +</Link></li>
              <li><Link to="/hospitals" className="text-white hover:text-gray-400 block py-1">Hospitals</Link></li>
              <li><Link to="/faqs" className="text-white hover:text-gray-400 block py-1">FAQs</Link></li>
              <li><Link to="/blog" className="text-white hover:text-gray-400 block py-1">Blog</Link></li>
              <li><Link to="/quote" className="text-white hover:text-gray-400 block py-1">Request A Quote</Link></li>
            </ul>
          </div>
        )}
      </div> */}

      <div
        className="bg-cover bg-center text-white object-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4 md:px-24 py-8 md:py-12">
          <div className="text-xs md:text-sm mb-4">
            <span className="text-white">Home</span> &gt;
            <span className="text-white">Treatments</span> &gt;
            <span className="text-white">Orthopaedics</span> &gt;
            <span className="text-white">Knee Replacement</span>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Total Knee Replacement</h1>
              <p className="mb-6">
                Total knee replacement is a surgery to remove and replace the whole
                damaged knee joint with an artificial joint.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <TreatmentOverview />
    </>
  );
};

export default Home;
