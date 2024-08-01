import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import './Customers.css';

function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await fetch('/api/userlist');
            const result = await response.json();
            setCustomers(result);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    return (
        <Container sx={{ padding: 3 }}>
            <Typography variant="h1" gutterBottom>
                Customers
            </Typography>
            <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
                {customers.map(customer => (
                    <Box component="li" key={customer.id} sx={{ marginBottom: 1 }}>
                        {customer.name} - {customer.email}
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default Customers;
