// src/pages/UpdateProfile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+923001234567');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated data to the server or local state
    console.log('Profile updated', { email, phone });
    navigate('/user-dashboard'); // Redirect to User Dashboard after update
  };

  return (
    <div className="max-w-lg mx-auto p-8 space-y-6">
      <h2 className="text-3xl font-semibold text-center">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-2 p-2 border rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            className="mt-2 p-2 border rounded-md w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
