// TopDoctors.js
import React, { useState } from 'react';

const TopDoctors = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const doctors = [
    {
      name: "Dr. Faique Falke",
      location: "Musaffah Industrial - Abu Dhabi",
      specialization: "Doctor Degree & Specialist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Sarah Johnson",
      location: "Musaffah Industrial - Abu Dhabi",
      specialization: "Doctor Degree & Specialist",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Michael Chen",
      location: "Musaffah Industrial - Abu Dhabi",
      specialization: "Doctor Degree & Specialist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Emma Brown",
      location: "Khalifa City - Abu Dhabi",
      specialization: "Cardiologist",
      image: "https://images.pexels.com/photos/7659872/pexels-photo-7659872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. John Smith",
      location: "Al Zahiyah - Abu Dhabi",
      specialization: "Pediatrician",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. Aisha Khan",
      location: "Al Bateen - Abu Dhabi",
      specialization: "Neurologist",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. David Lee",
      location: "Al Khalidiyah - Abu Dhabi",
      specialization: "Dermatologist",
      image: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dr. Maria Garcia",
      location: "Madinat Zayed - Abu Dhabi",
      specialization: "Ophthalmologist",
      image: "https://plus.unsplash.com/premium_photo-1661766743908-ca87957f4bb2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dr. Robert Wilson",
      location: "Reem Island - Abu Dhabi",
      specialization: "Orthopedic Surgeon",
      image: "https://images.pexels.com/photos/8460090/pexels-photo-8460090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const doctorsPerPage = 3;
  const pageCount = Math.ceil(doctors.length / doctorsPerPage);

  const displayedDoctors = doctors.slice(
    currentPage * doctorsPerPage,
    (currentPage + 1) * doctorsPerPage
  );

  return (
    <div className="bg-blue-50 p-8 rounded-lg">
      <h2 className="text-center mb-2">
        <span className="text-red-500 text-sm font-normal">Doctors</span>
      </h2>
      <h3 className="text-center text-2xl font-bold mb-6">
        Top Orthopaedic <span className="text-blue-500">Doctors</span>
      </h3>
      <div className="flex justify-center space-x-6">
        {displayedDoctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md w-[24rem] overflow-hidden w-64">
            <img src={doctor.image} alt={doctor.name} className="w-[90%] mx-auto mt-[0.75rem]  h-[24rem] object-cover" />
            <div className="p-4">
              <h4 className="text-red-500 font-semibold text-center">{doctor.name}</h4>
              <p className="text-sm text-gray-600 text-center">{doctor.location}</p>
              <p className="text-xs text-gray-500 mt-1 text-center">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full mx-1 ${i === currentPage ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentPage(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;