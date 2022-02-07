const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ExpenseSchema = new Schema({
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  });

  
module.exports = mongoose.model("Expense", ExpenseSchema);