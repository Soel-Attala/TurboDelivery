import { useState, useEffect } from 'react';
import { Container, Typography, makeStyles } from '@mui/material';
import './Customers.css';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

function Customers() {
    const classes = useStyles();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await fetch('/api/customers');
            const result = await response.json();
            setCustomers(result);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    return (
        <Container className={classes.root}>
            <Typography variant="h1">Customers</Typography>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name} - {customer.email}</li>
                ))}
            </ul>
        </Container>
    );
}

export default Customers;
