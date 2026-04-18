const testLogin = async () => {
    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'password123'
            })
        });
        const data = await response.json();
        console.log('Login Status:', response.status);
        console.log('Login Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Login Failed:', error.message);
    }
};

testLogin();
