import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaSearch, FaLanguage, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { MdEmail, MdPhone } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full relative z-50">
      <div className="">
        {/* Top bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 border-b px-">
  <div className="flex items-center justify-between w-full lg:w-auto">
    <div className="flex items-center space-x-4">
      <img src="/src/assets/logo.png" alt="Aafiya Mediretreats" className="h-14 w-[14rem] lg:h-16" />
      <img src="/src/assets/secondlogo.png" alt="Secondary Logo" className="h-10 w-auto lg:h-14 hidden lg:block" />
    </div>
    <div className="flex items-center lg:hidden">
      <FaLanguage className="h-6 w-6 mr-2 text-blue-500" />
      <select className="border-none bg-transparent text-sm">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="hi">Hindi</option>
        <option value="ja">Japanese</option>
        <option value="ar">Arabic</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  </div>
  <div className="hidden lg:flex lg:flex-row items-center justify-center lg:justify-end flex-grow w-full">
    <div className="flex lg:items-center lg:justify-between gap-4 w-full max-w-3xl">
      <div className="flex items-center justify-center lg:justify-start">
        <HiOutlineClipboardList className="h-8 w-8 mr-2 text-blue-500" />
        <div>
          <span className="text-gray-500 font-bold text-xs block">Second Medical Opinion</span>
          <span className="font-semibold text-sm">Book Consultation</span>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <MdPhone className="h-8 w-8 mr-2 text-blue-500" />
        <div>
          <span className="text-gray-500 font-bold text-xs block">Call Us On</span>
          <span className="font-semibold text-sm">985 896 2222</span>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <MdEmail className="h-8 w-8 mr-2 text-blue-500" />
        <div>
          <span className="text-gray-500 font-bold text-xs block">Email Us On</span>
          <span className="font-semibold text-sm">info@mediretreats.com</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center lg:justify-start">
        <FaLanguage className="h-8 w-8 mr-2 text-blue-500" />
        <select className="border-none bg-transparent text-sm">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="hi">Hindi</option>
          <option value="ja">Japanese</option>
          <option value="ar">Arabic</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </div>
  </div>
</div>
        {/* Navigation menu */}
        <div className="bg-blue-500 text-white">
          <div className="container mx-auto flex justify-between items-center py-2 px-4 relative">
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
            <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 absolute md:relative left-0 right-0 top-full md:top-auto bg-blue-500 md:bg-transparent z-50 p-4 md:p-0 text-sm`}>
              <li><Link to="/" className="hover:text-blue-200 block py-1">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-200 block py-1">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-blue-200 block py-1">Treatments +</Link></li>
              <li><Link to="/destinations" className="hover:text-blue-200 block py-1">Destinations +</Link></li>
              <li><Link to="/hospitals" className="hover:text-blue-200 block py-1">Hospitals</Link></li>
              <li><Link to="/faqs" className="hover:text-blue-200 block py-1">FAQs</Link></li>
              <li><Link to="/blog" className="hover:text-blue-200 block py-1">Blog</Link></li>
              <li><Link to="/quote" className="hover:text-blue-200 block py-1">Request A Quote</Link></li>
            </ul>
            <div className="relative hidden md:block">
              <input type="text" placeholder="Search" className="pl-10 pr-4 py-1 bg-blue-600 border border-blue-400 text-white placeholder-blue-200 text-sm" />
              <FaSearch className="h-5 w-5 absolute left-3 top-2 text-blue-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-500 z-50">
          <ul className="p-4 space-y-2">
            <li><Link to="/" className="text-white hover:text-blue-200 block py-1">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-200 block py-1">About Us</Link></li>
            <li><Link to="/treatments" className="text-white hover:text-blue-200 block py-1">Treatments +</Link></li>
            <li><Link to="/destinations" className="text-white hover:text-blue-200 block py-1">Destinations +</Link></li>
            <li><Link to="/hospitals" className="text-white hover:text-blue-200 block py-1">Hospitals</Link></li>
            <li><Link to="/faqs" className="text-white hover:text-blue-200 block py-1">FAQs</Link></li>
            <li><Link to="/blog" className="text-white hover:text-blue-200 block py-1">Blog</Link></li>
            <li><Link to="/quote" className="text-white hover:text-blue-200 block py-1">Request A Quote</Link></li>
          </ul>
          <div className="relative p-4">
            <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 bg-blue-600 border border-blue-400 text-white placeholder-blue-200 text-sm rounded" />
            <FaSearch className="h-5 w-5 absolute left-7 top-1/2 transform -translate-y-1/2 text-blue-200" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
