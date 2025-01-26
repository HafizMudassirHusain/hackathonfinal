// src/pages/UserDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  // Sample loan status data
  const [loanStatus, setLoanStatus] = useState('Pending'); // Example: 'Pending', 'Approved', 'Rejected'
  
  // Sample user details
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+923001234567',
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">User Dashboard</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Welcome, {user.name}!</h3>
          <p className="mt-2 text-gray-600">Here's an overview of your loan requests and personal details.</p>
        </div>

        {/* Loan Status Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Loan Application Status</h3>
          <div className="mt-4">
            <p className="text-gray-700">
              Your current loan status: 
              <span className={`font-semibold ${loanStatus === 'Pending' ? 'text-yellow-500' : loanStatus === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>
                {loanStatus}
              </span>
            </p>
            <Link to="/loan-calculator" className="mt-4 inline-block text-blue-600 hover:underline">
              Apply for a new loan
            </Link>
          </div>
        </div>

        {/* Loan Request Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Your Loan Applications</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <p className="text-gray-600">Wedding Loan</p>
              <p className="text-blue-600">View Details</p>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <p className="text-gray-600">Home Construction Loan</p>
              <p className="text-blue-600">View Details</p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="text-gray-600">Business Startup Loan</p>
              <p className="text-blue-600">View Details</p>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
          </div>
          <div className="mt-6">
            <Link to="/update-profile" className="text-blue-600 hover:underline">
              Update Your Profile
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-6">
          <Link
            to="/loan-calculator"
            className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Apply for a Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
