
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const Root = styled('div')({
    flexGrow: 1,
});

const Title = styled(Typography)({
    flexGrow: 1,
    color: '#fff',
});

const StyledLink = styled(Link)({
    color: '#fff',
    textDecoration: 'none',
});

function Navbar() {
    return (
        <Root>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Title variant="h6">
                        Turbo Delivery
                    </Title>
                    <Button color="inherit">
                        <StyledLink component={NavLink} to="/dashboard">Dashboard</StyledLink>
                    </Button>
                    <Button color="inherit">
                        <StyledLink component={NavLink} to="/order-form">Order Form</StyledLink>
                    </Button>
                    <Button color="inherit">
                        <StyledLink component={NavLink} to="/order-list">Order List</StyledLink>
                    </Button>
                    <Button color="inherit">
                        <StyledLink component={NavLink} to="/profile">Profile</StyledLink>
                    </Button>
                    <Button color="inherit">
                        <StyledLink component={NavLink} to="/map">Map</StyledLink>
                    </Button>
                    <Button color="inherit">
                        <StyledLink component={NavLink} to="/customers">Customers</StyledLink>
                    </Button>
                </Toolbar>
            </AppBar>
        </Root>
    );
}

export default Navbar;
