// models/LoanRequest.js
const mongoose = require('mongoose');

const loanRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cnic: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  initialDeposit: { type: Number, required: true },
  loanPeriod: { type: Number, required: true },
  guarantors: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      location: { type: String, required: true },
      cnic: { type: String, required: true }
    }
  ],
});

const LoanRequest = mongoose.model('LoanRequest', loanRequestSchema);

module.exports = LoanRequest;
