// src/pages/LoanRequestPage.js
import React from 'react';
import UserForm from '../components/UserForm';

const LoanRequestPage = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold text-center">Loan Request</h1>
      <UserForm />
    </div>
  );
};

export default LoanRequestPage;
