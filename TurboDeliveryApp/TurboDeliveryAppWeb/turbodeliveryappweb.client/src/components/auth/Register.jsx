import { useState } from 'react';
import { Container, TextField, Button, Typography, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../Config/axiosConfig';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('/user/CreateUser', formData);
            const data = response.data;
            setSuccess(data.message);
            setSnackbarOpen(true);

            setFormData({
                username: '',
                password: '',
                email: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
            });

            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 409) { 
                    setError('Username or email already exists.');
                    setSnackbarOpen(true);
                } else if (error.response.status === 400) { 
                    setError('Please check your inputs.');
                } else {
                    setError('Registration failed. Please try again.');
                }
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Container className="register-container">
            <Typography variant="h4" gutterBottom>Register</Typography>
            <form className="register-form" onSubmit={handleRegister}>
                <TextField
                    label="Username"
                    name="username"
                    fullWidth
                    margin="dense"
                    className="input-field"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="dense"
                    className="input-field"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email" 
                    fullWidth
                    margin="dense"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    margin="dense"
                    className="input-field"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    margin="dense"
                    className="input-field"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <TextField
                    label="Address"
                    name="address"
                    fullWidth
                    margin="dense"
                    className="input-field"
                    value={formData.address}
                    onChange={handleChange}
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    fullWidth
                    margin="dense"
                    className="input-field"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth className="register-button" disabled={loading}>
                    {loading ? 'Loading...' : 'Register'}
                </Button>
            </form>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={success ? "Registration successful!" : error}
            />
        </Container>
    );
};

export default Register;
