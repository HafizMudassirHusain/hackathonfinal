// src/pages/AdminDashboard.js
import React, { useState } from 'react';

// Sample loan request data
const loanRequests = [
  {
    id: 1,
    userName: 'John Doe',
    category: 'Wedding Loan',
    loanAmount: 50000,
    status: 'Pending',
    email: 'john.doe@example.com',
    city: 'Karachi',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    category: 'Home Construction Loan',
    loanAmount: 200000,
    status: 'Approved',
    email: 'jane.smith@example.com',
    city: 'Lahore',
  },
  {
    id: 3,
    userName: 'Ali Khan',
    category: 'Business Startup Loan',
    loanAmount: 150000,
    status: 'Rejected',
    email: 'ali.khan@example.com',
    city: 'Islamabad',
  },
];

const AdminDashboard = () => {
  const [filter, setFilter] = useState('');

  const handleApprove = (id) => {
    // Update loan request status to Approved
    console.log('Loan Approved for ID:', id);
  };

  const handleReject = (id) => {
    // Update loan request status to Rejected
    console.log('Loan Rejected for ID:', id);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center">Admin Dashboard</h2>
      <p className="mt-4 text-center">Welcome, Admin! Here you can manage all the users and loan requests.</p>

      {/* Loan Requests Overview */}
      <div className="mt-8 mb-4 text-center">
        <h3 className="text-2xl font-semibold">Loan Requests</h3>
        <div className="mt-4 flex justify-center space-x-4">
          <input
            type="text"
            className="p-2 rounded-md border"
            placeholder="Search by City"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Loan Requests Table */}
      <div className="overflow-x-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Loan Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loanRequests
              .filter((loan) => loan.city.toLowerCase().includes(filter.toLowerCase()))
              .map((loan) => (
                <tr key={loan.id}>
                  <td className="px-4 py-2">{loan.userName}</td>
                  <td className="px-4 py-2">{loan.category}</td>
                  <td className="px-4 py-2">{loan.loanAmount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`${
                        loan.status === 'Pending'
                          ? 'text-yellow-500'
                          : loan.status === 'Approved'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{loan.city}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 mr-2"
                      onClick={() => handleApprove(loan.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                      onClick={() => handleReject(loan.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* User Management Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-center">User Management</h3>
        <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold">Users List</h4>
          <ul className="mt-4 space-y-2">
            {/* User List */}
            <li className="flex justify-between py-2 border-b">
              <span>John Doe</span>
              <span className="text-gray-600">Email: john.doe@example.com</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Jane Smith</span>
              <span className="text-gray-600">Email: jane.smith@example.com</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Ali Khan</span>
              <span className="text-gray-600">Email: ali.khan@example.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
