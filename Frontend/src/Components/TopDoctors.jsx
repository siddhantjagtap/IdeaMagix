// TopDoctors.js
import React, { useState } from 'react';

const TopDoctors = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const doctors = [
    {
      name: "Dr. Faique Falke",
      location: "Musaffah Industrial - Abu Dhabi",
      specialization: "Doctor Degree & Specialist",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. Sarah Johnson",
      location: "Musaffah Industrial - Abu Dhabi",
      specialization: "Doctor Degree & Specialist",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. Michael Chen",
      location: "Musaffah Industrial - Abu Dhabi",
      specialization: "Doctor Degree & Specialist",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. Emma Brown",
      location: "Khalifa City - Abu Dhabi",
      specialization: "Cardiologist",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. John Smith",
      location: "Al Zahiyah - Abu Dhabi",
      specialization: "Pediatrician",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. Aisha Khan",
      location: "Al Bateen - Abu Dhabi",
      specialization: "Neurologist",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. David Lee",
      location: "Al Khalidiyah - Abu Dhabi",
      specialization: "Dermatologist",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. Maria Garcia",
      location: "Madinat Zayed - Abu Dhabi",
      specialization: "Ophthalmologist",
      image: "https://placeholder.com/300x200/ffcccb"
    },
    {
      name: "Dr. Robert Wilson",
      location: "Reem Island - Abu Dhabi",
      specialization: "Orthopedic Surgeon",
      image: "https://placeholder.com/300x200/ffcccb"
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
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-64">
            <img src={doctor.image} alt={doctor.name} className="w-[90%] mx-auto mt-[0.75rem] h-48 object-cover" />
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