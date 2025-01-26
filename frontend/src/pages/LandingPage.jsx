// src/pages/LandingPage.js
import React from 'react';
import LoanCategoryCard from '../components/LoanCategoryCard';
import { Link } from 'react-router-dom';
import founder from '../assets/founder.jpg'
const categories = ['Wedding Loans', 'Home Construction Loans', 'Business Startup Loans', 'Education Loans'];

const LandingPage = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-blue-700">Saylani Microfinance</h1>
        <p className="text-xl text-gray-600">
          Empowering individuals and families with the financial support they need to grow and thrive.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="bg-blue-100 p-8 rounded-xl shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-center">What We Do</h2>
        <p className="text-lg text-center text-gray-700">
          Saylani Microfinance provides interest-free loans under the Qarze Hasana program to support individuals in need. 
          Whether you are planning for a wedding, building your dream home, starting a new business, or pursuing education, 
          we are here to help you realize your goals.
        </p>
      </section>

      {/* Loan Categories Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Choose Your Loan Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <LoanCategoryCard title={category} subcategories={['Subcategory 1', 'Subcategory 2']} />
              <Link
                to="/loan-calculator"
                className="block mt-4 text-center text-blue-500 hover:text-blue-700 hover:underline"
              >
                Calculate Loan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Guidance Section */}
      <section className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-center">How to Get Started</h2>
        <div className="text-center text-gray-700">
          <p className="mb-4">
            1. Choose a loan category that fits your needs.
          </p>
          <p className="mb-4">
            2. Use our loan calculator to estimate your repayment schedule.
          </p>
          <p className="mb-4">
            3. Proceed to submit your loan request and provide necessary details.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white p-8 rounded-xl shadow-lg space-y-4">
        <h2 className="text-3xl font-semibold text-center">Meet the Founder</h2>
        <div className="flex justify-center items-center space-x-6">
          <img
            src={founder}
            alt="Founder"
            className="rounded-full w-32 h-32 object-cover"
          />
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-800">Molana bashir Faroqi</p>
            <p className="text-gray-600">
              Founder & CEO of Saylani Microfinance. John started the organization with a mission to uplift individuals
              and provide them with the financial freedom to achieve their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-blue-700">Ready to take the next step?</h3>
        <Link
          to="/loan-calculator"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full text-xl hover:bg-blue-700 transition-colors duration-300"
        >
          Calculate Your Loan Now
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
