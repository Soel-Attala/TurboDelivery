
import { Container, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

function OrderForm() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h1">Order Form</Typography>
            {/* Add order form fields here */}
        </Container>
    );
}

export default OrderForm;
