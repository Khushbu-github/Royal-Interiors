const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { loginUser } = require('./controllers/authController');
const User = require('./models/User');

dotenv.config();

const runTest = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected');

        // Mock Req
        const req = {
            body: {
                username: 'admin',
                password: 'password123'
            }
        };

        // Mock Res
        const res = {
            status: function(s) { this.statusCode = s; return this; },
            json: function(j) { 
                console.log('Response Status:', this.statusCode || 200);
                console.log('Response Data:', JSON.stringify(j, null, 2));
                return this;
            }
        };

        await loginUser(req, res);
        
        process.exit(0);
    } catch (error) {
        console.error('Test script exploded:', error);
        process.exit(1);
    }
};

runTest();
