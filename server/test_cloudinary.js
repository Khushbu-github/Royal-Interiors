const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

console.log('Testing Cloudinary Connection...');
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.CLOUDINARY_API_KEY);
console.log('API Key Length:', process.env.CLOUDINARY_API_KEY ? process.env.CLOUDINARY_API_KEY.length : 0);
console.log('API Secret (First 2):', process.env.CLOUDINARY_API_SECRET ? process.env.CLOUDINARY_API_SECRET.slice(0,2) : 'Missing');
console.log('API Secret Length:', process.env.CLOUDINARY_API_SECRET ? process.env.CLOUDINARY_API_SECRET.length : 0);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

async function testConnection() {
    try {
        const result = await cloudinary.api.ping();
        console.log('Connection Successful:', result);
    } catch (error) {
        console.error('Connection Failed:', error.message);
        if (error.error) console.error('Details:', error.error);
    }
}

testConnection();
