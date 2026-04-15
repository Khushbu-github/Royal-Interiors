const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany(); // Caution: Deletes all users
    
    // Create Admin User
    const adminUser = new User({
        username: 'admin',
        password: 'password123' 
    });
    
    // Password hashing is handled in User.js pre-save hook
    await adminUser.save();
    
    console.log('Data Imported!');
    console.log('Admin Credentials:');
    console.log('Username: admin');
    console.log('Password: password123');
    
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
