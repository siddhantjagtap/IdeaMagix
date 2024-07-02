import React from 'react';
import backgroundImage from '/src/assets/bgimg.jpg'; // Assuming your image is stored in src/assets/bgimg.jpg
import TreatmentOverview from '../Components/TreatmentOverview'
const Home = () => {
  return (
  <>
    <div
      className="bg-cover bg-center text-white object-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-24 py-12">
        <div className="text-sm mb-4">
          <span className="text-white">Home</span> &gt;
          <span className="text-white">Treatments</span> &gt;
          <span className="text-white">Orthopaedics</span> &gt;
          <span className="text-white">Knee Replacement</span>
        </div>
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-4">Total Knee Replacement</h1>
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
          <TreatmentOverview/>
          </>
  );
};

export default Home;
