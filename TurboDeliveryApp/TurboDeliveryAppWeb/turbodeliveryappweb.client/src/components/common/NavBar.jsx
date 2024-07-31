
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: '#fff',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Turbo Delivery
                </Typography>
                <Button color="inherit">
                    <Link to="/dashboard" className={classes.link}>Dashboard</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/order-form" className={classes.link}>Order Form</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/order-list" className={classes.link}>Order List</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/profile" className={classes.link}>Profile</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/map" className={classes.link}>Map</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/customers" className={classes.link}>Customers</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
