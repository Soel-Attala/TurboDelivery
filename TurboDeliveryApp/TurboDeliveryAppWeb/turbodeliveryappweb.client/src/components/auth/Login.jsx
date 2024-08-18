import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="white"
        >
            <Box
                display="flex"
                alignItems="center"
                mb={2}
            >
                <img src="/path-to-your-logo.png" alt="TurboDelivery Logo" style={{ height: 40, marginRight: 8 }} />
                <Typography variant="h6" color="textPrimary">
                    TurboDelivery
                </Typography>
            </Box>

            <Container maxWidth="xs">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    p={4}
                    boxShadow={3}
                    borderRadius={2}
                    bgcolor="white"
                >
                    <Typography variant="h5" gutterBottom color="#000000">
                        Iniciar Sesión
                    </Typography>
                    <form onSubmit={handleLogin} style={{ width: '100%' }}>
                        <TextField
                            label="Username"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                            Sign In
                        </Button>
                    </form>
                    <Typography variant="body2" sx={{ mt: 2 }} color="#000000">
                        ¿No tienes una cuenta? <Link href="/register">Regístrate aquí</Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
