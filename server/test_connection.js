const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const testConnection = async () => {
    try {
        console.log('Connecting to:', process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected');
        process.exit(0);
    } catch (error) {
        console.error('❌ Connection Error:', error.message);
        process.exit(1);
    }
};

testConnection();
