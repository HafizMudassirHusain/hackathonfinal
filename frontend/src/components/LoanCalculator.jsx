// src/components/LoanCalculator.js
import React, { useState } from 'react';

const LoanCalculator = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loanPeriod, setLoanPeriod] = useState(1); // Default loan period is 1 year
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [calculatedLoan, setCalculatedLoan] = useState(null);

  const loanLimits = {
    "Wedding Loans": 500000,
    "Home Construction Loans": 1000000,
    "Business Startup Loans": 1000000,
    "Education Loans": 'Based on requirement',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate loan details
    const loanAmount = loanLimits[selectedCategory] - initialDeposit;
    const monthlyRepayment = (loanAmount / loanPeriod / 12).toFixed(2); // Simplified calculation for now
    const totalRepayment = (monthlyRepayment * loanPeriod * 12).toFixed(2);
    const interest = (totalRepayment - loanAmount).toFixed(2);

    setCalculatedLoan({
      loanAmount,
      monthlyRepayment,
      totalRepayment,
      interest,
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-center">Loan Calculator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="category" className="block w-full text-lg font-medium text-gray-700">Choose Loan Category</label>
          <select
            id="category"
            className="mt-2 p-2 border rounded-md w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="initialDeposit" className="block text-lg font-medium text-gray-700">Initial Deposit</label>
          <input
            type="number"
            id="initialDeposit"
            className="mt-2 p-2 border rounded-md w-full"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="loanPeriod" className="block text-lg font-medium text-gray-700">Loan Period (Years)</label>
          <input
            type="number"
            id="loanPeriod"
            className="mt-2 p-2 border rounded-md w-full"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            min="1"
            required
          />
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Calculate Loan
        </button>
      </form>

      {calculatedLoan && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Loan Breakdown</h3>
          <div className="mt-4 text-lg">
            <p><strong>Loan Amount: </strong>PKR {calculatedLoan.loanAmount}</p>
            <p><strong>Monthly Repayment: </strong>PKR {calculatedLoan.monthlyRepayment}</p>
            <p><strong>Total Repayment: </strong>PKR {calculatedLoan.totalRepayment}</p>
            <p><strong>Total Interest: </strong>PKR {calculatedLoan.interest}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
