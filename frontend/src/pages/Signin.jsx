// src/pages/Signin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulate checking the user's credentials and role
      // In a real app, this would be a backend request
      if (email === 'admin@gmail.com' && password === 'admin') {
        // Redirect to Admin Dashboard if credentials match
        console.log('Admin signed in');
        navigate('/admin-dashboard');
      } else {
        // Otherwise, redirect to User Dashboard
        console.log('User signed in');
        navigate('/user-dashboard');
      }
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 space-y-6">
      <h2 className="text-3xl font-semibold text-center">Sign In</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-2 p-2 border rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-2 p-2 border rounded-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Sign In
        </button>
      </form>

      <p className="text-center text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default Signin;
