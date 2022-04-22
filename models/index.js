const mongoose = require('mongoose');

const { Schema } = mongoose;

require('../config/db.connection');

const companySchema = new Schema({
  name: { type: String, required: true },
  founded: Date,
  employees: Number,
  product: [String],
  active: Boolean,
  ceo: {
    name: { type: String },
    age: { type: Number }
  }
});

const Company = mongoose.model('Company', companySchema);

module.exports = { Company };