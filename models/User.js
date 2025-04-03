const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries: [
    {
      name: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      panCard: { type: String, required: true }, // New PAN card field
      dob: { type: String, required: true },
      submittedAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
