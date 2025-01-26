// src/pages/LoanCalculator.js
import React, { useState } from 'react';

const LoanCalculator = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [loanBreakdown, setLoanBreakdown] = useState(null);

  const handleCalculate = () => {
    // Send data to the backend for loan calculation
    fetch('http://localhost:5000/api/calculate-loan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category,
        subcategory,
        initialDeposit,
        loanPeriod,
      }),
    })
      .then((response) => response.json())
      .then((data) => setLoanBreakdown(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Loan Calculator</h1>
      <div className="mt-4">
        <label>Category:</label>
        <select
          className="p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Wedding Loans">Wedding Loans</option>
          <option value="Home Construction Loans">Home Construction Loans</option>
          <option value="Business Startup Loans">Business Startup Loans</option>
          <option value="Education Loans">Education Loans</option>
        </select>
      </div>

      <div className="mt-4">
        <label>Subcategory:</label>
        <select
          className="p-2 rounded"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          {category === 'Wedding Loans' && (
            <>
              <option value="Valima">Valima</option>
              <option value="Furniture">Furniture</option>
              <option value="Valima Food">Valima Food</option>
              <option value="Jahez">Jahez</option>
            </>
          )}
          {category === 'Home Construction Loans' && (
            <>
              <option value="Structure">Structure</option>
              <option value="Finishing">Finishing</option>
              <option value="Loan">Loan</option>
            </>
          )}
          {category === 'Business Startup Loans' && (
            <>
              <option value="Buy Stall">Buy Stall</option>
              <option value="Advance Rent for Shop">Advance Rent for Shop</option>
              <option value="Shop Assets">Shop Assets</option>
              <option value="Shop Machinery">Shop Machinery</option>
            </>
          )}
          {category === 'Education Loans' && (
            <>
              <option value="University Fees">University Fees</option>
              <option value="Child Fees Loan">Child Fees Loan</option>
            </>
          )}
        </select>
      </div>

      <div className="mt-4">
        <label>Initial Deposit:</label>
        <input
          type="number"
          className="p-2 rounded"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label>Loan Period (Years):</label>
        <input
          type="number"
          className="p-2 rounded"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
        />
      </div>

      <button
        onClick={handleCalculate}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Calculate Loan
      </button>

      {loanBreakdown && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3>Loan Breakdown:</h3>
          <p>Monthly Installment: {loanBreakdown.monthlyInstallment}</p>
          <p>Total Loan Amount: {loanBreakdown.totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
