const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let IncomeSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Income", IncomeSchema);
