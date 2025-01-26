import { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnic, setCnic] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [guarantorName, setGuarantorName] = useState('');
  const [guarantorEmail, setGuarantorEmail] = useState('');
  const [guarantorCnic, setGuarantorCnic] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !cnic || !category || !subcategory || !initialDeposit || !loanPeriod) {
      setError('Please fill in all fields');
      return;
    } else {
      setError('');
      try {
        const loanData = {
          name,
          email,
          cnic,
          category,
          subcategory,
          initialDeposit,
          loanPeriod,
          guarantors: [
            { name: guarantorName, email: guarantorEmail, cnic: guarantorCnic }
          ]
        };

        const response = await fetch('http://localhost:5000/api/loan/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loanData),
        });

        const result = await response.json();
        if (response.ok) {
          setSuccessMessage('Loan request submitted successfully!');
        } else {
          setError(result.message || 'Failed to submit the loan request');
        }
      } catch (err) {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="text"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
        placeholder="CNIC"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Loan Category"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="text"
        value={subcategory}
        onChange={(e) => setSubcategory(e.target.value)}
        placeholder="Loan Subcategory"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="number"
        value={initialDeposit}
        onChange={(e) => setInitialDeposit(e.target.value)}
        placeholder="Initial Deposit"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="number"
        value={loanPeriod}
        onChange={(e) => setLoanPeriod(e.target.value)}
        placeholder="Loan Period (in years)"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <h3>Guarantor Information</h3>
      <input
        type="text"
        value={guarantorName}
        onChange={(e) => setGuarantorName(e.target.value)}
        placeholder="Guarantor Name"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="email"
        value={guarantorEmail}
        onChange={(e) => setGuarantorEmail(e.target.value)}
        placeholder="Guarantor Email"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      <input
        type="text"
        value={guarantorCnic}
        onChange={(e) => setGuarantorCnic(e.target.value)}
        placeholder="Guarantor CNIC"
        className="w-full p-3 border rounded-lg transition duration-300"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
