import { useState, useEffect } from 'react';
import { Container, Typography, Paper, TextField, Button, Grid } from '@mui/material';

function Profile() {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await fetch('/api/user/profile'); // Ajusta la URL según tu API
            const result = await response.json();
            setProfile({
                name: result.name,
                email: result.email,
                phone: result.phone,
            });
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    const handleSave = async () => {
        try {
            await fetch('/api/user/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profile),
            });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Profile
            </Typography>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            value={profile.phone}
                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: '16px' }}>
                    Save Changes
                </Button>
            </Paper>
        </Container>
    );
}

export default Profile;
