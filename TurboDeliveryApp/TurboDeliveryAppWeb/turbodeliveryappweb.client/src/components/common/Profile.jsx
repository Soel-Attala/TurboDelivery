import { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';

function Profile() {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch('/api/user/profile');
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                alert('Profile updated successfully!');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Typography variant="h4">Profile</Typography>
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
                <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
            </Container>
            <Footer />
        </div>
    );
}

export default Profile;
