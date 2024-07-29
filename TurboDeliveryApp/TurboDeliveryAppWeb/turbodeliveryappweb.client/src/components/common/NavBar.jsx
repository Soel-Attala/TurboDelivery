import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Turbo Delivery
                    </Typography>
                    <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                    <Button color="inherit" component={Link} to="/order-list">My Orders</Button>
                    <Button color="inherit" component={Link} to="/profile">Profile</Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
