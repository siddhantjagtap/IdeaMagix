import React from 'react';
import logofooter from '../assets/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Hospitals</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Apollo Hospital Delhi</a></li>
              <li><a href="#" className="hover:text-blue-400">Medanta Hospital Gurgaon</a></li>
              <li><a href="#" className="hover:text-blue-400">Max Hospital Delhi</a></li>
              <li><a href="#" className="hover:text-blue-400">Jaslok hospital Mumbai</a></li>
              <li><a href="#" className="hover:text-blue-400">Artemis hospital Gurgaon</a></li>
              <li><a href="#" className="hover:text-blue-400">Fortis Hospital Gurgaon</a></li>
              <li><a href="#" className="hover:text-blue-400">View All</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Speciality Treatments</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Knee Replacement Surgeon</a></li>
              <li><a href="#" className="hover:text-blue-400">Urologist</a></li>
              <li><a href="#" className="hover:text-blue-400">Spine Surgeon</a></li>
              <li><a href="#" className="hover:text-blue-400">ENT Surgeons</a></li>
              <li><a href="#" className="hover:text-blue-400">Orthopedic</a></li>
              <li><a href="#" className="hover:text-blue-400">Cardiologist</a></li>
              <li><a href="#" className="hover:text-blue-400">View All</a></li>
            </ul>
          </div>
          <div>
            <div className="bg-white text-gray-800 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-2">Join Mediretreats</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, contetuer adipiscing elit, sed dia nonumed</p>
            </div>
            <h3 className="text-lg font-semibold mb-4">Medical Tourism Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Medical Tourism in India</a></li>
              <li><a href="#" className="hover:text-blue-400">Medical Tourism in Sri Lanka</a></li>
              <li><a href="#" className="hover:text-blue-400">Medical Tourism in UAE</a></li>
              <li><a href="#" className="hover:text-blue-400">View All</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <img src={logofooter} alt="Aafiya Mediretreats" className="h-16 mb-4" />
            <p className="text-sm text-gray-400 max-w-2xl">
              Aafiya Mediretreats is a free, confidential, independent resource for patients and industry providers. Our mission is to provide a central portal where patients, Medical Tourism providers, hospitals, clinics, employers, and insurance companies can all find the information they need. Our site focuses on patients looking for specific knowledge in the fields of medical tourism, dental tourism, and health tourism.
            </p>
          </div>
          <div className="text-left md:text-right">
            <h3 className="text-lg font-semibold mb-4">Follow Us On</h3>
            <div className="flex space-x-6 justify-start md:justify-end mb-6">
              <a href="#" className="text-3xl hover:text-blue-500 transition-colors duration-300">
                <FaFacebookF className="text-blue-600" />
              </a>
              <a href="#" className="text-3xl hover:text-blue-400 transition-colors duration-300">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="#" className="text-3xl hover:text-pink-500 transition-colors duration-300">
                <FaInstagram className="text-pink-500" />
              </a>
              <a href="#" className="text-3xl hover:text-red-500 transition-colors duration-300">
                <FaYoutube className="text-red-600" />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <p className="text-2xl font-bold text-blue-400">+91 9856555666</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">Copyright © 2020 Aafiya Mediretreats. All Rights Reserved. Designed by Ideamagix.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Terms And Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;