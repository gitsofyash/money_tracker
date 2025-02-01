const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from Express!", status: "success" });
});

app.post("/api/transaction", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { name, datetime, description, price } = req.body; // Added 'price' field
    const transaction = await Transaction.create({ name, datetime, description, price }); // Include 'price'
    res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.listen(4000);
