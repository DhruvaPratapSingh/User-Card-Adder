const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
