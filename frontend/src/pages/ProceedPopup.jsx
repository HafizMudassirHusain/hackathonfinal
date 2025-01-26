// src/pages/ProceedPopup.js
import React, { useState } from 'react';

const ProceedPopup = ({ onProceed }) => {
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onProceed(cnic, email, name); // Pass the data to the parent component
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl">Enter Your Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <input
              type="text"
              className="p-2 w-full border rounded"
              placeholder="CNIC"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              className="p-2 w-full border rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="p-2 w-full border rounded"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProceedPopup;
