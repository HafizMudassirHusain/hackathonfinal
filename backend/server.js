// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');  // Import the CORS package
const LoanRequest = require('./models/LoanRequest');

const app = express();

// Use CORS middleware to allow requests from the frontend
app.use(cors());

// Middleware to parse incoming JSON
app.use(express.json());

// MongoDB connection code
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

// POST route to submit loan request
app.post('/api/loan/submit', async (req, res) => {
  try {
    const { name, email, cnic, category, subcategory, initialDeposit, loanPeriod, guarantors } = req.body;

    // Validation
    if (!name || !email || !cnic || !category || !subcategory || !initialDeposit || !loanPeriod || !guarantors) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Proceed with the rest of the validation and saving to the database
    const newLoanRequest = new LoanRequest({
      name,
      email,
      cnic,
      category,
      subcategory,
      initialDeposit,
      loanPeriod,
      guarantors,
    });

    await newLoanRequest.save();
    res.status(200).json({ message: 'Loan request submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting loan request', error: err });
  }
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
