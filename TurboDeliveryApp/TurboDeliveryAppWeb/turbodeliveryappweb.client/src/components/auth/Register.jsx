import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';

function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                alert('Registration successful!');
                // Redirect or handle post-registration logic here
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Typography variant="h4">Register</Typography>
                <form onSubmit={handleRegister}>
                    <TextField
                        label="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">Register</Button>
                </form>
            </Container>
            <Footer />
        </div>
    );
}

export default Register;
