const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

// POST route to add user data to MongoDB
router.post('/', async (req, res) => {
    try {
        const { name, email, age, address } = req.body;
        const user = new User({ name, email, age, address });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: 'Failed to add user' });
    }
});

// GET route to fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: 'Failed to fetch users' });
    }
});

module.exports = router;
