import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            if (response.ok) {
                alert('Login successful!');
                // Redirect or handle post-login logic here
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Typography variant="h4">Login</Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">Login</Button>
                </form>
            </Container>
            <Footer />
        </div>
    );
}

export default Login;
