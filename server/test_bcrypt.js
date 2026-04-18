const bcrypt = require('bcryptjs');

const testBcrypt = async () => {
    try {
        const password = 'password123';
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        console.log('Hash:', hash);
        const isMatch = await bcrypt.compare(password, hash);
        console.log('Match:', isMatch);
        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

testBcrypt();
