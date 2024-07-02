import React from 'react';

const NeedHelp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-4xl font-bold mb-4 text-blue-500">Need Help?</h3>
      <p className="mb-4 text-blue-500">Just let us know. We will be happy to assist you.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" />
        <textarea placeholder="Describe Your Treatment Requirement" className="w-full p-2 border rounded" rows="4"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Send Enquiry</button>
      </form>
    </div>
  );
};

export default NeedHelp;
