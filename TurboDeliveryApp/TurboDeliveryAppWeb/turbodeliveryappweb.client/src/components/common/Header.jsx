
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const Title = styled(Typography)({
    flexGrow: 1,
    color: '#fff',
});

const StyledLink = styled(Link)({
    color: '#fff',
    textDecoration: 'none',
});

function Header() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Title variant="h6">
                    Turbo Delivery
                </Title>
                <Button color="inherit">
                    <StyledLink to="/dashboard">Dashboard</StyledLink>
                </Button>
                <Button color="inherit">
                    <StyledLink to="/order-form">Order Form</StyledLink>
                </Button>
                <Button color="inherit">
                    <StyledLink to="/order-list">Order List</StyledLink>
                </Button>
                <Button color="inherit">
                    <StyledLink to="/profile">Profile</StyledLink>
                </Button>
                <Button color="inherit">
                    <StyledLink to="/map">Map</StyledLink>
                </Button>
                <Button color="inherit">
                    <StyledLink to="/customers">Customers</StyledLink>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
