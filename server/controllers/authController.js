const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register a new admin (Helper route)
// @route   POST /auth/register
// @access  Public
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ username });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
        username,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id)
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// @desc    Auth user & get token
// @route   POST /auth/login
// @access  Public
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    console.log(`🔐 Login attempt for: ${username}`);

    try {
        // Find user
        const user = await User.findOne({ username });

        if (!user) {
            console.log(`❌ User not found: ${username}`);
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isMatch = await user.matchPassword(password);
        
        if (isMatch) {
            console.log(`✅ Login successful: ${username}`);
            res.json({
                _id: user._id,
                username: user.username,
                token: generateToken(user._id)
            });
        } else {
            console.log(`❌ Password mismatch for: ${username}`);
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('🔥 Login Error:', error);
        res.status(500).json({ message: 'Internal server error during login' });
    }
};

module.exports = { registerUser, loginUser };
