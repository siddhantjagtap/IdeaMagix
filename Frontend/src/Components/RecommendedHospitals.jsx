import React, { useState } from 'react';

const RecommendedHospitals = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const hospitalsPerPage = 3;

  const hospitals = [
    { name: 'Apollo Hospital', location: 'Bangalore', image: 'https://safartibbi.com/wp-content/uploads/2022/11/apolo-1.jpg' },
    { name: 'Medanta Hospital', location: 'Gurgaon', image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Medanta_the_medicity_hospital.jpg' },
    { name: 'Jaslok Hospital', location: 'Mumbai', image: 'https://images1-fabric.practo.com/jaslok-hospital-mumbai-1472463792-57c403b0bc6ab.jpg' },
    { name: 'Fortis Hospital', location: 'Delhi', image: 'https://clinicsoncall.com/wp-content/uploads/2021/05/bolnicza-fortis-bangalor-korpus.jpg' },
    { name: 'AIIMS', location: 'New Delhi', image: 'https://www.healthcareitnews.com/sites/hitn/files/Screen%20Shot%202022-10-27%20at%201.55.04%20PM.jpg' },
    { name: 'Manipal Hospital', location: 'Bangalore', image: 'https://content.jdmagicbox.com/v2/comp/bangalore/h7/080pxx80.xx80.170208115635.x1h7/catalogue/manipal-hospitals-malleswaram-bangalore-manipal-hospitals-0ngofbzn4f.jpg' },
    { name: 'Max Healthcare', location: 'Delhi', image: 'https://etimg.etb2bimg.com/thumb/msid-109369632,imgsize-92552,width-1200,height=765,overlay-ethealth/hospitals/max-healthcare-to-invest-rs-2500-crore-for-healthcare-infrastructure-development-in-lucknow.jpg' },
    { name: 'Narayana Health', location: 'Bangalore', image: 'https://www.jointreplacementsurgeryhospitalindia.com/hospital/narayana-images/narayana-health-banner.jpg' },
    { name: 'Kokilaben Hospital', location: 'Mumbai', image: 'https://www.livontaglobal.com/wp-content/uploads/2018/10/displayDoctorImage_kokilaben.jpg' },
  ];

  const pageCount = Math.ceil(hospitals.length / hospitalsPerPage);

  const displayedHospitals = hospitals.slice(
    currentPage * hospitalsPerPage,
    (currentPage + 1) * hospitalsPerPage
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Hospitals</h2>
        <h3 className="text-2xl text-blue-500 font-bold text-center mb-8">Recommended Hospitals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[26rem] ">
          {displayedHospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-[2px] border-dotted border-pink-500">
              <img src={hospital.image} alt={hospital.name} className="w-full h-[20rem] object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                <p className="text-gray-600">{hospital.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentPage(index)}
            ></button>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-blue-500 font-bold py-2 px-4 rounded">
            Explore all Hospitals
          </button>
        </div>
      </div>
      <div className="bg-blue-500 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Stay healthy and strong to enjoy life</h2>
          <h3 className="text-4xl font-bold text-center mb-8">We have team of healthcare experts</h3>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
              Get In Touch
            </button>
            <span className="text-2xl font-bold">+91 898 777 9999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedHospitals;