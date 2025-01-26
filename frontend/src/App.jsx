// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoanCalculatorPage from './pages/LoanCalculatorPage';
import LoanRequestPage from './pages/LoanRequestPage';
import UserDashboardPage from './pages/UserDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/SignIn';
import UpdateProfile from './pages/UpdateProfile';


const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/loan-calculator" element={<LoanCalculatorPage />} />
          <Route path="/loan-request" element={<LoanRequestPage />} />
          <Route path="/user-dashboard" element={<UserDashboardPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
