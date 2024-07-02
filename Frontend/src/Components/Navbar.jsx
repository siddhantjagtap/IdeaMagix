import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaSearch, FaLanguage, FaClipboardList } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { MdEmail, MdPhone } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="bg-white w-full">
      <div className="">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 border-b px-4">
          <div className="flex items-center space-x-4">
            <img src="/src/assets/logo.png" alt="Aafiya Mediretreats" className="h-16 w-auto" />
            <img src="/src/assets/secondlogo.png" alt="Secondary Logo" className="h-14 w-auto" />
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <HiOutlineClipboardList className="h-8 w-8 mr-2 text-blue-500" />
              <div>
                <span className="text-gray-500 font-bold text-xs block">Second Medical Opinion</span>
                <span className="font-semibold text-sm">Book Consultation</span>
              </div>
            </div>

            <div className="flex items-center">
              <MdPhone className="h-8 w-8 mr-2 text-blue-500" />
              <div>
                <span className="text-gray-500 font-bold text-xs block">Call Us On</span>
                <span className="font-semibold text-sm">985 896 2222</span>
              </div>
            </div>

            <div className="flex items-center">
              <MdEmail className="h-8 w-8 mr-2 text-blue-500" />
              <div>
                <span className="text-gray-500 font-bold text-xs block">Email Us On</span>
                <span className="font-semibold text-sm">info@mediretreats.com</span>
              </div>
            </div>

            <div className="flex items-center pr-2">
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

        {/* Navigation menu */}
        <div className="flex justify-between items-center py-2 bg-blue-500 text-white">
          <ul className="flex space-x-6 pl-12 text-sm">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">About Us</a></li>
            <li><a href="#" className="hover:text-blue-200">Treatments +</a></li>
            <li><a href="#" className="hover:text-blue-200">Destinations +</a></li>
            <li><a href="#" className="hover:text-blue-200">Hospitals</a></li>
            <li><a href="#" className="hover:text-blue-200">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-200">Blog</a></li>
            <li><a href="#" className="hover:text-blue-200">Request A Quote</a></li>
          </ul>
          <div className="relative pr-4">
            <input type="text" placeholder="Search" className="pl-10 pr-4 py-1 bg-blue-600 border border-blue-400 text-white placeholder-blue-200" />
            <FaSearch className="h-5 w-5 absolute left-3 top-2 text-blue-200" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
