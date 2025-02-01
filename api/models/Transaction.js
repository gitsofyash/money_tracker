const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true},
  datetime: { type: Date, default: Date.now, required: true }, // Renamed "date" to match API
});

const TransactionModel = model("Transaction", TransactionSchema);
module.exports = TransactionModel;