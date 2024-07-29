
import { AppBar, Toolbar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[4],
    },
    logo: {
        height: 40,
        marginRight: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    link: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        margin: theme.spacing(1),
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container className={classes.menu}>
                    <Link to="/" className="link">
                        <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
                    </Link>
                    <div>
                        <Link to="/dashboard" className="link">Dashboard</Link>
                        <Link to="/order-form" className="link">My Orders</Link>
                        <Link to="/profile" className="link">Profile</Link>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
