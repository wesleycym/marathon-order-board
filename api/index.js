const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Sample Route
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

module.exports = app; // Required for Vercel Deployment