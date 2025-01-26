// routes/loanRoutes.js
const express = require('express');
const LoanRequest = require('../models/LoanRequest');
const router = express.Router();

// Submit loan request
router.post('/submit', async (req, res) => {
  const { userId, category, subcategory, initialDeposit, loanPeriod, guarantors } = req.body;

  const newLoanRequest = new LoanRequest({
    userId,
    category,
    subcategory,
    initialDeposit,
    loanPeriod,
    guarantors,
  });

  try {
    const savedRequest = await newLoanRequest.save();
    res.status(200).json({ message: 'Loan request submitted', data: savedRequest });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting loan request', error });
  }
});

module.exports = router;
